
//amazon ecommerece
console.log("Welcome to Amazon Shopping");
let category=true;
//product :1
const product1Name="Amazon Shoe";
let product1Price=2000;
let isStock=true;
const product1Discrption="nice";
let product1Rating=4.5;
let product1Discount=20;
const payment1=true;
//product :2
const product2Name="Amazon Shoe with white snaeker";
let product2Price=450;
let isStock2=true;
const product2Discrption="good";
let product2Rating=4.0;
let product2Discount=25;
const payment2=false;
//product :3
const product3Name="Amazon Shoe with black and white snaeker";
let product3Price=450;
let isStock3=false;
const product3Discrption="good shoe";
let product3Rating=4.4;
let product3Discount=29;
const payment3=true;
//product :4
const product4Name="Amazon Shoe with brown snaeker";
let product4Price=450;
let isStock4=false;
const product4Discrption="good shoes nice";
let product4Rating=3.9;
let product4Discount=15;
const payment4=true;
//product :5
const product5Name="Amazon Shoe with red tape snaeker";
let product5Price=450;
let isStock5=false;
const product5Discrption=" shoes are nice";
let product5Rating=3.75;
let product5Discount=15.3;
const payment5=false;
//discount calculations
let discountAmnt1=(product1Price*product1Discount)/100;
let finalamount1=product1Price-discountAmnt1;
let product1=
`Name:${product1Name}
OrginialPrice:${product1Price}
Descrption:${
product1Discrption}
In Stock:${isStock?"Yes" : "No"}
Ratings:${product1Rating.toFixed(1)}
Discount:₹${discountAmnt1.toFixed(2)}
Total:₹${finalamount1.toFixed(2)}
Type of price:${typeof product1Price}
Type of Product:${typeof product1Name}
Mode of Payment:${payment1?"Cash":"Online"}
`
let cat=`Mens wear:${category? "Yes" :"No"}`
console.log(cat);
console.log(product1);
//discountofproduct2
let discountAmnt2=(product2Price*product2Discount)/100;
let finalamount2=product2Price-discountAmnt2;
let product2=
`Name:${product2Name}
OrginialPrice:${product2Price}
Descrption:${
product1Discrption}
In Stock:${isStock2?"Yes" : "No"}
Ratings:${product2Rating.toFixed(1)}
Discount:₹${discountAmnt2.toFixed(2)}
Total:₹${finalamount2.toFixed(2)}
Type of price:${typeof product2Price}
Type of Product:${typeof product2Name}
Mode of Payment:${payment2?"Cash":"Online"}
`
let cat2=`Womens wear:${category? "Yes" :"No"}`
console.log(cat2);
console.log(product2);

//product 3
let discountAmnt3=(product3Price*product3Discount)/100;
let finalamount3=product3Price-discountAmnt3;
let product3=
`Name:${product3Name}
OrginialPrice:${product3Price}
Descrption:${
product3Discrption}
In Stock:${isStock3?"Yes" : "No"}
Ratings:${product3Rating.toFixed(1)}
Discount:₹${discountAmnt3.toFixed(2)}
Total:₹${finalamount3.toFixed(2)}
Type of price:${typeof product3Price}
Type of Product:${typeof product3Name}
Mode of Payment:${payment3?"Cash":"Online"}
`
let cat3=`Mens wear:${category? "Yes" :"No"}`
console.log(cat3);
console.log(product3);
//product 4

let discountAmnt4=(product4Price*product4Discount)/100;
let finalamount4=product4Price-discountAmnt4;
let product4=
`Name:${product4Name}
OrginialPrice:${product4Price}
Descrption:${
product4Discrption}
In Stock:${isStock4?"Yes" : "No"}
Ratings:${product4Rating.toFixed(1)}
Discount:₹${discountAmnt4.toFixed(2)}
Total:₹${finalamount4.toFixed(2)}
Type of price:${typeof product4Price}
Type of Product:${typeof product4Name}
Mode of Payment:${payment4?"Cash":"Online"}
`
let cat4=`Mens wear:${category? "Yes" :"No"}`
console.log(cat4);
console.log(product4);
//product5

let discountAmnt5=(product5Price*product5Discount)/100;
let finalamount5=product5Price-discountAmnt5;
let product5=
`Name:${product5Name}
OrginialPrice:${product5Price}
Descrption:${
product5Discrption}
In Stock:${isStock5?"Yes" : "No"}
Ratings:${product5Rating.toFixed(1)}
Discount:₹${discountAmnt5.toFixed(2)}
Total:₹${finalamount5.toFixed(2)}
Type of price:${typeof product5Price}
Type of Product:${typeof product5Name}
Mode of Payment:${payment5?"Cash":"Online"}
`
let cat5=`Kids wear:${category? "Yes" :"No"}`
console.log(cat4);
console.log(product4);
//conversion examples
//Number to string
const pNumber=20;
const pString=String(pNumber);
console.log(`pNumber  ${pNumber} converted to string: "${pString}" (${typeof pString})`);
//string to number
const productString="20";
const productNumber=String(productString);
console.log(`ProductString "${productString}" converted to string: ${productNumber} (${typeof productNumber})`);
//boolean
console.log(`Num 0 as boolean: ${Boolean(0)}`);
console.log(`Num 1 as boolaen: ${Boolean(1)}`);
console.log(`Empty String ${""}`);
console.log(`Non empty String ${"AMAZON"}`);
//Inventory summary
console.log("------------InvetorySummary-------------");

let totalAmazonProducts = 5;
let instockAmazonProducts =2;
let totalInventory=product1Price+product2Price+product3Price+
product4Price+product5Price;
let productDiscount=discountAmnt1+discountAmnt2+
discountAmnt3+discountAmnt4+discountAmnt5;
console.log(`Total Products:${totalAmazonProducts}`)
console.log(`In Stock Prducts:${instockAmazonProducts}`)
console.log(`Total Price:₹${totalInventory.toFixed(2)}`)
console.log(`Total Discount :₹${productDiscount.toFixed(2)}`)















