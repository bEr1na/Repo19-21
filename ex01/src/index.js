var str = [];
var counter = 0;
var on = false;
/*brojevi*/
function fun1(){
  
    str += "1";
    document.getElementById("textArea").value = str;
}

function fun2(){
  
    str += "2";
    document.getElementById("textArea").value = str;
}

function fun3(){
  
    str += "3";
    document.getElementById("textArea").value = str;
}
function fun4(){
  
    str += "4";
    document.getElementById("textArea").value = str;
}
function fun5(){
  
    str += "5";
    document.getElementById("textArea").value = str;
}
function fun6(){
  
    str += "6";
    document.getElementById("textArea").value = str;
}
function fun7(){
  
    str += "7";
    document.getElementById("textArea").value = str;
}
function fun8(){
  
    str += "8";
    document.getElementById("textArea").value = str;
}
function fun9(){
  
    str += "9";
    document.getElementById("textArea").value = str;
}
function fun0(){
  
    str += "0";
    document.getElementById("textArea").value = str;
}
function funminus(){
  
    str += "-";
    document.getElementById("textArea").value = str;
}
function fundonja(){
  
    str += "_";
    document.getElementById("textArea").value = str;
}
/*slova*/
function funa(){
    if(on==true){
        str += "A";
    }
    else{
        str = str += "a";
    }
    
    document.getElementById("textArea").value = str;
}
function funb(){
    if(on==true){
        str += "B";
    }
    else{
        str = str += "b";
    }
    
    document.getElementById("textArea").value = str;
}
function func(){
    if(on==true){
        str += "C";
    }
    else{
        str = str += "c";
    }
    
    document.getElementById("textArea").value = str;
}
function fund(){
    if(on==true){
        str += "D";
    }
    else{
        str = str += "d";
    }
    
    document.getElementById("textArea").value = str;
}
function fune(){
    if(on==true){
        str += "E";
    }
    else{
        str = str += "e";
    }
    
    document.getElementById("textArea").value = str;
}
function funf(){
    if(on==true){
        str += "F";
    }
    else{
        str = str += "f";
    }
    
    document.getElementById("textArea").value = str;
}
function fung(){
    if(on==true){
        str += "G";
    }
    else{
        str = str += "g";
    }
    
    document.getElementById("textArea").value = str;
}
function funh(){
    if(on==true){
        str += "H";
    }
    else{
        str = str += "h";
    }
    
    document.getElementById("textArea").value = str;
}
function funi(){
    if(on==true){
        str += "I";
    }
    else{
        str = str += "i";
    }
    
    document.getElementById("textArea").value = str;
}
function funj(){
    if(on==true){
        str += "J";
    }
    else{
        str = str += "j";
    }
    
    document.getElementById("textArea").value = str;
}
function funk(){
    if(on==true){
        str += "K";
    }
    else{
        str = str += "k";
    }
    
    document.getElementById("textArea").value = str;
}
function funl(){
    if(on==true){
        str += "L";
    }
    else{
        str = str += "l";
    }
    
    document.getElementById("textArea").value = str;
}
function funm(){
    if(on==true){
        str += "M";
    }
    else{
        str = str += "m";
    }
    
    document.getElementById("textArea").value = str;
}
function funn(){
    if(on==true){
        str += "N";
    }
    else{
        str = str += "n";
    }
    
    document.getElementById("textArea").value = str;
}
function funo(){
    if(on==true){
        str += "O";
    }
    else{
        str = str += "o";
    }
    
    document.getElementById("textArea").value = str;
}
function funp(){
    if(on==true){
        str += "P";
    }
    else{
        str = str += "p";
    }
    
    document.getElementById("textArea").value = str;
}
function funq(){
    if(on==true){
        str += "Q";
    }
    else{
        str = str += "q";
    }
    
    document.getElementById("textArea").value = str;
}
function funr(){
    if(on==true){
        str += "R";
    }
    else{
        str = str += "r";
    }
    
    document.getElementById("textArea").value = str;
}
function funs(){
    if(on==true){
        str += "S";
    }
    else{
        str = str += "s";
    }
    
    document.getElementById("textArea").value = str;
}
function funt(){
    if(on==true){
        str += "T";
    }
    else{
        str = str += "t";
    }
    
    document.getElementById("textArea").value = str;
}
function funu(){
    if(on==true){
        str += "U";
    }
    else{
        str = str += "u";
    }
    
    document.getElementById("textArea").value = str;
}
function funv(){
    if(on==true){
        str += "V";
    }
    else{
        str = str += "v";
    }
    
    document.getElementById("textArea").value = str;
}
function funy(){
    if(on==true){
        str += "Y";
    }
    else{
        str = str += "y";
    }
    
    document.getElementById("textArea").value = str;
}
function funx(){
    if(on==true){
        str += "X";
    }
    else{
        str = str += "x";
    }
    
    document.getElementById("textArea").value = str;
}
function funw(){
    if(on==true){
        str += "W";
    }
    else{
        str = str += "w";
    }
    
    document.getElementById("textArea").value = str;
}
function funz(){
    if(on==true){
        str += "Z";
    }
    else{
        str = str += "z";
    }
    
    document.getElementById("textArea").value = str;
}





function funbackSpace(){
    str = str.slice(0, -1);
    document.getElementById("textArea").value = str;
}

function funspace(){
    str += " ";
    document.getElementById("textArea").value = str;
}

function funcapsLock(){
    counter++;
    if(counter%2==1){
        on = true;
    } else{ on = false;}

}
function funok(){
    window.alert(str);
}