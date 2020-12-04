function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + "came first.");

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += ":)";
    }
  }
  board += "\n";
}

console.log(board);

// let object1 = { value: 10 };
// let object2 = object1;
// let object3 = { value: 10 };

// console.log(object1 === object3);
// let sentence = ["evangadi", "school", "teach", "how", "to", "code"];

// let words = sentence.join(" ");

// console.log("HA".repeat(5));

// let string = "abcdef";

// console.log(string[3 - 0]);

// let string = JSON.stringify({ abigail: false, events: ["weekend"] });
// console.log(JSON.parse(string));
// var name = "mandy";

// alert("welcome: " + name);

// function greet(name) {
//   return "hi I'am" + name;
// }
// console.log(greet);
const companies = [
  { name: "Company one", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "retail", start: 1990, end: 2003 },
  { name: "Company Three", category: "auto", start: 1997, end: 2003 },
  { name: "Company four", category: "technology", start: 1999, end: 2003 },
  { name: "Company five", category: "Finance", start: 1993, end: 2003 },
  { name: "Company six", category: "banking", start: 1998, end: 2003 },
  { name: "Company seven", category: "technology", start: 1998, end: 2003 },
  { name: "Company eight", category: "retail", start: 1995, end: 2003 },
];

const ages = [33, 12, 20, 16, 54, 21, 44, 44, 61, 13];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// // }

// //forEach
// // companies.forEach(function (company) {
// //   console.log(company);
// // });

// // let canDrink = [];
// // for (let i = 0; i < ages.length; i++) {
// //   if (ages[i] >= 21) {
// //     canDrink.push(ages[i]);
// //   }
// // }

// //filter
// // const canDrink = ages.filter(function (age) {
// //   if (age >= 21) {
// //     return true;
// //   }
// // });

// // const canDrink = ages.filter((age) => age >= 21);

// // const retailCompanies = companies.filter(function (company) {
// //   if (company.category === "Retail") {
// //     return true;
// //   }
// // });

// // const retailCompanies = companies.filter(
// //   (company) => (company.category = "Finance")
// // );

// // const eightiesCompanies = companies.filter(
// //   (company) => company.start >= 1980 && company.start < 1990
// // );

// // const lastedTenYears = companies.filter(
// //   (company) => company.end - company.start >= 10
// // );

// // console.log(lastedTenYears);

// // const companyNames = companies.map(function (company) {
// //   return 1;
// // });

// // console.log(test);

// // alert("Mandy is very pretty and awesome but she gets crazy sometimes(lol)");
// // console.log(alert);

// // function multiply(a, b) {
// //   return a * b;
// // }

// ((
//   <div
//     data-qe-id="payment-icon-visa"
//     class="v-commerce-sprite pm-icon payment-icon-visa"
//     data-v-45b74e4a=""
//     data-v-4cb5178e=""
//   ></div>
// ),
// console.log(paymentSystem)),
//   (
//     <div
//       data-qe-id="payment-icon-mastercard"
//       class="v-commerce-sprite pm-icon payment-icon-mastercard"
//       data-v-45b74e4a=""
//       data-v-4cb5178e=""
//     ></div>
//   ),
//   (
//     <div
//       data-qe-id="payment-icon-amex"
//       class="v-commerce-sprite pm-icon payment-icon-amex"
//       data-v-45b74e4a=""
//       data-v-4cb5178e=""
//     ></div>
//   ),
//   (
//     <div
//       data-qe-id="payment-icon-discover"
//       class="v-commerce-sprite pm-icon payment-icon-discover"
//       data-v-45b74e4a=""
//       data-v-4cb5178e=""
//     ></div>
//   ),
//   (
//     <div
//       data-qe-id="payment-icon-diners"
//       class="v-commerce-sprite pm-icon payment-icon-diners"
//       data-v-45b74e4a=""
//       data-v-4cb5178e=""
//     ></div>
//   ),
//   (
//     <div
//       data-qe-id="payment-icon-chinaUnionPay"
//       class="v-commerce-sprite pm-icon payment-icon-chinaUnionPay"
//       data-v-45b74e4a=""
//       data-v-4cb5178e=""
//     ></div>
//   ),
//   (
//     <div
//       data-qe-id="payment-icon-jcb"
//       class="v-commerce-sprite pm-icon payment-icon-jcb"
//       data-v-45b74e4a=""
//       data-v-4cb5178e=""
//     ></div>
//   ),
//   (
//     <div
//       data-qe-id="payment-icon-paypal"
//       class="v-commerce-sprite pm-icon payment-icon-paypal"
//       data-v-45b74e4a=""
//       data-v-4cb5178e=""
//     ></div>
//   );
