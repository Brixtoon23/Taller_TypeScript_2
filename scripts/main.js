import { series } from './data.js';
var seriesTable = document.getElementById('series-table');
var detailCard = document.getElementById('detail-card'); // Aquí se mostrará la tarjeta
renderSeriesTable(series);
function renderSeriesTable(seriesList) {
    var tbody = document.createElement('tbody');
    seriesList.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <th scope=\"row\">".concat(serie.id, "</th>\n            <td><a href=\"#\" class=\"serie-link\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        // Evento click para mostrar el detalle de la serie
        row.querySelector('.serie-link').addEventListener('click', function () {
            renderSerieDetail(serie); // Llamada para mostrar el detalle
        });
        tbody.appendChild(row);
    });
    var averageSeasons = calculateAverageSeasons(seriesList);
    var avgRow = document.createElement('tr');
    avgRow.innerHTML = "<td scope=\"row\" id=\"white-cell\" colspan=\"12\">Seasons average: ".concat(averageSeasons, "</td>");
    tbody.appendChild(avgRow);
    seriesTable.appendChild(tbody);
}
// Función para calcular el promedio de temporadas
function calculateAverageSeasons(seriesList) {
    var totalSeasons = seriesList.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    return totalSeasons / seriesList.length;
}
// Función para mostrar el detalle en una tarjeta de Bootstrap
function renderSerieDetail(serie) {
    detailCard.innerHTML = "\n        <div class=\"card\" style=\"width: 18rem;\">\n            <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                <p class=\"card-text\">").concat(serie.description, "</p>\n                <a href=\"").concat(serie.link, "\" class=\"btn btn-primary\" target=\"_blank\">More Info</a>\n            </div>\n        </div>\n    ");
}
