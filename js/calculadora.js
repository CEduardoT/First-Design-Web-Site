const btnNum = document.getElementsByName("data-number");
const btnOpera = document.getElementsByName("data-opera");
const btnEqual = document.getElementsByName("data-igual") [0];
const btnDelete= document.getElementsByName("data-delete") [0];

var result= document.getElementsByClassName("result");

btnNum.forEach(function(btn){
    btn.addEventListener('click', function(){
        agregarNum(btn.innerText);
    })
});

btnOpera.forEach(function(btn){
    btn.addEventListener('click', function(){
        selectOperacion(btn.innerText);
    })
})
