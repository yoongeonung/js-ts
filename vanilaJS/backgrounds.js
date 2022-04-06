const backgrounds = ["bg1.jpeg", "bg2.jpeg", "bg3.jpeg"];
const number = Math.floor(Math.random() * backgrounds.length);
const selectedImage = backgrounds[number];

document.body.style.backgroundImage = `url(bg/${selectedImage})`; // cao
