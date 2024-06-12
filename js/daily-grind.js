// alert("Dinkleberg!");

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = {};
console.log(myDay);

function coffeeTemplate(coffee) {
  return `
    <p>
      <img
        src="${coffee.pic}"
        alt="${coffee.alt}"
        id="coffee"
      />
      <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily
      coffee special is <strong class="feature">${coffee.name}</strong>,
      ${coffee.desc}!
    </p>`;
}

switch (myDay) {
  case 0:
    today = "Sunday";
    coffee = {
      name: "Cold Brew",
      pic: "images/cold-brew.jpg",
      alt: "a picture of a cold brew",
      color: "yellow",
      day: "Sunday",
      desc: "I like me some Cold Brew!",
    };
    break;
  case 1:
    today = "Monday";
    coffee = {
      name: "Mocha",
      pic: "images/mocha.jpg",
      alt: "a picture of a cup of mocha coffee",
      color: "brown",
      day: "Monday",
      desc: "I like me some mocha!",
    };
    break;
  case 2:
    today = "Tuesday";
    coffee = {
      name: "Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "a picture of a Bubble Tea",
      color: "pink",
      day: "Tuesday",
      desc: "I like me some Bubble Tea!",
    };
    break;
  case 3:
    today = "Wednesday";
    coffee = {
      name: "caramel-latte",
      pic: "images/caramel-latte.jpg",
      alt: "a picture of a caramel-latte",
      color: "green",
      day: "Wednesday",
      desc: "I like me some caramel-latte!",
    };
    break;
  case 4:
    today = "Thursday";
    coffee = {
      name: "drip",
      pic: "images/drip.jpg",
      alt: "a picture of an drip",
      color: "red",
      day: "Thursday",
      desc: "I like me some drip!",
    };
    break;
  case 5:
    today = "Friday";
    coffee = {
      name: "frappacino",
      pic: "images/frappacino.jpg",
      alt: "a picture of a frappacino",
      color: "purple",
      day: "Friday",
      desc: "I like me some frappacino!",
    };
    break;
  case 6:
    today = "Saturday";
    coffee = {
      name: "pumpkin-spice-latte",
      pic: "images/pumkin-spice-latte.jpg",
      alt: "a picture of a pumpkin-spice-latte",
      color: "orange",
      day: "Saturday",
      desc: "I like me some pumpkin-spice-latte!",
    };
    break;
  default:
    today = "Something went Wrong";
}

console.log(today);

// Example of how you might use the coffeeTemplate function to add the coffee of the day to the DOM
document.getElementById("coffee-special").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;
