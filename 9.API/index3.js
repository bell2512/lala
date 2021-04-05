async function getAPI() {
    let response = await fetch("https://reqres.in/api/users");
    let parseRes = await response.json();
    let users = parseRes.data;
    for (i in users) {
        console.log(users[i]);
        console.log(users[i].first_name);
    }

}

async function postUserAPI() {
    let option = {
        method = "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Quan",
            job: "Massage for dev",
        }),
    };
    
}
postUserAPI();