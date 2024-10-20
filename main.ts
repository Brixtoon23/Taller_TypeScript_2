import { Serie } from './serie.js';
import { series } from './data.js';

const seriesTable: HTMLElement = document.getElementById('series-table')!;
const detailCard: HTMLElement = document.getElementById('detail-card')!; // Aquí se mostrará la tarjeta

renderSeriesTable(series);

function renderSeriesTable(seriesList: Serie[]): void {
    const tbody: HTMLElement = document.createElement('tbody');
    seriesList.forEach(serie => {
        const row: HTMLElement = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td><a href="#" class="serie-link">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;

        // Evento click para mostrar el detalle de la serie
        row.querySelector('.serie-link')!.addEventListener('click', () => {
            renderSerieDetail(serie); // Llamada para mostrar el detalle
        });

        tbody.appendChild(row);
    });

    const averageSeasons = calculateAverageSeasons(seriesList);
    const avgRow: HTMLElement = document.createElement('tr');
    avgRow.innerHTML = `<td scope="row" id="white-cell" colspan="12">Seasons average: ${averageSeasons}</td>`;
    tbody.appendChild(avgRow);

    seriesTable.appendChild(tbody);
}

// Función para calcular el promedio de temporadas
function calculateAverageSeasons(seriesList: Serie[]): number {
    const totalSeasons = seriesList.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / seriesList.length;
}

// Función para mostrar el detalle en una tarjeta de Bootstrap
function renderSerieDetail(serie: Serie): void {
    detailCard.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" class="btn btn-primary" target="_blank">More Info</a>
            </div>
        </div>
    `;
}
