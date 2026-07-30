export async function validateBody(req, res, next) {
    const { unit, benefitType, details, decisionReason, budgetApprove, startDate } = req.body
    if (req.method === "post" && !unit || req.method === "post" && typeof unit != "string") return res.status(400).json({ message: "valid unit is missing" });
    if (!benefitType || typeof benefitType != "string") return res.status(400).json({ message: "valid benefitType is missing" });
    if (!decisionReason || typeof decisionReason != "string") return res.status(400).json({ message: "valid desicionReason is missing" });
    if (!budgetApprove || budgetApprove != true) return res.status(400).json({ message: "valid budgetApprove is missing" });
    if (startDate && typeof startDate != "string") return res.status(400).json({ message: "startDate is not valid" });
    if (benefitType === "diningHal" && !details.baseId || benefitType === "diningHal" && isNaN(details.baseId)) return res.status(400).json({ message: "valid baseId is missing" });
    if (benefitType === "diningHal" && !details.kosherLevel || benefitType === "diningHal" && typeof details.kosherLevel != "string") return res.status(400).json({ message: "valid kosherLevel is missing" });
    if (benefitType === "diningHal" && !details.mealTimes || benefitType === "diningHal" && typeof details.mealTimes != "string") return res.status(400).json({ message: "valid mealTime is missing" });
    if (benefitType === "giftCard" && !details.cardProvider || benefitType === "giftCard" && typeof details.cardProvider != "string") return res.status(400).json({ message: "valid cardProvide is missing" });
    if (benefitType === "giftCard" && !details.monthlyValue || benefitType === "giftCard" && isNaN(details.monthlyValue)) return res.status(400).json({ message: "valid monthlyValue is missing" });
    if (benefitType === "giftCard" && !details.validMerchants || benefitType === "giftCard" && !Array.isArray(details.validMerchants) || benefitType === "giftCard" && !details.validMerchants.every(item => typeof item === "string")) return res.status(400).json({ message: "valid validMerchants is missing" });

    next()



}