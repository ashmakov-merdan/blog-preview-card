let accordion = document.getElementsByClassName("accordion-btn")
let i;

for(i = 0; i < accordion.length; i++){
  accordion[i].addEventListener("click", function(){
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    let icon = this.querySelector("img");

    if(panel.style.height){
      panel.style.height = null
      icon.src = "assets/images/icon-plus.svg"
    } else {
      panel.style.height = panel.scrollHeight + "px";
      icon.src = "assets/images/icon-minus.svg"
    };
  });
};