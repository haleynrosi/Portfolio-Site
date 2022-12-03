

let headerOne = document.getElementById('titleHeading'); //accessing the HTML element by its id and assigning it to headerOne variable
headerOne.className = "titleHeading"; //assiging the headerOne variable a class name "titleHeading"
let headerString = "Hi, I'm Haley Fisher. Software Engineer." //assigning a string to the headerSring variable
let headerIndex = 0; //assigning a number to the headerIndex variable - specifically an index number for our string


window.addEventListener('load', e=>{
    console.log(headerString[8])
})

window.addEventListener('load', setInterval(e=>{ // window represents the browsers window - added an event listener to it that 
                                       //specifically listens for the window/browser to load and then the event is the 
    if(headerIndex<headerString.length){        //setInterval built-in function that runs the event every 70 times
        headerOne.innerHTML += headerString[headerIndex];                                        // if statement - not while or for loop bc they would keep running before the 
        headerIndex++;                                 //setInterval could stop at each letter, each interval sets then innerHTML of 
                                                 //the headerOne variable to the next index of the headerString
}},70))
    

// window.addEventListener('load', setInterval(e=>{ 

// if(headerIndex<headerString[21]){        
//     headerOne.innerHTML += headerString[headerIndex];        
// } else if (headerIndex = headerString[21]){
//     headerOne.innerHTMl += "\n";
// } else if (headerIndex> headerString[21] && headerIndex<headerString.length){
//     headerOne.innerHTML += headerString[headerIndex];
// }
//     headerIndex++;

// },70))


