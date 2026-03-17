let opStunden = ["35h", "40h", "45h"];

function changeStunden(type, id, wagearray) {
    let fulldiv = document.getElementById(id);
    let maindiv = fulldiv.querySelector(".lohndiv");
    let lohnElement = fulldiv.querySelector(".Stundenlohn"); //finde den Tag
    let lohn = lohnElement.innerText; // der text im element // Löhne, die man haben kann
    let stunden = maindiv.querySelector(".Stunden"); // Aktuelle Studnen
    if (wagearray.includes(lohn)) { // falls der lohn in den optionen für lohn ist, dann:
        if (wagearray.indexOf(lohn) !== opStunden.indexOf(stunden.innerText)) {
            console.log(wagearray.indexOf(lohn));
            console.log(opStunden.indexOf(stunden.innerText));
            lohnElement.innerText = wagearray[1];
            stunden.innerText = opStunden[1];
        }
        if (type === "add") { // falls der angegebene typ "add" ist, dann:
            let index = wagearray.indexOf(lohn);
            console.log(wagearray[index]);
            console.log(index);
            if(index < 2) { // checken ob index kleiner als 2 ist damit es nicht für index 3 guckt
                index +=1;
                console.log(index);
                stunden.innerText = opStunden[index]; // Text für die Stunden setzen
                lohnElement.innerText = wagearray[index]; // text für den Lohn setzen
            } else {
                console.log("nix");
            }     
        } else if (type === "subtract") { // gleiche sache wie davor aber
            let index = wagearray.indexOf(lohn);
            console.log(index);
            if(index > 0) { // wenn der lohn größer als 0 ist (listen fangen bei 0 an)
                index -=1;
                console.log(index);
                stunden.innerText = opStunden[index]; // Text für die Stunden setzen
                lohnElement.innerText = wagearray[index]; // Text für  den Lohn setzen
            } else {
                console.log("nix");
            }
        }
    }else { // falls es nd da drin ist, dann
        console.log("What"); 
        console.log(wagearray);
        console.log(opStunden);
        console.log(lohn);
        console.log(wagearray.indexOf(lohn));
        stunden.innerText = opStunden[wagearray.indexOf(lohn)+1];
        lohnElement.innerText = wagearray[wagearray.indexOf(lohn)+1];
        index = 1;
        lohnElement.innerText = wagearray[1]; // setzt es zu opLohn[1](der standard)
    }
}