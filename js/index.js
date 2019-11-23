let ourWorksHover = document.querySelector(".our-works-hover");
ourWorksHover.onmouseover = function() {
  let nameOfTheSite = document.querySelector(".name-of-web-site");
  let buttonOnImg = document.querySelector(".button-on-img");
  let discription = document.querySelector(".discription");
  nameOfTheSite.style.display = "block";
  buttonOnImg.style.display = "flex";
  discription.style.display = "flex";
  ourWorksHover.onmouseout = function() {
    nameOfTheSite.style.display = "none";
    buttonOnImg.style.display = "none";
    discription.style.display = "none";
  };
};
