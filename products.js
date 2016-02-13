var productArray = [
    {  	title: "Gymkata",
    	imageURL: "img/gymkata.jpg",
        inStock: false,
        description: "Brooklyn health goth portland 8-bit chambray.",
        price: "$5 + shipping*"

    },

    {  	title: "Lethal Weapon 2",
    	imageURL: "img/lethalweapon.jpg",
        inStock: false,
        description: "Brooklyn health goth portland 8-bit chambray.",
        price: "$5 + shipping*"

    },

    {  	title: "Manos: Hands of Fate",
    	imageURL: "img/manos.jpg",
        inStock: false,
        description: "Brooklyn health goth portland 8-bit chambray.",
        price: "$5 + shipping*"

    },
    	
    {  	title: "Troll 2",
    	imageURL: "img/troll2.jpg",
        inStock: false,
        description: "Brooklyn health goth portland 8-bit chambray.",
        price: "$5 + shipping*"

    },
    	
    {  	title: "Howard the Duck",
    	imageURL: "img/howard.jpg",
        inStock: false,
        description: "Brooklyn health goth portland 8-bit chambray.",
        price: "$5 + shipping*"

    },

    { 	title: "Garbage Pail Kids",
    	imageURL: "img/garbage.jpg",
        inStock: false,
        description: "Brooklyn health goth portland 8-bit chambray.",
        price: "$5 + shipping*"

    },

    { 	title: "Touch of Satan",
    	imageURL: "img/satan.jpg",
        inStock: false,
        description: "Brooklyn health goth portland 8-bit chambray.",
        price: "$5 + shipping*"

    },

    { 	title: "Glitter",    
    	imageURL: "img/glitter.png",
        inStock: true,
        description: "Brooklyn health goth portland 8-bit chambray.",
        price: "$5 + shipping*"

    },

];

var products = document.getElementById("videos");

for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].inStock){
        stock = "<p class='inStock'>Availability: Available for checkout!</p>"
    } else {
        stock = "<p class='inStock'>Availability: Please wait 6-8wks.</p>"
    };
    products.innerHTML += '<article class="cards">' 
    + '<p class="filmName">' + productArray[i].title + '</p>' 
    + '<img src="' + productArray[i].imageURL + '">' 
    + stock 
    + '<p class="description">' + productArray[i].description  + '</p>' 
    + '<p class="price">Price: ' + productArray[i].price + '</p>'
    + '<button>Check out!</button>'
    + '</article>';
};

// original for loop
// for (var i = 0; i < productArray.length; i++) {
//     products.innerHTML += '<article>' + productArray[i].title +
//     "<img src='"+ productArray[i].imageURL +"'>" + '</article>';




