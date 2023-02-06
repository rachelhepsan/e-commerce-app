import axios from 'axios';
// import { getUsers } from '@/service/users';
import { usePlpStore } from './plpStore';
const plpStore = usePlpStore();
const state = plpStore.state;

let dataArray = [];

export const getProducts = async callback => {
  const response = await axios.get(
    'https://rachelhepsan.github.io/ProductDetails/data.json',
  );

  // const response = await getUsers();
  // console.log(response);

  dataArray = response.data;

  if (state.searchKey === '') {
    state.results = response.data;
  } else {
    response.data.forEach(element => {
      if (element.title.toLowerCase().startsWith(state.searchKey)) {
        state.results.push(element);
      }
    });
  }
  callback();
};

export const filterByCategory = checked => {
  // eslint-disable-next-line no-debugger
  // debugger;
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
          if (element == 100) {
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
