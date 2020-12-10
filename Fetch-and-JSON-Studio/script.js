window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            console.log(json)
            const div = document.getElementById("container")
            console.log(div)
            for (let i = 0; i < json.length; i++) {
                div.innerHTML += `
                 <div class = "astronaut">
                 <div class = <"bio">
                 <h3>${json[i].firstName}${json[i].lastname}</h3>
            <ul>
                <li>${json[i].hoursInSpace}</li>
                <li>${json[i].active}</li>
                <li>${json[i].skills}</li>
            </ul>
            </div>
            <img class = "avatar" src="${json[i].picture}">`

            }

        })
    })
})