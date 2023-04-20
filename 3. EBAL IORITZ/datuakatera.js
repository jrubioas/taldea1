var zerbitzariaAPI ="zubiriapi.duckdns.org:8000";
async function lortuDatuak(taldea,selekta) {
    var data = await (await fetch('http://'+zerbitzariaAPI+'/select/'+selekta+'/'+taldea)).json()
    marraztuTaula(data)
}
async function lortuDatuak2(taldea,selekta) {
    var data = await (await fetch('http://'+zerbitzariaAPI+'/select/'+selekta+'/'+taldea)).json()
    marraztuTaula2(data)
}
async function lortuDatuak3(taldea,selekta) {
    var data = await (await fetch('http://'+zerbitzariaAPI+'/select/'+selekta+'/'+taldea)).json()
    marraztuTaula3(data)
}
function marraztuTaula (datuak) {
       $('#table').DataTable({
    	  data: datuak,
    	columns: [
        { data: 'urtea' },
        { data: 'id_urtea' }
    ],
    "pageLength": 5
   });
}
function marraztuTaula2 (datuak) {
        $('#table2').DataTable({
           data: datuak,
        columns: [
        { data: 'id_urtea' },
        { data: 'gp' },
        { data: 'zirkuitoa' },
        { data: 'id_gp' }
    ],
    "pageLength": 5
    });
}
function marraztuTaula3 (datuak) {
    $('#table3').DataTable({
       data: datuak,
    columns: [
     { data: 'id_gp' },
     { data: 'posizioa' },
     { data: 'gidaria' },
     { data: 'denbora' }
 ],
 "pageLength": 5
});
}
function selektaEraiki(){
    var sql= "select * "
    sql += "from urteak";
    return sql;
   }
function selektaEraiki2(){
    var sql= "select * "
    sql += "from zirkuitoak";
    return sql;
   }
function selektaEraiki3(){
    var sql= "select * "
    sql += "from sailkapenak";
    return sql;
   }