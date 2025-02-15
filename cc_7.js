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

// task 3 arrow function
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate;
    if (years >= 5) {
        discountRate = 0.15; // 15% discount
    } else if (years >= 3) {
        discountRate = 0.10; // 10% discount
    } else {
        discountRate = 0.05; // 5% discount
    }
    const discountedPrice = amount - (amount * discountRate);
    return `discounted price: $${discountedPrice.toFixed(2)}`;
};
// test data
 console.log(calculateLoyaltyDiscount(100, 6)); // expected output: "discounted price: $85.00"
 console.log(calculateLoyaltyDiscount(200, 2)); // expected output: "discounted price: $190.00"

 // task 4 parameters and arguments 
 const calculateShippingCost = (weight, location, expedited = false) => {
    const baseCost = location ==- "USA" ? 5 + (0.5 * weight) : location === "canada" ? 10 + (0.7 * weight) : null;
    if (baseCost === null) throw new Error("unsupported location");
    return `shipping cost: $${(baseCost + (expedited ? 10 : 0)).toFixed(2)}`;
 }; 
 // test data
 console.log(calculateShippingCost(10, "USA", true)); // expected output: "shipping cost: $20.00"
 console.log(calculateShippingCost(5, "canada", false)); // expected output: "shipping cost: $13.50"
