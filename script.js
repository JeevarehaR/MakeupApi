const body = document.querySelector("body");
const container = document.querySelector(".container");
const displayContainer = document.createElement("div");
displayContainer.setAttribute("class", "displayContainer");
const productTypes_container = document.querySelector(
  ".productTypes_container"
);

const brands = [
  "almay",
  "alva",
  "anna sui",
  "annabelle",
  "benefit",
  "boosh",
  "burt's bees",
  "butter london",
  "c'est moi",
  "cargo cosmetics",
  "china glaze",
  "clinique",
  "coastal classic creation",
  "colourpop",
  "covergirl",
  "dalish",
  "deciem",
  "dior",
  "dr.hauschka",
  "e.l.f.",
  "essie",
  "fenty",
  "glossier",
  "green people",
  "iman",
  "l'oreal",
  "lotus cosmetics usa",
  "maia's mineral galaxy",
  "marcelle",
  "marienatie",
  "maybelline",
  "milani",
  "mineral fusion",
  "misa",
  "mistura",
  "moov",
  "nudus",
  "nyx",
  "orly",
  "pacifica",
  "penny lane organics",
  "physicians formula",
  "piggy paint",
  "pure anada",
  "rejuva minerals",
  "revlon",
  "sally b's skin yummies",
  "salon perfect",
  "sante",
  "sinful colours",
  "smashbox",
  "stila",
  "suncoat",
  "w3llpeople",
  "wet n wild",
  "zorah",
  "zorah biocosmetiques",
];

const input = document.getElementById("search");
const display = document.querySelector("#info");

input.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  brands.forEach((brand) => {
    if (brand.toLowerCase().indexOf(term) != -1) {
      display.innerHTML += `
      <a href="http://makeup-api.herokuapp.com/api/v1/products?brand=${brand}">${brand}</a>\n`;
    } else {
      display.innerText = "";
    }
  });
});

//Blush Products
const blushList = document.createElement("div");
blushList.innerHTML = `
    <img class="icon-img" src="http://makeup-api.herokuapp.com/assets/blush-ff7992c3d7690d18a9b0224177cfbdedbc036497cf87c393ec01c6a2ef070258.svg" alt="Blush">
    <p class="product_title"><a href="http://makeup-api.herokuapp.com/api/v1/products?product_type=blush">Blush</a></P>`;
var btn1 = document.createElement("button");
btn1.setAttribute("class", "btn");
btn1.setAttribute("id", "button1");
btn1.setAttribute("onclick", "getBlushData()");
btn1.innerText = "EXPLORE 👆";
blushList.appendChild(btn1);
productTypes_container.appendChild(blushList);
const getBlushData = async () => {
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush"
    );
    const makeupkits = await data.json();
    console.log(makeupkits);
    body.innerHTML = `<h1 style="color: rgb(235, 73, 73);">Blush</h1>`;
    displayContainer.innerHTML = "";
    makeupkits.forEach((obj) => {
      displayContainer.innerHTML += `
        <div class="productContainer">
            <p class="brandName">${obj.brand}</p>
            <p class="productName">${obj.name}</p>
            <p class="price">$ ${obj.price}</p>
            <img src=${obj.image_link} alt=${obj.name}></img>
            <div class="product_link"><a href="${obj.product_link}">Click Here to View</a></div>
            <p class="product_description">${obj.description}</p>
        </div>
            `;
    });
    body.appendChild(displayContainer);
  } catch (error) {
    console.log(error);
  }
};

//Bronzer Products
const bronzerList = document.createElement("div");
bronzerList.innerHTML = `
        <img class="icon-img" src="http://makeup-api.herokuapp.com/assets/bronzer-2d423487eea3e4571229bd95689bb4eb4331f05740f3921ede7c7c765c7954b1.svg" alt="Bronzer">
        <p class="product_title"><a href="http://makeup-api.herokuapp.com/api/v1/products?product_type=bronzer">Bronzer</a></p>`;
var btn2 = document.createElement("button");
btn2.setAttribute("class", "btn");
btn2.setAttribute("id", "button1");
btn2.setAttribute("onclick", "getBronzerData()");
btn2.innerText = "EXPLORE 👆";
bronzerList.appendChild(btn2);
productTypes_container.appendChild(bronzerList);
const getBronzerData = async () => {
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer"
    );

    const makeupkits = await data.json();
    console.log(makeupkits);
    body.innerHTML = `<h1 style="color: rgb(235, 73, 73);">Bronzer</h1>`;
    displayContainer.innerHTML = "";
    makeupkits.forEach((obj) => {
      displayContainer.innerHTML += `
        <div class="productContainer">
            <p class="brandName">${obj.brand}</p>
            <p class="productName">${obj.name}</p>
            <p class="price">$ ${obj.price}</p>
            <img src=${obj.image_link} alt=${obj.name}></img>
            <div class="product_link"><a href="${obj.product_link}">Click Here to View</a></div>
            <p class="product_description">${obj.description}</p>
        </div>
            `;
    });
    body.appendChild(displayContainer);
  } catch (error) {
    console.log(error);
  }
};

//Eyebrow products
const eyeBrowList = document.createElement("div");
eyeBrowList.innerHTML = `
        <img class="icon-img" src="http://makeup-api.herokuapp.com/assets/eyebrow-fc49d8d480ace717203a21fe863c2231970063add91ed2f15181fe8e2d3b96b9.svg" alt="Eyebrow">
        <p class="product_title"><a href="http://makeup-api.herokuapp.com/api/v1/products?product_type=eyebrow">Eyebrow</a></p>`;
var btn3 = document.createElement("button");
btn3.setAttribute("class", "btn");
btn3.setAttribute("id", "button1");
btn3.setAttribute("onclick", "getEyeBrowData()");
btn3.innerText = "EXPLORE 👆";
eyeBrowList.appendChild(btn3);
productTypes_container.appendChild(eyeBrowList);
const getEyeBrowData = async () => {
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow"
    );
    const makeupkits = await data.json();
    console.log(makeupkits);
    body.innerHTML = `<h1 style="color: rgb(235, 73, 73);">Bronzer</h1>`;
    displayContainer.innerHTML = "";
    makeupkits.forEach((obj) => {
      displayContainer.innerHTML += `
        <div class="productContainer">
            <p class="brandName">${obj.brand}</p>
            <p class="productName">${obj.name}</p>
            <p class="price">$ ${obj.price}</p>
            <img src=${obj.image_link} alt=${obj.name}></img>
            <div class="product_link"><a href="${obj.product_link}">Click Here to View</a></div>
            <p class="product_description">${obj.description}</p>
        </div>
            `;
    });
    body.appendChild(displayContainer);
  } catch (error) {
    console.log(error);
  }
};

//Eyeliner products
const eyeLinerList = document.createElement("div");
eyeLinerList.innerHTML = `
      <img class="icon-img" src="http://makeup-api.herokuapp.com/assets/eyeliner-de329b6d65d721a45190051af1153e23202df9eb1c393d1ac65972376ee42d50.svg" alt="Eyeliner">
      <p class="product_title"><a href="http://makeup-api.herokuapp.com/api/v1/products?product_type=eyeliner">Eyeliner</a></p>`;
var btn4 = document.createElement("button");
btn4.setAttribute("class", "btn");
btn4.setAttribute("id", "button1");
btn4.setAttribute("onclick", "getEyeLinerData()");
btn4.innerText = "EXPLORE 👆";
eyeLinerList.appendChild(btn4);
productTypes_container.appendChild(eyeLinerList);
const getEyeLinerData = async () => {
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"
    );
    const makeupkits = await data.json();
    console.log(makeupkits);
    body.innerHTML = `<h1 style="color: rgb(235, 73, 73);">Bronzer</h1>`;
    displayContainer.innerHTML = "";
    makeupkits.forEach((obj) => {
      displayContainer.innerHTML += `
        <div class="productContainer">
            <p class="brandName">${obj.brand}</p>
            <p class="productName">${obj.name}</p>
            <p class="price">$ ${obj.price}</p>
            <img src=${obj.image_link} alt=${obj.name}></img>
            <div class="product_link"><a href="${obj.product_link}">Click Here to View</a></div>
            <p class="product_description">${obj.description}</p>
        </div>
            `;
    });
    body.appendChild(displayContainer);
  } catch (error) {
    console.log(error);
  }
};

//EyeShadow products
const eyeShadowList = document.createElement("div");
eyeShadowList.innerHTML = `
      <img class="icon-img" src="http://makeup-api.herokuapp.com/assets/eyeshadow-67f9f8fd19df1862c95122f9b3460c7e6674d5a6d178cde00e6e4be908dd898a.svg" alt="Eyeshadow">
      <p class="product_title"><a href="http://makeup-api.herokuapp.com/api/v1/products?product_type=eyeShadow">EyeShadow</a></p>`;
var btn5 = document.createElement("button");
btn5.setAttribute("class", "btn");
btn5.setAttribute("id", "button1");
btn5.setAttribute("onclick", "getEyeShadowData()");
btn5.innerText = "EXPLORE 👆";
eyeShadowList.appendChild(btn5);
productTypes_container.appendChild(eyeShadowList);
const getEyeShadowData = async () => {
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow"
    );
    const makeupkits = await data.json();
    console.log(makeupkits);
    body.innerHTML = `<h1 style="color: rgb(235, 73, 73);">Bronzer</h1>`;
    displayContainer.innerHTML = "";
    makeupkits.forEach((obj) => {
      displayContainer.innerHTML += `
        <div class="productContainer">
            <p class="brandName">${obj.brand}</p>
            <p class="productName">${obj.name}</p>
            <p class="price">$ ${obj.price}</p>
            <img src=${obj.image_link} alt=${obj.name}></img>
            <div class="product_link"><a href="${obj.product_link}">Click Here to View</a></div>
            <p class="product_description">${obj.description}</p>
        </div>
            `;
    });
    body.appendChild(displayContainer);
  } catch (error) {
    console.log(error);
  }
};

//foundation products
const foundationList = document.createElement("div");
foundationList.innerHTML = `
      <img class="icon-img" src="http://makeup-api.herokuapp.com/assets/foundation-9985c8a404d4a19cf7a2985ed504958cadd9f71252a73c90b6a7178bf7075143.svg" alt="Foundation">
      <p class="product_title"><a href="http://makeup-api.herokuapp.com/api/v1/products?product_type=foundation">Foundation</a></p>`;
var btn6 = document.createElement("button");
btn6.setAttribute("class", "btn");
btn6.setAttribute("id", "button1");
btn6.setAttribute("onclick", "getFoundationData()");
btn6.innerText = "EXPLORE 👆";
foundationList.appendChild(btn6);
productTypes_container.appendChild(foundationList);
const getFoundationData = async () => {
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation"
    );
    body.innerHTML = `<h1 style="color: rgb(235, 73, 73);">Bronzer</h1>`;
    displayContainer.innerHTML = "";
    const makeupkits = await data.json();
    console.log(makeupkits);
    makeupkits.forEach((obj) => {
      displayContainer.innerHTML += `
        <div class="productContainer">
            <p class="brandName">${obj.brand}</p>
            <p class="productName">${obj.name}</p>
            <p class="price">$ ${obj.price}</p>
            <img src=${obj.image_link} alt=${obj.name}></img>
            <div class="product_link"><a href="${obj.product_link}">Click Here to View</a></div>
            <p class="product_description">${obj.description}</p>
        </div>
            `;
    });
    body.appendChild(displayContainer);
  } catch (error) {
    console.log(error);
  }
};

//lipliner products
const lipLinerList = document.createElement("div");
lipLinerList.innerHTML = `
      <img class="icon-img" src="http://makeup-api.herokuapp.com/assets/lip_liner-3f40bb63957aa7d47e3a2d1356b9380aa093271e5d58f3518181fd427e388d93.svg" alt="Lip liner">
      <p class="product_title"><a href="http://makeup-api.herokuapp.com/api/v1/products?product_type=lip_liner">Lip liner</a></p>`;

var btn7 = document.createElement("button");
btn7.setAttribute("class", "btn");
btn7.setAttribute("id", "button1");
btn7.setAttribute("onclick", "getLipLinerData()");
btn7.innerText = "EXPLORE 👆";
lipLinerList.appendChild(btn7);
productTypes_container.appendChild(lipLinerList);
const getLipLinerData = async () => {
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner"
    );
    const makeupkits = await data.json();
    console.log(makeupkits);
    body.innerHTML = `<h1 style="color: rgb(235, 73, 73);">Bronzer</h1>`;
    displayContainer.innerHTML = "";
    makeupkits.forEach((obj) => {
      displayContainer.innerHTML += `
        <div class="productContainer">
            <p class="brandName">${obj.brand}</p>
            <p class="productName">${obj.name}</p>
            <p class="price">$ ${obj.price}</p>
            <img src=${obj.image_link} alt=${obj.name}></img>
            <div class="product_link"><a href="${obj.product_link}">Click Here to View</a></div>
            <p class="product_description">${obj.description}</p>
        </div>
            `;
    });
    body.appendChild(displayContainer);
  } catch (error) {
    console.log(error);
  }
};

//lipstick products
const lipStickList = document.createElement("div");

lipStickList.innerHTML = `
      <img class="icon-img" src="http://makeup-api.herokuapp.com/assets/lipstick-4531b48ee71839393857e24c8cbc4dede1f99d2284ef82a6eb0a2a4d03540a14.svg" alt="Lipstick">
      <p class="product_title"><a href="http://makeup-api.herokuapp.com/api/v1/products?product_type=lipstick">Lipstick</a></p>`;
var btn8 = document.createElement("button");
btn8.setAttribute("class", "btn");
btn8.setAttribute("id", "button1");
btn8.setAttribute("onclick", "getLipStickData()");
btn8.innerText = "EXPLORE 👆";
lipStickList.appendChild(btn8);
productTypes_container.appendChild(lipStickList);
const getLipStickData = async () => {
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick"
    );

    const makeupkits = await data.json();
    console.log(makeupkits);
    body.innerHTML = `<h1 style="color: rgb(235, 73, 73);">Bronzer</h1>`;
    displayContainer.innerHTML = "";
    makeupkits.forEach((obj) => {
      displayContainer.innerHTML += `
        <div class="productContainer">
            <p class="brandName">${obj.brand}</p>
            <p class="productName">${obj.name}</p>
            <p class="price">$ ${obj.price}</p>
            <img src=${obj.image_link} alt=${obj.name}></img>
            <div class="product_link"><a href="${obj.product_link}">Click Here to View</a></div>
            <p class="product_description">${obj.description}</p>
        </div>
            `;
    });
    body.appendChild(displayContainer);
  } catch (error) {
    console.log(error);
  }
};

//mascara products
const mascaraList = document.createElement("div");
mascaraList.innerHTML = `
      <img class="icon-img" src="http://makeup-api.herokuapp.com/assets/mascara-0deeeb81e58f31ddbff07847bfd0820e5ecdba1419f4281da743a05e0d6b3e69.svg" alt="Mascara">
      <p class="product_title"><a href="http://makeup-api.herokuapp.com/api/v1/products?product_type=mascara">Mascara</a></p>`;
var btn9 = document.createElement("button");
btn9.setAttribute("class", "btn");
btn9.setAttribute("id", "button1");
btn9.setAttribute("onclick", "getMascaraData()");
btn9.innerText = "EXPLORE 👆";
mascaraList.appendChild(btn9);
productTypes_container.appendChild(mascaraList);
const getMascaraData = async () => {
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara"
    );
    const makeupkits = await data.json();
    console.log(makeupkits);
    body.innerHTML = `<h1 style="color: rgb(235, 73, 73);">Bronzer</h1>`;
    displayContainer.innerHTML = "";
    makeupkits.forEach((obj) => {
      displayContainer.innerHTML += `
        <div class="productContainer">
            <p class="brandName">${obj.brand}</p>
            <p class="productName">${obj.name}</p>
            <p class="price">$ ${obj.price}</p>
            <img src=${obj.image_link} alt=${obj.name}></img>
            <div class="product_link"><a href="${obj.product_link}">Click Here to View</a></div>
            <p class="product_description">${obj.description}</p>
        </div>
            `;
    });
    body.appendChild(displayContainer);
  } catch (error) {
    console.log(error);
  }
};

//nail polish products
const nailPolishList = document.createElement("div");
nailPolishList.innerHTML = `
      <img class="icon-img" src="http://makeup-api.herokuapp.com/assets/nail_polish-a7e7204834c0c30e8b57a1ba9896656331e228b0daa09d1705d1ab29bc0b7151.svg" alt="Nail polish">
      <p class="product_title"><a href="http://makeup-api.herokuapp.com/api/v1/products?product_type=nail_polish">Nail polish</a></p>`;
var btn10 = document.createElement("button");
btn10.setAttribute("class", "btn");
btn10.setAttribute("id", "button1");
btn10.setAttribute("onclick", "getNailPolishData()");
btn10.innerText = "EXPLORE 👆";
nailPolishList.appendChild(btn10);
productTypes_container.appendChild(nailPolishList);

productTypes_container.appendChild(nailPolishList);
const getNailPolishData = async () => {
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish"
    );

    const makeupkits = await data.json();
    console.log(makeupkits);
    body.innerHTML = `<h1 style="color: rgb(235, 73, 73);">Bronzer</h1>`;
    displayContainer.innerHTML = "";
    makeupkits.forEach((obj) => {
      displayContainer.innerHTML += `
        <div class="productContainer">
            <p class="brandName">${obj.brand}</p>
            <p class="productName">${obj.name}</p>
            <p class="price">$ ${obj.price}</p>
            <img src=${obj.image_link} alt=${obj.name}></img>
            <div class="product_link"><a href="${obj.product_link}">Click Here to View</a></div>
            <p class="product_description">${obj.description}</p>
        </div>`;
    });
    body.appendChild(displayContainer);
  } catch (error) {
    console.log(error);
  }
};
