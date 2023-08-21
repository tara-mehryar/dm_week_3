const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const prettyPrintCupcake = (cupcake) => {
  return `${cupcake.flavor} cupcakes cost ${priceFormatter.format(cupcake.price)} each`;
};

export const simplePrintCupcake = (cupcake) => {
  return `${cupcake.flavor}: ${priceFormatter.format(cupcake.price)}`;
};
