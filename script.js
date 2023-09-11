const scrollToTopBotton = document.getElementById("scrollToTopBtn");

function scrollToTop(){
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

scrollToTopBotton.addEventListener("click",scrollToTop);