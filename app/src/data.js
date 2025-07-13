import tv1 from './assets/tv1.png';
import tv2 from './assets/tv2.png';
import tv3 from './assets/tv3.png';
import tv4 from './assets/tv4.jpg';
import tv5 from './assets/tv5.png';
import tv6 from './assets/tv6.png';
import tv7 from './assets/tv7.png';
import tv8 from './assets/tv8.jpg';
import tv9 from './assets/tv9.png';

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

const tv1Products = [
  {
    id: 1,
    name: "Samsung 4K Smart TV",
    price: 45000,
    brand: "Samsung",
   image: tv1,
   
    stock: "In Stock",
    save:"Save 52%",
   discount:99872,
  },
  {
    id: 2,
    name: "LG LED TV 43 inch",
    price: 38000,
    brand: "LG",
   image: tv2,
   
   stock: "In Stock",
   save:"Save 48%",
   discount:89972
  },
  {
    id: 3,
    name: "Sony Bravia 50 inch",
    price: 60000,
    brand: "Sony",
   image: tv3,
  
   stock: "In Stock",
   save:"Save 38%",
   discount:79872
  },];
  const brandProducts ={
    samsung: [
  {
    id: 1,
    name: "Samsung 4K Smart TV",
    price: 45000,
    brand: "Samsung",
   image: tv6,
   
    stock: "In Stock",
    save:"Save 52%",
   discount:99872,
  },
  {
    id: 2,
    name: "Samsung LED TV 43 inch",
    price: 38000,
    brand: "LG",
   image: tv8,
   
   stock: "In Stock",
   save:"Save 48%",
   discount:89972
  },
  {
    id: 3,
    name: "Samsung Bravia 50 inch",
    price: 60000,
    brand: "Sony",
   image: tv9,
  
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
      stock: "In Stock",
      save: "Save 33%",
      discount: 94000
    }
  ]
};
export default tvProducts;
export { tv1Products };
export {brandProducts};



