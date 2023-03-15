async function ekarriOrdua() {
    var data = await (await fetch('http://127.0.0.1:8000/items/4?q=4')).json()
    document.getElementById("ordua").innerHTML= data.item_id;
}