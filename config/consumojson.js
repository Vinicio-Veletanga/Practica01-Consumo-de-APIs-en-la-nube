
var peticionhttp = new XMLHttpRequest()
var detalle = "";
function cargarnews() {

    peticionhttp.open('GET', 'https://newsapi.org/v2/everything?q=tesla&from=2021-03-13&sortBy=publishedAt&apiKey=fc898bd0cab146dfa8402a3578a6899b', true)
    peticionhttp.onload = function () {
        var valores = JSON.parse(peticionhttp.response).articles
        valores.forEach(datos => {
            console.log(datos)
            detalle += "<tr>" +
                "<td>" + datos.author + "</td><br>" +
                "<td>" + datos.title + "</td><br>" +
                "<td><a href=" + datos.url + ">" + datos.url + "</a></td><br>" +
                "<td><img src=" + datos.urlToImage + " width='500' height='600'></td > <br>" + "</tr>";

        });
        document.getElementById("tabladetalles").innerHTML = detalle;
    }

    peticionhttp.send()
}




