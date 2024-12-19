document.addEventListener("DOMContentLoaded", function () {
    const calendarContainer = document.getElementById("calendar");
    let isLegendToggled = false; // Estado de alternancia para el clic en "Leyenda"

    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const weekdays = ["Sem.", "L", "M", "X", "J", "V", "S", "D"];

    let globalWeekNumber = 1; // Inicializar numeración de semanas

    months.forEach((month, monthIndex) => {
        const monthDiv = document.createElement("div");
        monthDiv.className = "month";

        const title = document.createElement("div");
        title.className = "month-title";
        title.textContent = month;
        monthDiv.appendChild(title);

        const grid = document.createElement("div");
        grid.className = "grid";

        // Encabezados de semana
        weekdays.forEach(day => {
            const header = document.createElement("div");
            header.className = "header";
            header.textContent = day;
            grid.appendChild(header);
        });

        const firstDay = (new Date(2025, monthIndex, 1).getDay() || 7) - 1; // Lunes como inicio
        let dayCount = 1;

        for (let week = 0; week < 6; week++) {
            let hasDays = false;
            const weekContent = document.createDocumentFragment();

            // Columna de número de semana
            const weekNumberDiv = document.createElement("div");
            weekNumberDiv.className = "day week-number";
            weekNumberDiv.textContent = globalWeekNumber;

            for (let dayOfWeek = 1; dayOfWeek <= 7; dayOfWeek++) {
                const dayDiv = document.createElement("div");
                dayDiv.className = "day";

                if (week === 0 && dayOfWeek <= firstDay) {
                    dayDiv.textContent = "";
                } else if (dayCount <= daysInMonth[monthIndex]) {
                    dayDiv.textContent = dayCount;

                    // Agregar atributos dinámicos para asociar días a nombres
                    if (
                        (monthIndex === 0 && dayCount >= 1 && dayCount <= 5) ||
                        (monthIndex === 1 && dayCount >= 17 && dayCount <= 23) ||
                        (monthIndex === 3 && dayCount >= 7 && dayCount <= 13) ||
                        (monthIndex === 4 && dayCount >= 26) ||
                        (monthIndex === 5 && dayCount === 1) ||
                        (monthIndex === 6 && dayCount >= 14 && dayCount <= 20) ||
                        (monthIndex === 8 && dayCount >= 1 && dayCount <= 7) ||
                        (monthIndex === 9 && dayCount >= 20 && dayCount <= 26) ||
                        (monthIndex === 11 && dayCount >= 8 && dayCount <= 14)
                    ) {
                        dayDiv.setAttribute("data-name", "Eva");
                    } else if (
                        (monthIndex === 0 && dayCount >= 13 && dayCount <= 19) ||
                        (monthIndex === 2 && dayCount >= 17 && dayCount <= 23) ||
                        (monthIndex === 4 && dayCount >= 5 && dayCount <= 11) ||
                        (monthIndex === 5 && dayCount >= 23 && dayCount <= 29) ||
                        (monthIndex === 7 && dayCount >= 11 && dayCount <= 17) ||
                        (monthIndex === 8 && dayCount >= 29) ||
                        (monthIndex === 9 && dayCount <= 5) ||
                        (monthIndex === 10 && dayCount >= 17 && dayCount <= 23)
                    ) {
                        dayDiv.setAttribute("data-name", "Alberto");
                    } else if (
                        (monthIndex === 0 && dayCount >= 6 && dayCount <= 12) ||
                        (monthIndex === 1 && dayCount >= 24) ||
                        (monthIndex === 2 && dayCount <= 2) ||
                        (monthIndex === 3 && dayCount >= 14 && dayCount <= 20) ||
                        (monthIndex === 5 && dayCount >= 2 && dayCount <= 8) ||
                        (monthIndex === 6 && dayCount >= 21 && dayCount <= 27) ||
                        (monthIndex === 8 && dayCount >= 8 && dayCount <= 14) ||
                        (monthIndex === 9 && dayCount >= 27) ||
                        (monthIndex === 10 && dayCount <= 2) ||
                        (monthIndex === 11 && dayCount >= 15 && dayCount <= 21)
                    ) {
                        dayDiv.setAttribute("data-name", "Beatriz");
                    } else if (
                        (monthIndex === 0 && dayCount >= 20 && dayCount <= 26) ||
                        (monthIndex === 2 && dayCount >= 10 && dayCount <= 16) ||
                        (monthIndex === 3 && dayCount >= 28) ||
                        (monthIndex === 4 && dayCount <= 4) ||
                        (monthIndex === 5 && dayCount >= 16 && dayCount <= 22) ||
                        (monthIndex === 7 && dayCount >= 4 && dayCount <= 10) ||
                        (monthIndex === 8 && dayCount >= 22 && dayCount <= 28) ||
                        (monthIndex === 10 && dayCount >= 10 && dayCount <= 16) ||
                        (monthIndex === 11 && dayCount >= 29 && dayCount <= 31)
                    ) {
                        dayDiv.setAttribute("data-name", "Sandra");
                    } else if (
                        (monthIndex === 0 && dayCount >= 27) ||
                        (monthIndex === 1 && dayCount <= 2) ||
                        (monthIndex === 2 && dayCount >= 3 && dayCount <= 9) ||
                        (monthIndex === 3 && dayCount >= 21 && dayCount <= 27) ||
                        (monthIndex === 5 && dayCount >= 9 && dayCount <= 15) ||
                        (monthIndex === 6 && dayCount >= 28) ||
                        (monthIndex === 7 && dayCount <= 3) ||
                        (monthIndex === 8 && dayCount >= 15 && dayCount <= 21) ||
                        (monthIndex === 10 && dayCount >= 3 && dayCount <= 9) ||
                        (monthIndex === 11 && dayCount >= 22 && dayCount <= 28)
                    ) {
                        dayDiv.setAttribute("data-name", "Carolina");
                    } else if (
                        (monthIndex === 1 && dayCount >= 3 && dayCount <= 9) ||
                        (monthIndex === 2 && dayCount >= 24 && dayCount <= 30) ||
                        (monthIndex === 4 && dayCount >= 12 && dayCount <= 18) ||
                        (monthIndex === 5 && dayCount >= 30) ||
                        (monthIndex === 6 && dayCount <= 6) ||
                        (monthIndex === 7 && dayCount >= 18 && dayCount <= 24) ||
                        (monthIndex === 9 && dayCount >= 6 && dayCount <= 12) ||
                        (monthIndex === 10 && dayCount >= 24 && dayCount <= 30)
                    ) {
                        dayDiv.setAttribute("data-name", "Raúl");
                    } else if (
                        (monthIndex === 1 && dayCount >= 10 && dayCount <= 16) ||
                        (monthIndex === 2 && dayCount >= 31) ||
                        (monthIndex === 3 && dayCount <= 6) ||
                        (monthIndex === 4 && dayCount >= 19 && dayCount <= 25) ||
                        (monthIndex === 6 && dayCount >= 7 && dayCount <= 13) ||
                        (monthIndex === 7 && dayCount >= 25 && dayCount <= 31) ||
                        (monthIndex === 9 && dayCount >= 13 && dayCount <= 19) ||
                        (monthIndex === 11 && dayCount >= 1 && dayCount <= 7)
                    ) {
                        dayDiv.setAttribute("data-name", "Eugenia");
                    }

                    hasDays = true;

                    if (dayOfWeek === 7) {
                        globalWeekNumber++;
                    }

                    if (dayOfWeek === 6) dayDiv.classList.add("blue"); // Sábados
                    if (dayOfWeek === 7) dayDiv.classList.add("red"); // Domingos

                    dayCount++;
                } else {
                    dayDiv.textContent = "";
                }

                weekContent.appendChild(dayDiv);
            }

            // Agregar número de semana solo si hay días válidos
            if (hasDays) {
                grid.appendChild(weekNumberDiv);
                grid.appendChild(weekContent);
            }
        }

        monthDiv.appendChild(grid);
        calendarContainer.appendChild(monthDiv);
    });

    // Asociar eventos de clic a los elementos de la leyenda
    const legendItems = document.querySelectorAll(".legend li");
    const legendTitle = document.querySelector(".legend h3");

    // Evento para el título "Leyenda" (alternar colores)
    legendTitle.addEventListener("click", () => {
        const days = document.querySelectorAll(".day");

        if (isLegendToggled) {
            // Mostrar todos los colores simultáneamente
            days.forEach(day => {
                if (day.dataset.name === "Eva") {
                    day.style.backgroundColor = "#FCD5B4"; // Color de Eva
                } else if (day.dataset.name === "Alberto") {
                    day.style.backgroundColor = "#B7DEE8"; // Color de Alberto
                } else if (day.dataset.name === "Beatriz") {
                    day.style.backgroundColor = "#E6B8B7"; // Color de Beatriz
                } else if (day.dataset.name === "Sandra") {
                    day.style.backgroundColor = "#CCC0DA"; // Color de Sandra
                } else if (day.dataset.name === "Carolina") {
                    day.style.backgroundColor = "#B8CCE4"; // Color de Carolina
                } else if (day.dataset.name === "Raúl") {
                    day.style.backgroundColor = "#D8E4BC"; // Color de Raúl
                } else if (day.dataset.name === "Eugenia") {
                    day.style.backgroundColor = "#DDD9C4"; // Color de Eugenia
                } else {
                    day.style.backgroundColor = ""; // Quitar formato para días no asignados
                }
            });
        } else {
            // Restaurar colores iniciales (sin resaltados)
            days.forEach(day => {
                day.style.backgroundColor = ""; // Elimina el color de fondo
            });
        }

        isLegendToggled = !isLegendToggled; // Cambiar el estado de alternancia
    });

    // Eventos para los nombres de la leyenda
    legendItems.forEach(item => {
        item.addEventListener("click", () => {
            const name = item.textContent.trim(); // Obtén el nombre asociado
            const days = document.querySelectorAll(".day");

            // Limpia cualquier color previo
            days.forEach(day => {
                day.style.backgroundColor = "";
            });

            // Resalta los días asociados al nombre con el color correspondiente
            days.forEach(day => {
                if (day.dataset.name === name) {
                    if (name === "Eva") {
                        day.style.backgroundColor = "#FCD5B4"; // Color de Eva
                    } else if (name === "Alberto") {
                        day.style.backgroundColor = "#B7DEE8"; // Color de Alberto
                    }  else if (name === "Beatriz") {
                        day.style.backgroundColor = "#E6B8B7"; // Color de Beatriz
                    }  else if (name === "Sandra") {
                        day.style.backgroundColor = "#CCC0DA"; // Color de Sandra
                    }  else if (name === "Carolina") {
                        day.style.backgroundColor = "#B8CCE4"; // Color de Carolina
                    }  else if (name === "Raúl") {
                        day.style.backgroundColor = "#D8E4BC"; // Color de Raúl
                    }  else if (name === "Eugenia") {
                        day.style.backgroundColor = "#DDD9C4"; // Color de Eugenia
                    }
                }
            });
        });
    });
});
