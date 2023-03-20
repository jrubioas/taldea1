async function sartuUrteak() {
    var urtea = document.getElementById("urtea").text
    var id_urtea = document.getElementById("id_urtea").integer
    var data = await (await fetch('http://zubiriapi.duckdns.org:8000/insert/insert%20into%20urteak%20values%20()/taldea1')).json()
    document.getElementById("urteaksartuta").innerHTML= 'Jarritako datuak sartu dira!';
}