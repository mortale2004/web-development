<<<<<<< HEAD

window.onscroll = function() {navsticky()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function navsticky() {
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

// To drop down notes 
let drop = document.getElementsByClassName("drop");
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click",  function() {
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      drop[i-1].innerHTML = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "%";
      drop[i-1].innerHTML = "-";
    } 
  });
}

// To open drop downs of notes from department
let list = document.getElementsByClassName("list");
let boxes = document.getElementsByClassName("content");
for (let x = 0; x<list.length; x++)
{
list[x].addEventListener("click", function(){
  if (boxes[x].style.maxHeight){
    content.style.maxHeight = null;
  
    boxes[x].style.maxHeight = null;
  } else {
    boxes[x].style.maxHeight = boxes[x].scrollHeight + "%";
    drop[x].innerHTML ="-";
  } 
});
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
=======

window.onscroll = function() {navsticky()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function navsticky() {
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

// To drop down notes 
let drop = document.getElementsByClassName("drop");
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click",  function() {
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      drop[i-1].innerHTML = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "%";
      drop[i-1].innerHTML = "-";
    } 
  });
}

// To open drop downs of notes from department
let list = document.getElementsByClassName("list");
let boxes = document.getElementsByClassName("content");
for (let x = 0; x<list.length; x++)
{
list[x].addEventListener("click", function(){
  if (boxes[x].style.maxHeight){
    content.style.maxHeight = null;
  
    boxes[x].style.maxHeight = null;
  } else {
    boxes[x].style.maxHeight = boxes[x].scrollHeight + "%";
    drop[x].innerHTML ="-";
  } 
});
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
>>>>>>> a862dbc7a8835004bdd984eb525bcd10833d870d
};