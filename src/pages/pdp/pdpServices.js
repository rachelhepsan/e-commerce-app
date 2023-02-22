// import axios from "axios";
import { getProduct } from '@/service/products';
import { usePdpStore } from './pdpStore.js';

const pdpStore = usePdpStore();

//select a particular object from an array of objects thus obtaining the details of the clicked object
export const getProducts = async parameter => {
  const response = await getProduct();
  response.data.products.forEach(element => {
    console.log('element', element);
    if (element.id === parameter) {
      pdpStore.setData(element);
      pdpStore.totalOutputPrice = element.price;
    }
  });
};
