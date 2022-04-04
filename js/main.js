$(".header ul li a").click(function (e) {

    e.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")


    $("html , body").animate({

        scrollTop: $("." + $(this).data("scroll")).offset().top - $(".header").innerHeight()

    })

})

$(".header .burger-icon").on("click" , function () {

    $(".header ul").slideToggle()

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 800) {

        $(".header").css({

            "position":"fixed",

            "z-index":"9999",

            "background-color":"#000",

            "transition":"all 0.4s linear"

        })
    } else {

        $(".header").css({

            "position":"absolute",

            "z-index":"9999",

            "background-color":"none",

            "transition":"all 0.4s linear"

        })
    }

    if ($(window).scrollTop() >= 800) {

        $("span.up").fadeIn()
        
    } else {

        $("span.up").fadeOut()

    }
})

// Button To Top 

$("span.up").on("click" , function () {

    $("html , body").animate({

        scrollTop: 0

    } , 1000)

})

// landing Section

let landingSection = document.querySelector(".landing")

let landingArrey = ["bg.jpg" , "bg-1.jpg" , "bg-2.jpg" , "bg-3.jpg"]

let RandomNumber = Math.floor(Math.random() * landingArrey.length)

setInterval(function () {

    let RandomNumber = Math.floor(Math.random() * landingArrey.length)

    landingSection.style.backgroundImage = "url(../images/backgrounds/"+ landingArrey[RandomNumber] +")"

} , 10000)

// Story Section 

let StorySection = document.querySelector(".story")

let StoryOffsetTop = StorySection.offsetTop;

let StorySpan = document.querySelectorAll(".story .skills .prog span")


// Facts Section 

let FactsSection = document.querySelector(".facts")

let FactsOffsetTop = FactsSection.offsetTop;

let FactsSpan = document.querySelectorAll(".facts .counte span")

let Started = false;

function StartCounter(el) {

    let Goal = el.dataset.goal;

    let Counte = setInterval(function () {

        el.textContent++ ;

        if (el.textContent === Goal) {

            clearInterval(Counte)

        }

    } , 3000 / Goal)

}

window.onscroll = function () {

    if (window.scrollY >= StoryOffsetTop) {

        StorySpan.forEach((span)=> {

            span.style.width = span.dataset.prog

        })

    }

    if (window.scrollY >= FactsOffsetTop) {

        if (!Started) {

            FactsSpan.forEach((li)=> {

                StartCounter(li)

            })

        }

        Started = true

    }

}

// Portfolio Section 

$(".portfolio ul li").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var FillterBox = "." + $(this).data("flliter")
    
    console.log(FillterBox)

    $(".portfolio .row > div").fadeOut()

    $(".portfolio .row "+ FillterBox +"").fadeIn()

})

let PortfolioImg = document.querySelectorAll(".portfolio .box img")

PortfolioImg.forEach ((img)=> {

    img.addEventListener("click" , function () {

        let OverlyBox = document.createElement("div")

        OverlyBox.className = "overly-box"

        document.body.appendChild(OverlyBox)

        let BoxImg = document.createElement("div")

        BoxImg.className = "box-img"

        OverlyBox.appendChild(BoxImg)

        let ImgBox = document.createElement("img")

        ImgBox.src = img.src;

        BoxImg.appendChild(ImgBox)

        let CloseButton = document.createElement("span")

        CloseButton.className = "close-button"

        BoxImg.appendChild(CloseButton)

        let CloseButtonText = document.createTextNode("X")

        CloseButton.appendChild(CloseButtonText)

        document.addEventListener("click" , function (el) {

            if (el.target.className === "close-button") {

                BoxImg.remove()

                OverlyBox.remove()

            }

        })

    })

})
