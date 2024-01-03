// Basic function
function coffeeMaker() {
  let ingredient1 = "coffee beans";
  let ingredient2 = "Milk";
  let ingredient3 = "Water";

  console.log(ingredient1);
  console.log("Your coffee is ready");
  return ingredient1;
}

// console.log("Line 11: ", coffeeMaker());

function customCoffee(ingredient1, ingredient2 = "Regular Milk") {
  console.log("Coffee making in progress....");
  let water = "Water";
  let sugar = "sugar";

  const coffee = `You special coffee with ${ingredient1} & ${ingredient2} is ready`;

  return coffee;
}

// console.log(customCoffee("Almond Milk", "Special Coffee Beans"));
const readyCoffee = customCoffee("Special Coffee Beans", "Tonned Milk");
// console.log(readyCoffee);

function printHobbies(...hobbies) {
  console.log(hobbies);
}

// printHobbies("Reading", "Travelling", "Coding", "Cooking");

function calculateAreaOfRect(length, width) {
  console.log(`The area of the rect is ${length * width}`);
}

calculateAreaOfRect(10.5, 90);
calculateAreaOfRect(102, 90);
calculateAreaOfRect(11, 90);
calculateAreaOfRect(5, 91);
// calculateAreaOfRect(10.5, 90);
// calculateAreaOfRect(10.5, 90);
// calculateAreaOfRect(10.5, 90);
// calculateAreaOfRect(10.5, 90);
// calculateAreaOfRect(10.5, 90);
// calculateAreaOfRect(10.5, 90);
// calculateAreaOfRect(10.5, 90);
// calculateAreaOfRect(10.5, 90);
