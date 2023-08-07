// To write the text in the choose file
let file = document.getElementById("actual-btn");
console.log(file);
let print = document.getElementById("choose");
file.addEventListener('change', function(){
  let text = file.value;
  text = text.replace("C:\\fakepath\\","");
  print.innerHTML = text;
});

