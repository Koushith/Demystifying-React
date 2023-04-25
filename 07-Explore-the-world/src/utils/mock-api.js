import { resList } from "./mock-data";

export const resResults = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(resList);
    }, 3000);

    if (!resList) {
      reject("No restaurant");
    }
  });
};
