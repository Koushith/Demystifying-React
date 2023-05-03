import { resList, restaurants } from "./mock-data";

export const resResults = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(restaurants);
    }, 3000);

    if (!resList) {
      reject("No restaurant");
    }
  });
};
