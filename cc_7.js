// task 1 function declaration
const calculateInvoice = (subtotal, taxRate, discount) =>
    `total invoice: $${((subtotal * (1 + taxRate)) - discount).toFixed(2)}`;
// test data
console.log(calculateInvoice(100, 0.08, 5));
console.log(calculateInvoice(500, 0.1, 20));