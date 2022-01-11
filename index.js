var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
console.log("images/dice" + randomNumber1 + ".png")

document.querySelectorAll(".img1")[0].setAttribute("src","images/dice" + randomNumber1 +".png");
document.querySelectorAll(".img2")[0].setAttribute("src","images/dice" + randomNumber2 +".png");