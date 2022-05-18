let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});


let data = null;

fetch('js/data.json')
  .then(res => res.json())
  .then(resData => {
    data = resData;
    render();
  })

class packagesCard
{
  constructor(ref)
  {
    this.ref = ref;
  }

  add(imageURL, heading, description, discountPrice, originalPrice)
  {
    const div = document.createElement('div');
    div.classList.add("box");
    div.innerHTML = `<img src="${imageURL}" alt="">
    <div class="content">
        <h3> <i class="fas fa-map-marker-alt"></i>${heading}</h3>
        <p>${description}</p>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <div class="price"> Rs.${discountPrice} <span>Rs.${originalPrice}</span> </div>
        <a href="#" class="btn">book now</a>
    </div>`
    this.ref.appendChild(div);
  }
}

function render()
{
  const packageMenu = new packagesCard(document.querySelector("#package-container"));
  console.log(data)
  data.packages.forEach(value => {
    packageMenu.add(value.imageURL, value.heading, value.description, value.discountPrice, value.originalPrice);
  })
}

