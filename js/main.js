document.querySelector("h1").addEventListener("click", fetchBS)
let text = document.querySelector("p")

function fetchBS(){
    fetch("https://corporatebs-generator.sameerkumar.website/")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            // text.classList.add("fadein")
            text.classList.add("slidein")
            text.innerText = data.phrase
            setTimeout( _ => text.classList.remove("slidein"), 1000)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
