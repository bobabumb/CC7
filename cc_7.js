// task 1 function declaration
const calculateInvoice = (subtotal, taxRate, discount) =>
    `total invoice: $${((subtotal * (1 + taxRate)) - discount).toFixed(2)}`;
// test data
console.log(calculateInvoice(100, 0.08, 5)); // expected output: "total invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // expected output: "total invoice: $530.00"

// task 2 function expression
const calculateHourlyWage = function(salary, hoursPerWeek) {
    const hourlyWage = salary / (hoursPerWeek * 52);
    return `hourly wage: $${hourlyWage.toFixed(2)}`;
};
// test data
console.log(calculateHourlyWage(52000, 40)); // expected output: "hourly wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // expected output: "hourly wage: $41.21"