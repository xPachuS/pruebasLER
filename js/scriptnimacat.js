// Data for cards
const cardsData = [
    { title: "Andalusia", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://www.juntadeandalucia.es/medioambiente/sira-buscador-publico/' target='_blank'>aquí</a>.", modalId: "modal1", iframeSrc: "https://www.juntadeandalucia.es/medioambiente/sira-buscador-publico/", backgroundImage: "../img/andalucia.jpg" },
    { title: "Aragó", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://aplicaciones2.aragon.es/pdr/pdr_pub/residuos/informacionAmbiental/busquedaNimas' target='_blank'>aquí</a>.", modalId: "modal2", iframeSrc: "https://aplicaciones2.aragon.es/pdr/pdr_pub/residuos/informacionAmbiental/busquedaNimas", backgroundImage: "../img/aragon.jpg" },
    { title: "Principat d'Astúries", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://www.medioambiente.asturias.org/IASERVICIORESIDUOS/Buscar/BuscarInstalacion' target='_blank'>aquí</a>.", modalId: "modal3", iframeSrc: "https://www.medioambiente.asturias.org/IASERVICIORESIDUOS/Buscar/BuscarInstalacion", backgroundImage: "../img/asturias.jpg"  },
    { title: "Cantàbria", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://siacan.cantabria.es/siacan/publico/PrepareBuscadorEmpresasGestoresView.do' target='_blank'>aquí</a>.", modalId: "modal4", iframeSrc: "https://siacan.cantabria.es/siacan/publico/PrepareBuscadorEmpresasGestoresView.do", backgroundImage: "../img/cantabria.jpg"  },
    { title: "Castella i Lleó", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://servicios.jcyl.es/gaser/verFrmBuscadorGestores.action' target='_blank'>aquí</a>.", modalId: "modal5", iframeSrc: "https://servicios.jcyl.es/gaser/verFrmBuscadorGestores.action", backgroundImage: "../img/cyl.jpg"  },
    { title: "Castella-La Manxa", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://ireno.castillalamancha.es/forms/geref000.htm' target='_blank'>aquí</a>.", modalId: "modal6", iframeSrc: "https://ireno.castillalamancha.es/forms/geref000.htm", backgroundImage: "../img/clm.jpg"  },
    { title: "Catalunya", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://sdr.arc.cat/modemp/ListGestors.do' target='_blank'>aquí</a>.", modalId: "modal7", iframeSrc: "https://sdr.arc.cat/modemp/ListGestors.do", backgroundImage: "../img/catalunya.jpg"  },
    { title: "Comunitat<br>de Madrid", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://gestiona.comunidad.madrid/pcea_nima_web/html/web/InicioAccion.icm' target='_blank'>aquí</a>.", modalId: "modal8", iframeSrc: "https://gestiona.comunidad.madrid/pcea_nima_web/html/web/InicioAccion.icm", backgroundImage: "../img/madrid.jpg"  },
    { title: "Comunitat<br>Valenciana", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://residuos.gva.es/res_buscaweb/buscador_residuos_avanzado.aspx' target='_blank'>aquí</a>.", modalId: "modal9", iframeSrc: "https://residuos.gva.es/res_buscaweb/buscador_residuos_avanzado.aspx", backgroundImage: "../img/valenciana.jpg"  },
    { title: "Extremadura", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='http://extremambiente.juntaex.es/index.php?option=com_content&id=2563' target='_blank'>aquí</a>.", modalId: "modal10", iframeSrc: "http://extremambiente.juntaex.es/index.php?option=com_content&id=2563", backgroundImage: "../img/extremadura.jpg"  },
    { title: "Galícia", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://sirga.xunta.gal/nima' target='_blank'>aquí</a>.", modalId: "modal11", iframeSrc: "https://sirga.xunta.gal/nima", backgroundImage: "../img/galicia.jpg"  },
    { title: "Illes Balears", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://residus.caib.es/www/regpig/' target='_blank'>aquí</a>.", modalId: "modal12", iframeSrc: "https://residus.caib.es/www/regpig/", backgroundImage: "../img/baleares.jpg"  },
    { title: "Illes Canàries", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://www.gobiernodecanarias.org/medioambiente/materias/residuos/registro-de-produccion/buscador-de-productores/' target='_blank'>aquí</a>.", modalId: "modal13", iframeSrc: " ", backgroundImage: "../img/canarias.jpg"  },
    { title: "La Rioja", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://www.larioja.org/medio-ambiente/es/residuos/buscador-nimas' target='_blank'>aquí</a>.", modalId: "modal14", iframeSrc: "https://www.larioja.org/medio-ambiente/es/residuos/buscador-nimas", backgroundImage: "../img/larioja.jpg"  },
    { title: "Melilla", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://www.melilla.es/melillaportal/contenedor.jsp?seccion=s_fdes_d4_v1.jsp&contenido=25815&nivel=1400&tipo=6&codResi=1&language=es&codMenu=705&codMenuPN=601&codMenuSN=8' target='_blank'>aquí</a>.", modalId: "modal15", iframeSrc: "https://www.melilla.es/melillaportal/contenedor.jsp?seccion=s_fdes_d4_v1.jsp&contenido=25815&nivel=1400&tipo=6&codResi=1&language=es&codMenu=705&codMenuPN=601&codMenuSN=8", backgroundImage: "../img/melilla.jpg"  },
    { title: "Regió de Múrcia", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://caamext.carm.es/calaweb/faces/faces/vista/seleccionNima.jsp' target='_blank'>aquí</a>.", modalId: "modal16", iframeSrc: "https://caamext.carm.es/calaweb/faces/faces/vista/seleccionNima.jsp", backgroundImage: "../img/murcia.jpg"  },
    { title: "Navarra", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://extra.navarra.es/InformacionPublicaPRTR/RPGR.html#/PGR' target='_blank'>aquí</a>.", modalId: "modal17", iframeSrc: "https://extra.navarra.es/InformacionPublicaPRTR/RPGR.html#/PGR", backgroundImage: "../img/navarra.jpg"  },
    { title: "País Basc", description: "En cas que el botó 'Consulteu NIMA' no funcioni, si us plau, premeu <a href='https://www.euskadi.eus/informacion/registro-de-produccion-y-gestion-de-residuos/web01-a2inghon/es/' target='_blank'>aquí</a>.", modalId: "modal18", iframeSrc: "https://www.euskadi.eus/informacion/registro-de-produccion-y-gestion-de-residuos/web01-a2inghon/es/", backgroundImage: "../img/paisvasco.jpg"  },
];

const cardsContainer = document.getElementById("cards-container");
const modalsContainer = document.getElementById("modals-container");

let currentRow;

// Generate cards and modals
cardsData.forEach((card, index) => {
    if (index % 3 === 0) {
        currentRow = document.createElement('div');
        currentRow.className = 'row';
        cardsContainer.appendChild(currentRow);
    }

    const uniqueId = `${card.modalId}_${index}`;
    currentRow.innerHTML += `
        <div class="col-md-4">
            <div class="card-flip">
                <div class="card-flip-inner">
                    <div class="card-front" style="background-image: url('${card.backgroundImage}');">
                        <h5 class="card-title">${card.title}</h5>
                    </div>
                    <div class="card-back">
                        <p>${card.description}</p>
                        <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#${uniqueId}">CONSULTEU NIMA</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    modalsContainer.innerHTML += `
        <div class="modal fade" id="${uniqueId}" tabindex="-1" aria-labelledby="${uniqueId}Label" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${uniqueId}Label">${card.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </div>
                    <div class="modal-body">
                        <iframe src="${card.iframeSrc}" width="100%" height="500px"></iframe>
                    </div>
                </div>
            </div>
        </div>
    `;
});
