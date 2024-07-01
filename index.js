// let response = "https://api.github.com/users/Aliyaa1"
// fetch("http://localhost:4001").then (
//     function(response) {
//         if(response.ok) {
//             return response.json(); //car fonc° 
//         }
//         throw new Error("Erreur lors de la requete")
//     })

//     .then(function (response){
//         if (response.ok){
//             return response.json 
//         };
//     });

//     document.getElementById('recherche').value = 'resultat';

// async function location(){
//     let response= await fetch ("https://api.github.com/users/Aliyaa1")
//   .then(response => response.json())
//   .then(response => alert(JSON.stringify(response)))
//   .catch(location=> alert ("Localisation :" = location));
// }



let form = document. querySelector("form");
console.log( form);
form.addEventListener("submit", function(e) {
    e.preventDefault();
    // console.log("submit");
    let inputName = document.querySelector("#nom");
    // console.log("https://api.github.com/users" + inputName.value );

    let username = inputName.value;
    fetch(`https://api.github.com/users/${username}`).then(function (response) 
    {
        return response.json();
    })
    .then((data) => {
        let resultat = document.querySelector("#resultat");
    let login = document.createElement ("p");
    login.textContent = data.login;
    resultat.appendChild(login);

    let image = document.createElement ("div");
    // image.setAttribute ("src", data.avatar_url);
    image.classList.add("image") // cree une classe
image.style.background = `url(${data.avatar_url})no-repeat center center / cover`;
        
    resultat.appendChild(image);

    let twitterLink = document.createElement ("a");
    // image.setAttribute ("src", data.avatar_url);
    twitterLink.classList.add("social") // cree une classe
twitterLink.style.background = `url(twitter.png)no-repeat center center / cover`;
        twitterLink.setAttribute("href", `https://twitter.com/login/${data.twitter_username}`);
        twitterLink.setAttribute("target", "_blank");
    resultat.appendChild(twitterLink);
    });

});


//  fetch("https://api.github.com/users" +inputName.value}
