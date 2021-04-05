let hd = document.getElementById("hd");
console.log(hd);
console.dir(hd);
hd.innerHTML = 'DOM';

let hd2 = document.getElementsByClassName("hd_class");
console.log(hd2);
console.dir(hd2);

hd2[0].innerHTML = 'new heading';
document.getElementsByTagName("h1");

