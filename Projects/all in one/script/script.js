<<<<<<< HEAD
window.onscroll = function() {
  navbarsticky();
};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function navbarsticky() {
  if (window.pageYOffset > sticky+95) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

function toggleNav() {
    var x = document.getElementById("toggle");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function toggleNav2() {
    var xy = document.getElementById("toggle2");
    if (xy.style.display === "block") {
      xy.style.display = "none";
    } else {
      xy.style.display = "block";
    }
  }

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute("footer-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("footer-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
includeHTML();



// // // loader

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
};

window.onload - myFunction();


// to add class to active page
let active = document.getElementsByClassName("active");
active[0].classList.add("active");
active[0].classList.add("active2");




// To change the title of the website
let title = document.querySelector("title");
let i = 0;
let newTit = ["All In One","Simple, Free and Fast", "Try New Courses", "Sorry for ads!", "Get anything !", "Everything for free"];    
let x = setInterval(function(){
      if (i<newTit.length)
      {
        title.innerText = newTit[i];
        i++; 
      }
      else{
        i=0;
        title.innerText = newTit[i];
      }
},2000);

// To open the menu of navigation bar
let courses = document.getElementById("courses");
courses.addEventListener("click",function(){
  toggleNav2();
})

// To open the menu of left side
let hide = document.getElementById("hide");
let closre = document.getElementById("close");
let news = closre.querySelector("i");
closre.addEventListener("click", function(){
  if (hide.style.display == "none")
  {
    hide.style.display = "flex";
    news.classList.remove("fa-circle");
    news.classList.add("fa-close");
    
  }
  else
  {
    hide.style.display = "none";
  news.classList.remove("fa-close");
  news.classList.add("fa-circle");
  }
});


// go to top

$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});

// heading text neon color
$('[data-text]').on('keyup', function(){
  $(this).attr('data-text', $(this).text());
});


// d
let dark_btn = document.getElementById("dark-btn");
dark_btn.addEventListener("click", ()=>{
  let body = document.querySelector("body");
  body.style.backgroundColor = "rgb(10,10,16)";
=======
window.onscroll = function() {
  navbarsticky();
};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function navbarsticky() {
  if (window.pageYOffset > sticky+95) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

function toggleNav() {
    var x = document.getElementById("toggle");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function toggleNav2() {
    var xy = document.getElementById("toggle2");
    if (xy.style.display === "block") {
      xy.style.display = "none";
    } else {
      xy.style.display = "block";
    }
  }

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute("footer-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("footer-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
includeHTML();



// // // loader

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
};

window.onload - myFunction();


// to add class to active page
let active = document.getElementsByClassName("active");
active[0].classList.add("active");
active[0].classList.add("active2");




// To change the title of the website
let title = document.querySelector("title");
let i = 0;
let newTit = ["All In One","Simple, Free and Fast", "Try New Courses", "Sorry for ads!", "Get anything !", "Everything for free"];    
let x = setInterval(function(){
      if (i<newTit.length)
      {
        title.innerText = newTit[i];
        i++; 
      }
      else{
        i=0;
        title.innerText = newTit[i];
      }
},2000);

// To open the menu of navigation bar
let courses = document.getElementById("courses");
courses.addEventListener("click",function(){
  toggleNav2();
})

// To open the menu of left side
let hide = document.getElementById("hide");
let closre = document.getElementById("close");
let news = closre.querySelector("i");
closre.addEventListener("click", function(){
  if (hide.style.display == "none")
  {
    hide.style.display = "flex";
    news.classList.remove("fa-circle");
    news.classList.add("fa-close");
    
  }
  else
  {
    hide.style.display = "none";
  news.classList.remove("fa-close");
  news.classList.add("fa-circle");
  }
});


// go to top

$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});

// heading text neon color
$('[data-text]').on('keyup', function(){
  $(this).attr('data-text', $(this).text());
});


// d
let dark_btn = document.getElementById("dark-btn");
dark_btn.addEventListener("click", ()=>{
  let body = document.querySelector("body");
  body.style.backgroundColor = "rgb(10,10,16)";
>>>>>>> a862dbc7a8835004bdd984eb525bcd10833d870d
})