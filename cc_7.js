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

 // task 5 returning values
 const calculateLoanInterest = (principal, rate, years) => {
    const interest = principal * rate * years; // calculating total interest using formula
    const formattedInterest = interest.toFixed(2); // formatting interest to two decimal places
    return `total interest: $${formattedInterest}`; // return the result as a string
 }; 
 console.log(calculateLoanInterest(1000, 0.05, 3)); // expected output: "total interest: $150.00"
 console.log(calculateLoanInterest(5000, 0.07, 5)); // expected output: "total interest: $1750.00"

 // task 6 higher-order functions
 let transaction = [500, 1200, 3000, 800, 2200]; // declaring transaction array
 const filterHighValueTransaction = (transaction, filterFunction) => {
    return transaction.filter(filterFunction); // higher-order function to filter high-value transactions
 };
// test data
const highValueTransaction = filterHighValueTransaction(transaction, amount => amount > 1000);
console.log(highValueTransaction); // expected output: [1200, 3000, 2200]

// task 7 closures
const createBudgetTracker = () => {
    let balance = 0; // initialize balance to 0
    return (expense) => {
        balance -= expense; // subtracting the expense from the balance
        return `current balance: -$${Math.abs(balance).toFixed(2)}`; // return updated balance
    };
};
// test data 
let budget = createBudgetTracker();
console.log(budget(300)); // expected output: "current balance: -$300"
console.log(budget(200)); // expected output: "current balance: -$500"

// task 8 recursion in JavaScript
const calculateGrowth = (years, revenue) => 
    years === 0 ? `project revenue: $${revenue.toFixed(2)}` : calculateGrowth(years - 1, revenue * 1.05);
// test data
console.log(calculateGrowth(8, 1000)); // expected output: "project revenue: $1102"
console.log(calculateGrowth(5, 5000)); // expected output: "project revenue: $6381"