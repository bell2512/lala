let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let count = 0; 
plus.onclick = function() {
    count += 1;
    plus.innerHTML = count;
};
minus.onclick = function(){
    count -= 1;
    minus.innerHTML = count;
};


