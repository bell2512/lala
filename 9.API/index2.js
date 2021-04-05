async function getAPI(){
    let response = await fetch("https://reqres.in/api/users");
    let parseRes= await response.json();
    let users = parseRes.data;
    for( i in users.length){
        console.log(users[i]);
        console.log(users[i].first_name);
    }

}

getAPI();
