<<<<<<< HEAD
// To write the text in the choose file
let file = document.getElementById("actual-btn");
console.log(file);
let print = document.getElementById("choose");
file.addEventListener('change', function(){
  let text = file.value;
  text = text.replace("C:\\fakepath\\","");
  print.innerHTML = text;
});

=======
// To write the text in the choose file
let file = document.getElementById("actual-btn");
console.log(file);
let print = document.getElementById("choose");
file.addEventListener('change', function(){
  let text = file.value;
  text = text.replace("C:\\fakepath\\","");
  print.innerHTML = text;
});

>>>>>>> a862dbc7a8835004bdd984eb525bcd10833d870d
