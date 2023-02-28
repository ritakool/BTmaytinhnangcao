
let display= document.getElementById('display')
function wiew(value){
    display.value += value;
}
function del(){
    display.value = '';
}
function ketqua(){
display.value = eval(display.value);
}