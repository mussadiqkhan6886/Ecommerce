const page = document.querySelector('.wrapper');
const navItems = document.querySelectorAll('.listItem');

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let currentProduct = products[0];

const currentImg = document.getElementById('currentImage');
const currentTitle = document.getElementById('heading-buy-page');
const currentPrice = document.getElementById('price-buy-page');
const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const buyingBtn = document.querySelector('#buying');
const close = document.querySelector('.close');
const popup = document.querySelector('.popup');

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        page.style.transform = `translateX(${-100 * index}vw)`;
        currentProduct = products[index];
        sizes.forEach(size => {
          size.style.color = 'black';
          size.style.background = 'white';
        })
        currentPrice.innerHTML = `$${currentProduct.price}`;
        currentTitle.innerHTML = currentProduct.title;
        currentImg.src = currentProduct.colors[0].img;
        colors.forEach((color, index) => {
          color.style.background = currentProduct.colors[index].code;
        })
    });
    
})

colors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentImg.src = currentProduct.colors[index].img;
  })
})

sizes.forEach((size, index) => {
  size.addEventListener('click', () =>{
    sizes.forEach(size => {
      size.style.background = 'white';
    size.style.color = 'black';
    })
    size.style.background = 'black';
    size.style.color = 'white';
  })
})

buyingBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});
close.addEventListener('click', () => {
  popup.style.display = 'none';
})