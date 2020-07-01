let initValue = 1000;
let discountValue = 0;
[
  {
    "discountType": "Percent",
    "discountValue": 10,
  },
  {
    "discountType": "Value",
    "discountValue": 123,
  },
].map((obj, index) => {
  if (obj.discountType === 'Percent') {
    discountValue = discountValue + (initValue * (obj.discountValue / 100));
  }
  if (obj.discountType === 'Value') {
    discountValue += obj.discountValue;
  }
})
console.log(discountValue);
