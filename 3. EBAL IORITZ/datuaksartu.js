var zerbitzariaAPI ="zubiriapi.duckdns.org:8000";
async function urteaksartu(taldea) {
    var a = document.getElementById("urtea").value;
    var b = document.getElementById("id_urtea").value;
    await fetch('http://'+zerbitzariaAPI+"/insert/insert into urteak values ('" + a + "', '" + b + "')/"+taldea).json()
}

var zerbitzariaAPI ="zubiriapi.duckdns.org:8000";
async function zirkuitoaksartu(taldea) {
    var a = document.getElementById("id_urtea2").value;
    var b = document.getElementById("gp").value;
    var c = document.getElementById("zirkuitoa").value;
    var d = document.getElementById("id_zirkuitoa").value;
    await fetch('http://'+zerbitzariaAPI+"/insert/insert into zirkuitoak values ('" + a + "', '" + b + "', '" + c + "', '" + d + "')/"+taldea).json()
}

var zerbitzariaAPI ="zubiriapi.duckdns.org:8000";
async function sailkapenasartu(taldea) {
    var a = document.getElementById("id_zirkuitoa2").value;
    var b = document.getElementById("posizioa").value;
    var c = document.getElementById("gidaria").value;
    var d = document.getElementById("denbora").value;
    await fetch('http://'+zerbitzariaAPI+"/insert/insert into sailkapenak values ('" + a + "', '" + b + "', '" + c + "', '" + d + "')/"+taldea).json()
}
