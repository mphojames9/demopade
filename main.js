let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close 
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open cloe
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

const headerImg = document.querySelector('.slide');
const bodyText = document.querySelector(".slidertxt")
const UPDATE_TIME_INTERVAL = 3000

console.log(headerImg)

const text1 = "Dumbbell Only Workout: 5 Day Dumbbell Workout Split";
const text2 = "Dumbbell Only Workout: 3 Day Full Body Dumbbell Workout";
const text3 = "6 Day Push/Pull/Legs (PPL) Powerbuilding Workout Split & Meal Plan";

const imagesArray = [
  "boxed-water-is-better-y-TpYAlcBYM-unsplash.jpg",
  "jonathan-borba-lrQPTQs7nQQ-unsplash.jpg",
  "meagan-stone-r951FqxHTao-unsplash.jpg"
]

const textArray = [
    text1,
    text2,
    text3
]

let i = 0

setInterval(()=>{
  if(i == 2){
    i = 0
  }
  else {i = i + 1};
  headerImg.src = imagesArray[i]
  bodyText.innerHTML = textArray[i]
},UPDATE_TIME_INTERVAL)


const observer = new IntersectionObserver(
  (entries)=> {
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add("in-view")
    entry.target.classList.remove('not-in-view')
  } else {
    entry.target.classList.remove("in-view")
    entry.target.classList.add('not-in-view')
  } 
})
},
{
  rootMargin: '0px',
  threshold: [0, 0.1, 1]
},)

const tags = document.querySelectorAll('.fade')

tags.forEach((tag) => {
  observer.observe(tag)
})