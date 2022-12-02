

let hOne = document.getElementById('titleHeading');
let hString = "Hi.I'm Haley Fisher.Software Engineer."




window.addEventListener('load', setInterval(e=>{
    let i = 0;
    while(i<hString.length){
        hOne.innerHTML += hString[i];
    }
},50))
    



