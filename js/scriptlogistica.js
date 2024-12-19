// Todas las tarjetas definidas dentro de cardsData
const cardsData = [
    {
        title: "Calendario Guardias",
        description: "Consulta el calendario de las guardias de 2025.",
        link: "./html/calendar.html",
        buttonText: "CONSULTA CALENDARIO",
        target: "_self"
    }
];

const rowsContainer = document.getElementById("rows-container");

function renderRows() {
    rowsContainer.innerHTML = "";

    for (let i = 0; i < cardsData.length; i += 3) {
        const rowCards = cardsData.slice(i, i + 3);
        createRow(rowCards);
    }
}

function createRow(cards) {
    const row = document.createElement("div");
    row.classList.add("row", "g-4");
    cards.forEach(card => {
        const cardHTML = `
            <div class="col-md-4 d-flex">
                <div class="card-flip">
                    <div class="card-flip-inner">
                        <div class="card-front">
                            <h5>${card.title}</h5>
                            <p>${card.description}</p>
                        </div>
                        <div class="card-back">
                            <a href="${card.link}" target="${card.target}" class="btn btn-secondary">${card.buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        row.insertAdjacentHTML("beforeend", cardHTML);
    });
    rowsContainer.appendChild(row);
}

renderRows();
