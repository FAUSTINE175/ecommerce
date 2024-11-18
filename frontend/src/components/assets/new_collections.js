import a33_img from "./a33.png";
import pixel6_img from "./pixel6.png";
import a15_img from "./a15.png";
import a35_img from "./a35.png";
import iphone15_img from "./iphone15.png";

let new_collections = [
    {
        id: 1,
        name: "samsung galaxy A33",
        category: "samsung",
        Image: a33_img,
        new_price: 35000,
        old_price: 38000,
    },
    {
        id: 2,
        name: "Google Pixel 6",
        category: "pixel",
        Image: pixel6_img,
        new_price: 43000,
        old_price: 45000, 
    },
    {
        id: 3,
        name: "samsung galaxy A15",
        category: "samsung",
        Image: a15_img,
        new_price: 17000,
        old_price: 20000,
    },
    {
        id: 4,
        name: "samsung galaxy A35",
        category: "samsung",
        Image: a35_img,
        new_price: 30000,
        old_price: 33000,
    },
    {
        id: 5,
        name: "Iphone 15",
        category: "iphone",
        Image: iphone15_img,
        new_price: 91000,
        old_price: 95000,
    },
];

export default new_collections;