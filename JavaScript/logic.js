const pizzas = [
{name: "Tonno", price: 800, img: "img/tonno.jpg", description: "tomato saus, mozzarella, red unions, tonno"},
{name: "Hawaii", price: 600, img:"img/hawaii.jpg", description: "tomato saus, mozzarella, ham, pineaple "},
{name: "Salami", price: 500, img:"img/salami.jpg", description: "tomato saus, mozzarella, pepperoni"},
{name: "Mozzarella", price: 500, img:"img/mozzarella.jpg", description: "tomato saus, mozzarella, tomato, pesto"},
{name: "Chicken-kebab", price: 1000, img:"img/chicken-kebab.jpg", description: "tomato saus, mozzarella, red unions, chicken-kebab, garlicsaus"},
{name: "shoarma", price: 1000, img:"img/shoarma.jpg", description: "tomato saus, mozzarella, shoarma, garlicsaus "},
{name: "Prosciutto", price: 1200, img:"img/prosciutto.jpg", description: "tomato saus, mozzarella, tomato,  prosciutto, oregano, rucola"},
{name: "Quattro-formaggi", price: 700, img:"img/quattro-formaggi.jpg", description: "tomato saus, mozzarella, ricotta, gorgonzola, pecorino"},
{name: "Margarita", price: 500, img:"img/margarita.jpg", description: "tomato saus, mozzarella, oregano"},
{name: "Hot-Spicy", price: 1000, img:"img/hot-spicy.jpg", description: "tomato saus, mozzarella, chicken, red union, paprika, pepperoni, peppers"},
{name: "funghi", price: 800, img:"img/funghi.jpg", description: "tomato saus, mozzarella, mushroom, oregano"}
];
const toppings = [
"extra kaas, pepperoni, sausage, bacon, peppers, mushroom, black olives, jalepenoes, pineapples, onion, diced tomatoes, ham, anchovies"
];

	let total = 0.00;
	let topping = 0.50;
	let count = 0; 

for(i = 0; i < pizzas.length; i++){
console.log(pizzas[i].name)
console.log(pizzas[i].price)
console.log(pizzas[i].img)
console.log(pizzas[i].description)
};

// let x = document.getElementById("tonno");
// x.innerHTML = "tonijn";
// console.log(x)

document.getElementById("tonno").innerHTML = "tonijn";
document.getElementById("hawaii").innerHTML = "hawaii";
document.getElementById("salami").innerHTML = "salami";
document.getElementById("mozzarella").innerHTML = "mozzarella";
document.getElementById("chicken-kebab").innerHTML = "chicken-kebab";
document.getElementById("prosciutto").innerHTML = "prosciutto";
document.getElementById("shoarma").innerHTML = "shoarma";
document.getElementById("quattro-formaggi").innerHTML = "quattro-formaggi";
document.getElementById("margarita").innerHTML = "margarita";
document.getElementById("hot-spicy").innerHTML = "hot&spicy";
document.getElementById("funghi").innerHTML = "funghi";

function pizza(){
	var btn = document.getElementById("tonno");
	  btn.innerHTML = "tonijn";
	  document.getElementById('funghi').style.display = "none";
	  var img = pizzas[0].img;
	  console.log(img);
}

function showPizza(show){
	document.getElementById("menukaart").style.display = "none";
	document.getElementById("showPizza").style.display ="initial";
	document.getElementById("terug").style.display ="initial";

	//for (var henk3 = 0; henk3 < pizzas.length; henk3++){
	
	document.getElementById("name").innerHTML = pizzas[show].name;
	document.getElementById("price").innerHTML = pizzas[show].price;
	document.getElementById("img").src = pizzas[show].img;
	document.getElementById("description").innerHTML = pizzas[show].toppings;
}
//}

function back(){
	document.getElementById("menukaart").style.display = "block";
	document.getElementById("showPizza").style.display ="none";
	document.getElementById("terug").style.display ="none";
}
