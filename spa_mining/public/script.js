const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// показать меню
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// скрыть меню
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// диафильм

var schet = 0;
var height = 0;
var width = 0;

function one() {
    width = document.body.clientWidth;
    height = document.body.clientHeight;
}

function photoClick(number) {
  document.getElementById("photoDiafilm").src = "img/m" + (schet + number) + ".jpg";
}

Vue.createApp({
  methods: {
    greet(correct) {
      if (correct) {
        alert('Данные отправлены успешно')
      }
      else{
        alert('Поля заполнены неверно')
      }
    }
  }
}).mount('#click_send')


Vue.createApp({
  methods: {
    leftBut() {
      if (schet > 0) {
        schet--;
        document.getElementById("fotoL").src = "img/m" + (schet+1) + ".jpg";
        document.getElementById("fotoC").src = "img/m" + (schet+2) + ".jpg";
        document.getElementById("fotoR").src = "img/m" + (schet+3) + ".jpg";
    }
    }
  }
}).mount('#lbtn')

Vue.createApp({
  methods: {
    rightBut() {
      if (schet < 5) {
        schet++;
        document.getElementById("fotoL").src = "img/m" + (schet+1) + ".jpg";
        document.getElementById("fotoC").src = "img/m" + (schet+2) + ".jpg";
        document.getElementById("fotoR").src = "img/m" + (schet+3) + ".jpg";
    }
    }
  }
}).mount('#rbtn')

// диафильм

// навигация
function show_Object1(){
  document.getElementById('div1').className = 'show'
}

function show_Object2(){
  document.getElementById('div2').className = 'show'
}

function show_Object3(){
  document.getElementById('div3').className = 'show'
}

function show_Object4(){
  document.getElementById('div4').className = 'show'
}

function hide_Object1(){
  document.getElementById('div1').className = 'hide'
}

function hide_Object2(){
  document.getElementById('div2').className = 'hide'
}

function hide_Object3(){
  document.getElementById('div3').className = 'hide'
}

function hide_Object4(){
  document.getElementById('div4').className = 'hide'
}
//навигация