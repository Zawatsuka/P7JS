function multipli(firstNum,secondNum){
    return firstNum * secondNum ;
}
let button = document.getElementById("button");
button.onclick = function(e){
    e.preventDefault();
    let a = document.getElementById("firstNum").value
    let b = document.getElementById("secondNum").value
    if(a && b){
        let total = multipli(a,b);
        alert(total);
    } else{
        alert("Vous devez entrer des nombres");
    }
    
}