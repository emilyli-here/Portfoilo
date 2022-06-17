var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      // this.innerHTML = "Don't click this!"
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      // this.innerHTML = "Now close it, please!"
    } 
  });
}