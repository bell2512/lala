// let hd = document.getElementById("hd");
// function callbackFunction(){
//     hd.innerHTML = 'da click';
// }
// hd.addEventListener("click",callbackFunction);

// hd.addEventListener("click",function(){
//     alert("da click");
// });

// let button = document.getElementById("button");
// let list = document.getElementById("list");
// button.addEventListener("click",function(){
//     list.innerHTML += "<li>juice</li>";
// });

let input = document.getElementById("input");
input.addEventListener("keypress", function(event){
    console.log(event);
    if(event.keyCode === 13 ){
        let inputValue = input.value;
        list.innerHTML += `<li>${inputValue}</li>`;
    }
});