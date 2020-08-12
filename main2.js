var Basket = [];
var shirt = { name: 'shirt', price: 1000 };
var shoes = { name: 'shoes', price: 2000 };
var jeans = { name: 'jeans', price: 3000 };

Basket.push(shirt, shoes, jeans);



var countShirt = 0;
var countShoes = 0;
var countJeans = 0;
var i = 0

function countBasketPrice(countShirt, countShoes, countJeans) {

    var shirtCost = shirt.price * countShirt;
    var shoesCost = shoes.price * countShoes;
    var jeansCost = jeans.price * countJeans;

    return shirtCost + shoesCost + jeansCost
}

function allСountBasket(countShirt, countShoes, countJeans) {
    return countShirt + countShoes + countJeans
}




var product = document.createElement("div");
document.body.appendChild(product);
product.classList.add("product");
var blockShirt = document.createElement("div");
var blockShoes = document.createElement("div");
var blockJeans = document.createElement("div");
product.appendChild(blockShirt);
product.appendChild(blockShoes);
product.appendChild(blockJeans);
blockShirt.classList.add("block");
blockShoes.classList.add("block");
blockJeans.classList.add("block");
//blockShirt
blockShirt.id = 'blockShirt';
document.getElementById("blockShirt").innerHTML = "Цена: 1000р";
var imgShirt = document.createElement("IMG");
imgShirt.src = "img/shirt_1.png";
blockShirt.appendChild(imgShirt);
imgShirt.classList.add("men");
var buttonInShirt = document.createElement("button");
buttonInShirt.classList.add("button");
buttonInShirt.innerHTML = "Добавить товар в корзину";
var buttonOutShirt = document.createElement("button");
buttonOutShirt.innerHTML = "Убрать товар из корзины";
buttonOutShirt.classList.add("button");
blockShirt.appendChild(buttonInShirt);
blockShirt.appendChild(buttonOutShirt);
//blockShoes
blockShoes.id = 'blockShoes';
document.getElementById("blockShoes").innerHTML = "Цена: 2000р";
var imgShoes = document.createElement("IMG");
imgShoes.src = "img/boots_PNG7815.png";
blockShoes.appendChild(imgShoes);
imgShoes.classList.add("men");
var buttonInShoes = document.createElement("button");
buttonInShoes.classList.add("button");
buttonInShoes.innerHTML = "Добавить товар в корзину";
var buttonOutShoes = document.createElement("button");
buttonOutShoes.innerHTML = "Убрать товар из корзины";
buttonOutShoes.classList.add("button");
blockShoes.appendChild(buttonInShoes);
blockShoes.appendChild(buttonOutShoes);
//blockJeans
blockJeans.id = 'blockJeans';
document.getElementById("blockJeans").innerHTML = "Цена: 3000р";
var imgJeans = document.createElement("IMG");
imgJeans.src = "img/jeans_PNG5779.png";
blockJeans.appendChild(imgJeans);
imgJeans.classList.add("men");
var buttonInJeans = document.createElement("button");
buttonInJeans.classList.add("button");
buttonInJeans.innerHTML = "Добавить товар в корзину";
var buttonOutJeans = document.createElement("button");
buttonOutJeans.innerHTML = "Убрать товар из корзины";
buttonOutJeans.classList.add("button");
blockJeans.appendChild(buttonInJeans);
blockJeans.appendChild(buttonOutJeans);
//blockBasket
var allBasket = document.createElement("div");
document.body.appendChild(allBasket);
allBasket.classList.add("basket");
allBasket.id = 'allBasket';


var header = document.createElement("div");
allBasket.appendChild(header);
header.classList.add("header");
header.id = 'header';
document.getElementById("header").innerHTML = "Корзина товаров";


var blockBasket = document.createElement("div");
allBasket.appendChild(blockBasket);
blockBasket.classList.add("costProduct");
blockBasket.id = 'blockBasket';
document.getElementById("blockBasket").innerHTML = "В корзине нет товаров";




//логика(нет)




buttonInShirt.onclick = function() {
    countShirt++
    var allcost = countBasketPrice(countShirt, countShoes, countJeans);
    var allcount = allСountBasket(countShirt, countShoes, countJeans);
    console.log("Сумма вашей покупки " + allcost + " Всего товаров " + allcount)
    if (allcount == 0) {
        document.getElementById("blockBasket").innerHTML = "В корзине нет товаров"
    } else { document.getElementById("blockBasket").innerHTML = "Сумма вашей покупки " + allcost + " Всего товаров " + allcount; }
    return countShirt
}

buttonOutShirt.onclick = function() {
    countShirt--
    if (countShirt < 0) {
        countShirt = 0;
    }
    var allcost = countBasketPrice(countShirt, countShoes, countJeans);
    var allcount = allСountBasket(countShirt, countShoes, countJeans);
    console.log("Сумма вашей покупки " + allcost + " Всего товаров " + allcount)
    if (allcount == 0) {
        document.getElementById("blockBasket").innerHTML = "В корзине нет товаров"
    } else { document.getElementById("blockBasket").innerHTML = "Сумма вашей покупки " + allcost + " Всего товаров " + allcount; }
    return countShirt

}
buttonInShoes.onclick = function() {
    countShoes++
    var allcost = countBasketPrice(countShirt, countShoes, countJeans);
    var allcount = allСountBasket(countShirt, countShoes, countJeans);
    console.log("Сумма вашей покупки " + allcost + " Всего товаров " + allcount)
    if (allcount == 0) {
        document.getElementById("blockBasket").innerHTML = "В корзине нет товаров"
    } else { document.getElementById("blockBasket").innerHTML = "Сумма вашей покупки " + allcost + " Всего товаров " + allcount; }
    return countShoes
}

buttonOutShoes.onclick = function() {
    countShoes--
    if (countShoes < 0) {
        countShoes = 0;
    }
    var allcost = countBasketPrice(countShirt, countShoes, countJeans);
    var allcount = allСountBasket(countShirt, countShoes, countJeans);
    console.log("Сумма вашей покупки " + allcost + " Всего товаров " + allcount)
    if (allcount == 0) {
        document.getElementById("blockBasket").innerHTML = "В корзине нет товаров"
    } else { document.getElementById("blockBasket").innerHTML = "Сумма вашей покупки " + allcost + " Всего товаров " + allcount; }
    return countShoes
}
buttonInJeans.onclick = function() {
    countJeans++
    var allcost = countBasketPrice(countShirt, countShoes, countJeans);
    var allcount = allСountBasket(countShirt, countShoes, countJeans);
    console.log("Сумма вашей покупки " + allcost + " Всего товаров " + allcount)
    if (allcount == 0) {
        document.getElementById("blockBasket").innerHTML = "В корзине нет товаров"
    } else { document.getElementById("blockBasket").innerHTML = "Сумма вашей покупки " + allcost + " Всего товаров " + allcount; }
    return countJeans
}

buttonOutJeans.onclick = function() {
    countJeans--
    if (countJeans < 0) {
        countJeans = 0;
    }
    var allcost = countBasketPrice(countShirt, countShoes, countJeans);
    var allcount = allСountBasket(countShirt, countShoes, countJeans);
    console.log("Сумма вашей покупки " + allcost + " Всего товаров " + allcount)
    if (allcount == 0) {
        document.getElementById("blockBasket").innerHTML = "В корзине нет товаров"
    } else { document.getElementById("blockBasket").innerHTML = "Сумма вашей покупки " + allcost + " Всего товаров " + allcount; }
    return countJeans
}
