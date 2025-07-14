import tv1 from './assets/tv1.png';
import tv2 from './assets/tv2.png';
import tv3 from './assets/tv3.png';
import tv4 from './assets/tv4.jpg';
import tv5 from './assets/tv5.png';
import tv6 from './assets/tv6.png';
import tv7 from './assets/tv7.png';
import tv8 from './assets/tv8.jpg';
import tv9 from './assets/tv9.png';
import star from './assets/star.png';

const tvProducts = [
  {
    id: 1,
    menu_image: tv1,
    menu_name:"Samsung",
   
  },
  {
    id: 2,
    menu_image: tv2,
    menu_name:"LG",
  
  },
  {
    id: 3,
    menu_image: tv3,
    menu_name:"Sony",
   
  },
  {
    id:4,
    menu_image: tv4,
    menu_name:"Haier",
  },
  {
     id:5,
    menu_image: tv5,
    menu_name:"TCL",},
  {
    id:6,
    menu_image: tv6,
   menu_name:"Panasonic",
  },
  {
     id:7,
    menu_image: tv7,
   menu_name:"Xiaomi",
  },
  {
     id:8,
    menu_image: tv8,
   menu_name:"Acer",},
  {
     id:9,
    menu_image: tv9,
   menu_name:"Hisense",}
 
];


  const brandProducts ={
    samsung: [
  {
    id: 1,
    name: "Samsung 4K Smart TV",
    price: 45000,
    brand: "Samsung",
   image: tv6,
   star:star,
   type:"Electronics",
   description:"Samsung 4K Smart TV WebOS TV – Redefine Your Entertainment Experience. Enjoy stunning visuals with 4K Ultra HD resolution. Seamlessly control your TV with built-in Voice Search. Experience boundless viewing with a sleek frameless design. The advanced IPS panel delivers vibrant colors from any angle. Immerse yourself in cinematic sound and visuals. Upgrade your home entertainment with HIPIC’s cutting-edge technology.",
    stock: "In Stock",
    save:"Save 52%",
   discount:99872,
  },
  {
    id: 2,
    name: "Samsung LED TV 43 inch",
    price: 38000,
    brand: "Samsung",
   image: tv8,
   star:star,
   type:"Electronics",
   description:"Samsung 43-Inch WebOS TV – Redefine Your Entertainment Experience. Enjoy stunning visuals with 4K Ultra HD resolution. Seamlessly control your TV with built-in Voice Search. Experience boundless viewing with a sleek frameless design. The advanced IPS panel delivers vibrant colors from any angle. Immerse yourself in cinematic sound and visuals. Upgrade your home entertainment with HIPIC’s cutting-edge technology.",
   stock: "In Stock",
   save:"Save 48%",
   discount:89972
  },
  {
    id: 3,
    name: "Samsung Bravia 50 inch",
    price: 60000,
    brand: "Samsung",
   image: tv9,
   star:star,
   type:"Electronics",
   description:"Samsung 50-Inch WebOS TV – Redefine Your Entertainment Experience. Enjoy stunning visuals with 4K Ultra HD resolution. Seamlessly control your TV with built-in Voice Search. Experience boundless viewing with a sleek frameless design. The advanced IPS panel delivers vibrant colors from any angle. Immerse yourself in cinematic sound and visuals. Upgrade your home entertainment with HIPIC’s cutting-edge technology.",
   stock: "In Stock",
   save:"Save 38%",
   discount:79872
  },],
  lg:[
    {
      id: 1,
      name: "LG 4K Ultra HD",
      price: 40000,
      brand: "LG",
      image: tv6,
      star:star,
   type:"Electronics",
   description:"LG 4K Ultra HD WebOS TV – Redefine Your Entertainment Experience. Enjoy stunning visuals with 4K Ultra HD resolution. Seamlessly control your TV with built-in Voice Search. Experience boundless viewing with a sleek frameless design. The advanced IPS panel delivers vibrant colors from any angle. Immerse yourself in cinematic sound and visuals. Upgrade your home entertainment with HIPIC’s cutting-edge technology.",
      stock: "In Stock",
      save: "Save 42%",
      discount: 78990
    },
    {
      id: 2,
      name: "LG OLED 55 inch",
      price: 68000,
      brand: "LG",
      image: tv5,
      star:star,
   type:"Electronics",
   description:"LG OLED 55 inch WebOS TV – Redefine Your Entertainment Experience. Enjoy stunning visuals with 4K Ultra HD resolution. Seamlessly control your TV with built-in Voice Search. Experience boundless viewing with a sleek frameless design. The advanced IPS panel delivers vibrant colors from any angle. Immerse yourself in cinematic sound and visuals. Upgrade your home entertainment with HIPIC’s cutting-edge technology.",
      stock: "In Stock",
      save: "Save 33%",
      discount: 94000
    }
  ],
   sony: [
    {
      id: 1,
      name: "Sony Bravia 55 inch",
      price: 65000,
      discount: 72000,
      stock: "In Stock",
      brand:"Sony",
      star:star,
   type:"Electronics",
   description:"Sony Bravia 55 inch WebOS TV – Redefine Your Entertainment Experience. Enjoy stunning visuals with 4K Ultra HD resolution. Seamlessly control your TV with built-in Voice Search. Experience boundless viewing with a sleek frameless design. The advanced IPS panel delivers vibrant colors from any angle. Immerse yourself in cinematic sound and visuals. Upgrade your home entertainment with HIPIC’s cutting-edge technology.",
      image: tv3,
      save: "Save 9%",
      
    },
    {
      id: 2,
      name: "Sony LED TV 40 inch",
      price: 35000,
      discount: 39000,
      stock: "In Stock",
      brand:"Sony",
      star:star,
   type:"Electronics",
   description:"Sony LED TV 40 inch WebOS TV – Redefine Your Entertainment Experience. Enjoy stunning visuals with 4K Ultra HD resolution. Seamlessly control your TV with built-in Voice Search. Experience boundless viewing with a sleek frameless design. The advanced IPS panel delivers vibrant colors from any angle. Immerse yourself in cinematic sound and visuals. Upgrade your home entertainment with HIPIC’s cutting-edge technology.",
      image: tv7,
      save: "Save 10%",
     
    }
  ]
};
export default tvProducts;

export {brandProducts};



