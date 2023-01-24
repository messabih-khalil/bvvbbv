import { defineStore } from "pinia";
export const useColorStore = defineStore("color", () => {

  // setters

  const setColor = color => {
    // remove the old value
    localStorage.removeItem("colorComp");
    // set the new value
    localStorage.setItem("colorComp", color);
  };
  // getters

  const getColor = () => {
    return localStorage.getItem("colorComp");
  };

  return { setColor, getColor };
});
