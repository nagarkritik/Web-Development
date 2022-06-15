
/*
// Manipulating attributes using jQuery
// class is also an attribute of HTML element

console.log($("a").attr("href")) // gets the value of attribute
$("a").attr("href", "https://www.yahoo.com") // sets the value of attribute

console.log($("a").attr("href")) 


// Adding event listener
$("h1").click(function(){
    $("h1").css("color", "yellow")
})

$(document).keypress(function(e){
    $("h1").text(e.key)
})

$("h1").on("click", function(){
    $("h1").css("color", "red")
})




// Adding and removing HTML elements

$("h1").before("<button>ClickMe</button>") // Adds element before the selected elemement
$("h1").after("<button>ClickMe</button>")// Adds element after the selected elemement
$("h1").prepend("<button>ClickMe</button>")// Adds element inside the selected element before the element
$("h1").append("<button>ClickMe</button>")// Adds element inside the selected element after the element


// Addign Animation using jQuery
$("button").on("click", function(){
    $("h1").slideUp()
    $("h1").slideDown()
    $("h1").slideToggle() 
    $("h1").toggle()
    $("h1").fadeIn()
    $("h1").fadeOut()
    $("h1").fadeToggle()

})*/