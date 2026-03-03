let lohnElement = document.getElementById("Stundenlohn"); //finde den Tag
let lohn = lohn.innerText; // der text im element
let opLohn = ["22€", "25€", "27€"]; // Löhne, die man haben kann
function changeStunden(type) {
    if (opLohn.includes(lohn)) { // falls der lohn in den optionen für lohn ist, dann:
        if (type === "add") { // falls der angegebene typ "add" ist, dann:
            let index = opLohn.indexOf(lohn);
            if(index < 2) { // checken ob index kleiner als 2 ist damit es nicht für index 3 guckt
                index +=1;
                lohnElement.innerText = opLohn[index];
            } else {
                console.log("nix");
            }     
        } else if (type === "subtract") { // gleiche sache wie davor aber
            let index = opLohn.indexOf(lohn);
            if(index > 0) { // wenn der lohn größer als 0 ist (listen fangen bei 0 an)
                index -=1;
                lohnElement.innerText = opLohn[index];
            } else {
                console.log("nix");
            }
        }
    }else { // falls es nd da drin ist, dann 
        index = 1;
        lohnElement.innerText = opLohn[1]; // setzt es zu opLohn [1](der standard)
    }
}