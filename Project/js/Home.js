// Section1 (slider)

var img = document.getElementById("image");
var nextbtn = document.getElementById("next");
var prevbtn = document.getElementById("prev");
var count=1 ;
nextbtn.addEventListener("click", function () {
    count++;
    if (count == 1) {
        img.setAttribute('src','./images/ip1.jpg')
    } else if (count == 2) {
        img.setAttribute('src','./images/ip2.jpg')
    } else if (count == 3) {
        img.setAttribute('src','./images/ip3.jpg')
    }else if (count == 4) {
        img.setAttribute('src','./images/s0.jpg')
    } else if (count == 5) {
        img.setAttribute('src','./images/s1.jpg')
    } else if (count == 6) {
        img.setAttribute('src', './images/s2.jpg')
        count=0
    }
})
prevbtn.addEventListener("click", function () {
    if (count == 1) {
        img.setAttribute('src', './images/ip1.jpg')
        count = 7;
    } else if (count == 2) {
        img.setAttribute('src','./images/ip2.jpg')
    } else if (count == 3) {
        img.setAttribute('src','./images/ip3.jpg')
    }else if (count == 4) {
        img.setAttribute('src','./images/s0.jpg')
    } else if (count == 5) {
        img.setAttribute('src','./images/s1.jpg')
    } else if (count == 6) {
        img.setAttribute('src', './images/s2.jpg')
        count=1
    }
        count--;
})
setInterval(function () {
    count++;
    if (count == 1) {
        img.setAttribute('src','./images/ip1.jpg')
    } else if (count == 2) {
        img.setAttribute('src','./images/ip2.jpg')
    } else if (count == 3) {
        img.setAttribute('src','./images/ip3.jpg')
    }else if (count == 4) {
        img.setAttribute('src','./images/s0.jpg')
    } else if (count == 5) {
        img.setAttribute('src','./images/s1.jpg')
    } else if (count == 6) {
        img.setAttribute('src', './images/s2.jpg')
        count=0
    }
}, 1000)

//Section (filter)
var arrAll = [
    {id:"1h", img: "./images/head1.png", name: "Headphone", price: '30$' },
    {id:"1l", img: "./images/lap1.png", name: "Toshiba", price: '240$' },
    {id:"1p", img: "./images/phone1.png", name: "Iphone", price: '187$' },
    {id:"2h", img: "./images/head2.png", name: "Headphone", price: '25$' },
    {id:"2l", img: "./images/lap2.png", name: "Laptop", price: '250$' },
    {id:"2p", img: "./images/phone2.png", name: "Iphone", price: '50$' },
    {id:"3h", img: "./images/head3.png", name: "Headphone", price: '30$' },
    {id:"3l", img: "./images/lap3.png", name: "Hp", price: '440$' },
    {id:"3p", img: "./images/phone3.png", name: "Iphone", price: '187$' },
    {id:"4h",img: "./images/head4.png", name: "Headphone", price: '25$' },
    {id:"4l",img: "./images/lap4.png", name: "Dell", price: '500$' },
    {id:"4p",img: "./images/phone4.png", name: "Android", price: '50$' }
]
var arrHeadphones = [
    {id:"1h", img: "./images/head1.png", name: "Headphone", price: '30$' },
    {id:"2h", img: "./images/head2.png", name: "Headphone", price: '25$' },
    {id:"3h", img: "./images/head3.png", name: "Headphone", price: '30$' },
    {id:"4h", img: "./images/head4.png", name: "Headphone", price: '25$' }
]
var arrPhones = [
    {id:"1p", img: "./images/phone1.png", name: "Iphone", price: "187$" },
    {id:"2p", img: "./images/phone2.png", name: "Iphone", price: "50$" },
    {id:"3p", img: "./images/phone3.png", name: "Iphone", price: "187$" },
    {id:"4p", img: "./images/phone4.png", name: "Android", price: "50$" }
]
console.log(arrPhones[1].price)
var arrLaptops = [
    {id:"1l", img: "./images/lap1.png", name: "Toshiba", price: '240$' },
    {id:"2l", img: "./images/lap2.png", name: "Laptop", price: '250$' },
    {id:"3l", img: "./images/lap3.png", name: "Hp", price: '440$' },
    {id:"4l", img: "./images/lap4.png", name: "Dell", price: '500$' }
]
var All = document.getElementById("All");
var Headphones = document.getElementById("Headphones");
var Phones = document.getElementById("Phones");
var Laptops = document.getElementById("Laptops");

All.addEventListener("click", function () {
    location.reload();
})
Phones.addEventListener("click", function () {
    var AllImgs = document.querySelectorAll(".img")
    var AllNames = document.querySelectorAll(".name")
    var AllPrice = document.querySelectorAll(".price")
    var hide = document.querySelectorAll(".hide")

    AllImgs.forEach(function (img, index) {
        img.setAttribute("src",arrPhones[index].img);
    })

    AllNames.forEach(function (name, index) {
        name.textContent = arrPhones[index].name;
    })

    AllPrice.forEach(function (Price, index) {
        Price.textContent = arrPhones[index].price;
    })

    hide.forEach(function (hide, index) {
        hide.style.display='none'
    })
})

Laptops.addEventListener("click", function () {
    var AllImgs = document.querySelectorAll(".img")
    var AllNames = document.querySelectorAll(".name")
    var AllPrice = document.getElementsByClassName("price")
    var hide = document.getElementsByClassName("hide")

    AllImgs.forEach(function (img, index) {
        img.setAttribute("src",arrLaptops[index].img);
    })

    AllNames.forEach(function (name, index) {
        name.textContent = arrLaptops[index].name;
    })

    AllPrice.forEach(function (Price, index) {
        Price.textContent = arrLaptops[index].price;
    })

    hide.forEach(function (hide, index) {
        hide.style.display='none'
    })
})
Headphones.addEventListener("click", function () {
    var AllImgs = document.querySelectorAll(".img")
    var AllNames = document.querySelectorAll(".name")
    var AllPrice = document.getElementsByClassName("price")
    var hide = document.getElementsByClassName("hide")

    AllImgs.forEach(function (img, index) {
        img.setAttribute("src",arrHeadphones[index].img);
    })

    AllNames.forEach(function (name, index) {
        name.textContent = arrHeadphones[index].name;
    })

    AllPrice.forEach(function (Price, index) {
        Price.textContent = arrHeadphones[index].price;
    })

    hide.forEach(function (hide, index) {
        hide.style.display='none'
    })
})



// Section3(product)
var counter = 0;
var addCard = document.querySelectorAll(".btn-card");
var counter = 0;
var product_cookie;
var ProductData =""
addCard.forEach(function (button) {
    button.addEventListener("click", function () {
        counter += 1;
        var card = document.getElementById("counterCard").textContent = counter;
        var btnValue = button.value;
        var myDate = new Date();
        for (var i = 0; i < arrAll.length; i++){
            if (btnValue === arrAll[i].id) {
                ProductData += arrAll[i].name + "," + arrAll[i].price + "," + arrAll[i].img+",";
            }
        }
        document.cookie = "ProductData,"+ ProductData +  ";expire=" + myDate;
    });
});


//Section4(footer)
var upArrow = document.getElementById("upArrow");
var up =document.getElementById("up")
upArrow.addEventListener("click", function () {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
})