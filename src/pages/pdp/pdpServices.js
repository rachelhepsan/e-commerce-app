import axios from "axios";
import { usePdpStore } from "./pdpStore.js";

const { setData } = usePdpStore();

//select a particular object from an array of objects thus obtaining the details of the clicked object
export const getProducts = async (parameter) => {
  const response = await axios(
    "https://rachelhepsan.github.io/ProductDetails/data.json"
  );
  response.data.forEach((element) => {
    if (+element.id === +parameter) {
      setData(element);
    }
  });
};
