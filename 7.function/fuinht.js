// function getAlert(){
//     alert("hello"); 
// }


function callbackFunction(){
    console.log('di ngu');
}
function functionMe(callback){
        console.log('da hoc bai xong');
        callback();
}
functionMe(callbackFunction);