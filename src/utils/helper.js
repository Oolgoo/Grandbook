export const getDiscountedPricePercentage = (
    comparePrice,
    salePrice
) => {
    const discount = comparePrice - salePrice;

    const discountPercentage = (discount / comparePrice) * 100;

    return discountPercentage;
};