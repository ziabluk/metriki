let elem1 = document.getElementById("elem1");
elem1.classList.add("www");

let elem2 = document.getElementById("elem2");
elem2.classList.remove("www");

let elem3 = document.getElementById("elem3");
let r = elem3.classList.contains("www");
console.log(r)

let elem4 = document.getElementById("elem4");
let rr = elem4.classList.contains("www");
if (rr == true){
    elem4.classList.remove("www");
} else {
    elem4.classList.add("www");
}

let elem5 = document.getElementById("elem5");
console.log(elem4.classList.length);

let elem6 = document.getElementById("elem6").classList;
for (var i = 0; i <= elem6.length; i++) {
    alert(elem6[i]);
}

let elem7 = document.getElementById("elem7");
elem7.style.cssText = 'color: red; font-size: 30px;';

let elem8 = document.getElementById("elem8");
elem8.insertAdjacentHTML('beforebegin', '<span>!!!</span>');

let elem9 = document.getElementById("elem9");
elem9.insertAdjacentHTML('beforeend', '<span>!!!</span>');

let elem10 = document.getElementById("elem10");
elem10.insertAdjacentHTML('afterbegin', '<span>!!!</span>');

let elem11 = document.getElementById("elem11");
elem11.insertAdjacentHTML('afterend', '<span>!!!</span>');

function delet(){
    let d = document.getElementById("elem12");
    let d_nested = document.getElementById("elem12q");
    d.removeChild(d_nested);
}
function delit(){
    document.getElementById("elem13").removeChild(document.getElementById("elem13").lastElementChild)
}

function deliiit(){
    document.getElementById("elem14").remove();
}

function delt(){
    document.getElementById("elem15").remove();
}
function bob(){
    document.getElementById("block").appendChild(document.getElementById("input").cloneNode(true));
}
function ppp(){
    let dar = ["Глент", "Кобяков", "Влад бумага"];
    for (var i of dar){
        let li = document.createElement("li");
        li.innerHTML = i;
        document.getElementById('ul').appendChild(li);
    }
}


let elemferst = document.getElementById("elem17").firstElementChild;
elemferst.style.cssText = 'color: red;';

let elemlast = document.getElementById("elem18").lastElementChild;
elemlast.style.cssText = 'color: red;';

let elem19 = document.getElementById("elem19");
let elemmini = elem19.children;
for (let elem of elemmini) {
	elem.innerHTML = elem.innerHTML + "!"
}

let elem202 = document.getElementById("elem202");
let elem2022 = elem202.previousElementSibling
elem2022.innerHTML = elem2022.innerHTML + "!"

let elem211 = document.getElementById("elem211");
let elem2112 = elem211.nextElementSibling
elem2112.innerHTML = elem2112.innerHTML + "!"


let elem221 = document.getElementById("elem221");
let elem2212 = elem221.nextElementSibling;
let elem2212r = elem2212.nextElementSibling;
elem2212r.innerHTML = elem2212r.innerHTML + "!"


let elem23mini = document.querySelector('#elem23mini');
let elem23kod = elem23mini.parentNode;
elem23kod.style.cssText = "color: red;";


let elem24baby = document.querySelector("#elem24baby");
let elem24baby1 = elem24baby.parentElement;
let elem24baby2 = elem24baby1.parentElement;
elem24baby2.style.cssText = "color: red;";


let elem25 = document.getElementById("elem25");
function elem25f(){
    alert(elem25.clientTop);
}


let elem26 = document.getElementById("elem26");
function elem26f(){
    alert(elem26.clientLeft);
}


let elem27 = document.getElementById("elem27");
function elem27f(){
    alert(elem27.offsetWidth);
}

let elem28 = document.getElementById("elem28");
function elem28f(){
    alert(elem28.offsetHeight);
}


let elem29 = document.getElementById("elem29");
function elem29f(){
    alert(elem29.clientWidth);
}


let elem30 = document.getElementById("elem30");
function elem30f(){
    alert(elem29.clientHeight);
}


let elem31 = document.getElementById("elem31");
function elem31f(){
    alert(getComputedStyle(elem31).height + ' ' + getComputedStyle(elem31).width);

}


let elem36 = document.querySelector('#elem36');



let elem37 = document.querySelector('#elem37');




let elem34 = document.querySelector('#elem34');
function scroll34() 
{
    elem34.scrollTop = -100;
}


let elem35 = document.querySelector('#elem35');
function scroll35() 
{
    elem35.scrollTop = 100;
}


var elem38 = document.getElementById('elem38');
function func38() {
	var total_height = elem38.scrollHeight;
	elem38.scrollTop = total_height - 100;
}


var elem39 = document.getElementById('elem39');
function func39() {
    alert(pageYOffset)
}


var elem40 = document.getElementById('elem40');
function func40() {
    alert(pageXOffset)
}


var elem41 = document.getElementById('elem41');
function func41() {
	window.scrollTo(300, 500);
}

function func42() {
    window.scrollBy(0, 300);
}


function func43(){
    window.scrollTo(0,document.body.clientHeight)
}


function func44() {
	window.scrollTo(0, 400);
}


function func44(){
    let body = document.documentElement;
    if (body.clientHeight == body.scrollHeight - body.scrollTop){
    window.scrollTo(0, 100);
  }
}
let elem45 = document.getElementById('elem45');
function func45(){
  let width = elem45.offsetWidth;
  let height = elem45.offsetHeight;
  elem45.style.width = width * 2 + 'px';
  elem45.style.height = height * 2 + 'px';
}

