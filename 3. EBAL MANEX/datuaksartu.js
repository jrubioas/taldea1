async function sartuUrteak() {
    var data = await (await fetch('http://zubiriapi.duckdns.org:8000/insert/insert%20into%20urteak%20values/taldea1')).json()
    document.getElementById("urteaksartuta").innerHTML= 'Jarritako datuak sartu dira!';
}