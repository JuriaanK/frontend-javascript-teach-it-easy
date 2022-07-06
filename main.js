// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//Opdracht 1a
const productNames = inventory.map((productName) => {
  return productName.name;

})

//console.log(productNames);

//Opdracht 1b
function soldOut(inventory) {
  const soldOuts = inventory.filter((soldOut) => {
    return soldOut.originalStock === soldOut.sold;
  })
  return soldOuts
}

//console.log(soldOuts)

//Opdracht 1c
function ambiLights(inventory){
  const haseAmbiLights = inventory.filter((haseAmbiLight) => {
    return haseAmbiLight.options.ambiLight === true;
  })
  return haseAmbiLights
}

//console.log(haseAmbiLights)

//Opdracht 1d
function sortTVs(inventory) {
  const sortTvs = inventory.sort((a, b) => {
    if (a.price > b.price){
      return 1
    }
    else if(a.price < b.price){
      return -1
    }
    else{
      return 0
    }
  })
}

//console.log(sortTvs)*/

//Opdracht 2a

let soldTVs = 0;
let output = 0;
for (let i = 0; i < inventory.length; i++){
  output = inventory[i].sold + output;
  soldTVs = output;
}

//console.log(soldTVs)

//Opdracht 2b

const tvSold = document.getElementById("soldTVs")
tvSold.textContent = `${soldTVs} tv's zijn er verkocht`

//Opdracht 2c

let stockTVs = 0;
let output2 = 0;
for (let i = 0; i < inventory.length; i++){
  output2 = inventory[i].originalStock + output2;
  stockTVs = output2;
}
//console.log(stockTVs);

//Opdracht 2d
const tvStock = document.getElementById("stockTVs")
tvStock.textContent = `${stockTVs} tv's zijn er ingekocht`

//Opdracht 2e

const currentStock = stockTVs - soldTVs;

const curStock = document.getElementById("currentStock")
curStock.textContent = `${currentStock} tv's zijn er nog op voorraad`

//Opdracht 3a

const tvBrands = inventory.map((tvBrand) => {
  return tvBrand.brand;
})

//Opdracht 3b

function listOfTvBrands(inventory){
  const tvBrands = itemsList.map((tvBrand) => {
    return tvBrand.brand;
  })
  return tvBrands;
}

//console.log(listOfTvBrands(inventory));

//Opdracht 4a

function getTypeInfo(inventory){
  for(let i = 0; i < 1; i++){
    let tvInfo = `${inventory.brand}  ${inventory.type} - ${inventory.name}`;
    return tvInfo;
  }
}

//getTypeInfo(inventory2)

//Opdracht 4b

function getPrice(inventory){
  for(let i = 0; i < 1; i++){
    let tvPrice = `€${inventory.price},-`;
    return tvPrice;
  }
}

//console.log(getPrice(inventory));

//Opdracht 4c

function getSize(inventory){

  for(let i = 0; i < 1; i++){

    let output1 = "";
    let output2 = "";
    let inchToCm = 2.54;

    for(let k = 0; k < inventory.availableSizes.length; k++){

      let newItem = inventory.availableSizes[k] + " inch" + " (" + inventory.availableSizes[k]*inchToCm + " cm) | "
      output1 =  output1 + newItem;

    }

    output2 = output1.slice(0, -3)
    return output2
  }
}

//console.log(getSize(inventory));

//Opdracht 4d

function getInfoTV(inventory) {

  for (let i = 0; i < 1; i++) {
    const getItem = inventory[6];

    const typeTV = document.getElementById("type-info")
    typeTV.textContent = `${getTypeInfo(getItem)}`;
    const priceTV = document.getElementById("price-info")
    priceTV.textContent = `${getPrice(getItem)}`;
    const sizeTV = document.getElementById("size-info")
    sizeTV.textContent = `${getSize(getItem)}`;

  }
}

getInfoTV(inventory)

//Opdracht 4e

function showAllTVs(inventory) {

  const showAllTVs = inventory.map((item) => {
    return `<p class="info-p">${getTypeInfo(item)}<br>
                                       ${getPrice(item)}<br>
                                       ${getSize(item)}</p>`
  })
  const typeHTML = document.getElementById("info-list")
  typeHTML.innerHTML = `${showAllTVs.join('')}`

}

showAllTVs(inventory);

// Bonus Opdrachten

function sortTVbutton(inventory){
  sortTVs(inventory)
  showAllTVs(inventory);
}

function soldOutButton(inventory) {
  showAllTVs(soldOut(inventory));
}

function ambiLightsButton(inventory){
  showAllTVs(ambiLights(inventory));
}