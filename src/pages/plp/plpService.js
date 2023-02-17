// import axios from 'axios';
import { getProduct } from '@/service/products';
import { getCategoryApi } from '@/service/category';
import { usePlpStore } from './plpStore';
const plpStore = usePlpStore();
const state = plpStore.state;

let dataArray = [];

export const getProducts = async (callback1, callback2) => {
  const response = await getProduct();
  dataArray = response.data.products;

  if (state.searchKey === '') {
    state.results = response.data.products;
  } else {
    response.data.products.forEach(element => {
      if (element.name.toLowerCase().startsWith(state.searchKey)) {
        state.results.push(element);
      }
    });
  }
  callback1();
  callback2();
};

export const filterByCategory = checked => {
  if (Object.values(checked).length) {
    state.results = [];
    dataArray.forEach(product => {
      Object.values(checked).forEach(element => {
        if (product.category.toLowerCase() === element) {
          state.results.push(product);
        }
      });
    });
  } else {
    state.results = dataArray;
  }
};

export const filterByPriceRange = checked => {
  if (checked.length) {
    state.results = [];
    dataArray.forEach(product => {
      Object.values(checked).forEach(element => {
        if (!element.includes('-')) {
          if (element == 50) {
            if (+product.price <= +element) {
              state.results.push(product);
            }
          } else {
            if (+product.price >= +element) {
              state.results.push(product);
            }
          }
        } else {
          let num = element.split('-');
          if (+product.price >= num[0] && +product.price <= num[1]) {
            state.results.push(product);
          }
        }
      });
    });
  } else {
    state.results = dataArray;
  }
};

export const getCategory = async () => {
  const response = await getCategoryApi();
  console.log(response.data.categories);
};
