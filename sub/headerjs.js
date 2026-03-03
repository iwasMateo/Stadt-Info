const header = document.getElementById("headerid"); // holt das Element mit der ID "headerid" (ja sehr kreativ)

header.innerHTML = `
    <div id="main-logo">
    <img src="logo.webp">
    <h1><a href="../index.html">Borlean</a></h1>
    </div>
    <h1><a href="attraktion.html">Attraktionen</a></h1>
    <h1><a href="kontakt.html">Kontakt</a></h1>
    <h1><a href="stellen.html">Stellen</a></h1>
    <link rel="stylesheet" href="headerstyle.css">
`; // fügt html auf der seite ein
