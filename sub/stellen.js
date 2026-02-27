let lohnElement = document.getElementById("Stundenlohn");
let lohn = lohn.innerText;
let opLohn = ["22€", "25€", "27€"];
function changeStunden(type) {
    if (type === "add") {
        if (opLohn.includes(lohn)) {
            let index = opLohn.indexOf(lohn);
            if(index < 2) {
                index +=1;
                lohnElement.innerText = opLohn[index];
            } else {
                console.log("nix");
            }
        } else {
            index = 1;
            lohnElement.innerText = opLohn[1];
        }
    } else if (type === "subtract") {
        if (opLohn.includes(lohn)) {
            let index = opLohn.indexOf(lohn);
            if(index > 0) {
                index -=1;
                lohnElement.innerText = opLohn[index];
            } else {
                console.log("nix");
            }
        } else {
            index = 1;
            lohnElement.innerText = opLohn[1];
        }
    }
}