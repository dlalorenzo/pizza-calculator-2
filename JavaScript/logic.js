const pizzas = [
{name: "Tonno", price: "10", img: "img/tonijn.jpg", toppings: "tomato saus, mozzarella, red unions, tonno"},
{name: "Hawaii", price: "5", toppings: "tomato saus, mozzarella, ham, pineaple "},
{name: "Salami", price: "6", toppings: "tomato saus, mozzarella, pepperoni"},
{name: "Mozzarella", price: "6", toppings: "tomato saus, mozzarella, tomato, pesto"},
{name: "Chicken-kebab", price: "6", toppings: "tomato saus, mozzarella, red unions, chicken-kebab, garlicsaus"},
{name: "shoarma", price: "6", toppings: "tomato saus, mozzarella, shoarma, garlicsaus "},
{name: "Prosciutto", price: "6", toppings: "tomato saus, mozzarella, tomato,  prosciutto, oregano, rucola"},
{name: "Quattro-formaggi", price: "6", toppings: "tomato saus, mozzarella, ricotta, gorgonzola, pecorino"},
{name: "Margarita", price: "6", toppings: "tomato saus, mozzarella, oregano"},
{name: "Hot-Spicy", price: "6", toppings: "tomato saus, mozzarella, chicken, red union, paprika, pepperoni, peppers"},
{name: "funghi", price: "6", toppings: "tomato saus, mozzarella, mushroom, oregano"}
];

for(i = 0; i < pizzas.length; i++){
console.log(pizzas[i].name)
console.log(pizzas[i].price)
console.log(pizzas[i].toppings)
};

// let x = document.getElementById("tonno");
// x.innerHTML = "tonijn";
// console.log(x)

document.getElementById("tonno").innerHTML = "tonijn";
document.getElementById("hawaii").innerHTML = "hawaii";
document.getElementById("salami").innerHTML = "pepperoni";
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
	document.getElementById("toppings").innerHTML = pizzas[show].toppings;
}
//}

function back(){
	document.getElementById("menukaart").style.display = "block";
	document.getElementById("showPizza").style.display ="none";
	document.getElementById("terug").style.display ="none";
}
