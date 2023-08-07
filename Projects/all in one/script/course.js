
// To change into tabs 
const videoSection = document.querySelector(".video-section");
const referencesSection = document.querySelector(".references-section");
const notesSection = document.querySelector(".notes-section");
const ebooksSection = document.querySelector(".ebooks-section");


  const  videoBtn = document.querySelector(".videoBtn");
  const notesBtn = document.querySelector(".notesBtn");
  const referencesBtn = document.querySelector(".referencesBtn");
  const ebooksBtn = document.querySelector(".ebooksBtn");
  const signupLink = document.querySelector("form .signup-link a");
  
  videoBtn.onclick = (()=>{
    notesSection.classList.add("none");
    referencesSection.classList.add("none");
    ebooksSection.classList.add("none");
    videoSection.classList.remove("none");
    videoBtn.classList.add("active");
    referencesBtn.classList.remove("active");
    ebooksBtn.classList.remove("active");
    notesBtn.classList.remove("active");
  });
  notesBtn.onclick = (()=>{
    videoSection.classList.add("none");
    referencesSection.classList.add("none");
    notesSection.classList.remove("none");
    ebooksSection.classList.add("none");
    notesBtn.classList.add("active");
    referencesBtn.classList.remove("active");
    ebooksBtn.classList.remove("active");
    videoBtn.classList.remove("active");
  });
  referencesBtn.onclick = (()=>{
    videoSection.classList.add("none");
    notesSection.classList.add("none");
    referencesSection.classList.remove("none");
    ebooksSection.classList.add("none");
    referencesBtn.classList.add("active");
    ebooksBtn.classList.remove("active");
    videoBtn.classList.remove("active");
    notesBtn.classList.remove("active");
  });
  ebooksBtn.onclick = (()=>{
    videoSection.classList.add("none");
    notesSection.classList.add("none");
    ebooksSection.classList.remove("none");
    referencesSection.classList.add("none");
    referencesBtn.classList.remove("active");
    ebooksBtn.classList.add("active");
    videoBtn.classList.remove("active");
    notesBtn.classList.remove("active");
  });


