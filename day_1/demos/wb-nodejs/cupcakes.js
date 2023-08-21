const cupcakes = [
  {
    flavor: 'vanilla',
    price: 2.0,
  },
  {
    flavor: 'chocolate',
    price: 2.5,
  },
  {
    flavor: 'red velvet',
    price: 3.0,
  },
];

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const prettyPrintCupcake = (cupcake) => {
  return `${cupcake.flavor} cupcakes cost ${priceFormatter.format(cupcake.price)} each`;
};

const simplePrintCupcake = (cupcake) => {
  return `${cupcake.flavor}: ${priceFormatter.format(cupcake.price)}`;
};

for (const cupcake of cupcakes) {
  console.log(prettyPrintCupcake(cupcake));
}
