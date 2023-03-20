async function ikusiUrteak() {
    var data = await (await fetch('http://zubiriapi.duckdns.org:8000/select/select%20*%20from%20urteak%20order%20by%20id_urtea%20asc/taldea1')).json()
    document.getElementById("urteak").innerHTML = data.item_id;
}