const sc = document.querySelector(".stepper_content").children;
const scount = document.querySelector(".stepper_count").children;
const accordian = document.getElementsByClassName('content');
for(let k=0;k<accordian.length;k++){
    accordian[k].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

function openPage(pageName,id) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablink");
    for (let j = 0; j < tabcontent.length; j++) {
      tabcontent[j].style.display = "none";
    }
    document.getElementById(pageName).style.display = "flex";
    tablinks[0].classList.remove("default");
}

var index = 0;
function nextBtn() {
    sc[index].classList.remove("show");
    scount[index].classList.add("complete");
    scount[index].classList.remove("active");
    index++;
    sc[index].classList.add("show");
    scount[index].classList.add("active");
}
function prevBtn() {
    sc[index].classList.remove("show");
    index--;
    sc[index].classList.add("show");
    scount[index].classList.add("active");
}
function submitBtn() {
    sc[index].classList.remove("show");
    scount[index].classList.remove("active");
    scount[index].classList.add("complete");
    index++;
    sc[index].classList.add("show");
}

var i = 0;
function openMenu() {
    document.querySelector(".navbar .right-part ul").classList.add("open");
    if(i==1) {
        document.querySelector(".navbar .right-part ul").classList.remove("close");
    }
}
function closeMenu() {
    document.querySelector(".navbar .right-part ul").classList.add("close");
    document.querySelector(".navbar .right-part ul").classList.remove("open");
    i = 1;
}