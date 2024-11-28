let out = document.getElementById("content");
window.onload = lauch()

function lauch() {
    fetch (`Adresser.json`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            document.getElementById("greeting").innerHTML += `This is us:`;
            data.map((innbygger) => {out.innerHTML += `
                <div class="card">
                    <h4>${innbygger.fornavn} ${innbygger.etternavn}</h4>
                    <p>Address: ${innbygger.adresse.gate} ${innbygger.adresse.nummer}</p>
                    <p>Postal code: ${innbygger.adresse.postnummer} ${innbygger.adresse.poststed}</p>
                </div>
                `})
        })
}