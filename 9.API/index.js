// function tinhTong(a, b){
//     let tong = a + b;
//     return(tong);
// }
// let a = 10;
// let b = 5;
// let sum = tinhTong(a, b);
// console.log(sum);

// function addAndUpper(str1, str2){
//     let strResult = str1 + str2;
//     strResult= strResult.toUpperCase();
//     return( strResult);
// }
// let str1 = "ab";
// let str2 = "cd";
// let result = addAndUpper(str1, str2);
// console.log(result);

async function getAPI(){
    let response = await fetch("https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json");
    console.log(response);
    let data = await response.json();
    console.log(data);
    let quotes =document.getElementById("quotes");
    for( i in data){
        let item = data[i];
        let quoteText= item.quoteText;
        quotes.innerHTML += `<li>${quoteText}</li>`;
    }
}

getAPI();



