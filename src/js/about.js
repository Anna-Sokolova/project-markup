import "../css/about.css";
import myAvtoPark from "../data/items.js";
// console.log(myAvtoPark);
import aboutRefs from "./refs.js";
const { aboutSection } = aboutRefs; //деструктуризация объекта
// console.log(aboutSection);

function cresteCarsList(array) {
  //   console.log(array);
  return array.map((car) => {
    const { name, picture, price } = car;
    // console.log(picture);
    const imgName = document.createElement("h3");
    imgName.textContent = name;
    // console.log(name);

    const imgWrapper = document.createElement("div");

    const createPictures = picture.map((pic) => {
      const img = document.createElement("img");
      img.setAttribute("src", pic);
      img.setAttribute("alt", name);
      img.setAttribute("width", "300px");
      //   console.log(img);
      return img;
    });
    imgWrapper.append(...createPictures);
    // console.log(imgWrapper);

    const carPrice = document.createElement("p");
    carPrice.textContent = price;
    // console.log(price);
    const item = document.createElement("li");
    item.append(imgName, imgWrapper, carPrice);
    return item;
  });
}
const carsItems = cresteCarsList(myAvtoPark);
console.log(carsItems);

const carsList = document.createElement("ul");
carsList.append(...carsItems);
console.log(carsList);

aboutSection.append(carsList);
