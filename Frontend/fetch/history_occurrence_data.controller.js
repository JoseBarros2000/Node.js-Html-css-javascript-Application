let goBack = document.getElementById("goBack");
goBack.addEventListener("click", goBackFunction)


function goBackFunction() {
    if (localStorage.getItem('operationalSelected') == undefined) {
        window.location.replace('../html/HistoricoOcorrencias.html')
    }
    else {
         if(localStorage.getItem('perfiloccurrence')==undefined){
        window.location.replace('../html/HistoricoOcorrencias.html')
        }
        else{
              window.location.replace('../html/PerfilOcorrencias.html')
        }
    }
}

function fillTeam() {
    fetch('https://bdc5dcf6bca04b39ab10a706cdb79f29.vfs.cloud9.us-east-1.amazonaws.com/occurrences/' + localStorage.id_occurrence + '/evaluations/')
        .then(res => res.json())
        .then((out) => {
            let screen = document.getElementById("divTeam");
            let txt = "";
            let count = 0;
            $.each(out, function(index, value) {
                if (value.statute === "chefe") {
                    document.getElementById('tipo').innerHTML = " " + value.occurrence_type;
                    document.getElementById('local').innerHTML = " " + value.local;
                    if (value.cost == null) {
                        document.getElementById('cost').innerHTML = " Sem informação.";
                    }
                    else {
                        document.getElementById('cost').innerHTML = " " + value.cost;
                    }
                    document.getElementById('departure').innerHTML = " " + value.departure.slice(11, 19);;
                    document.getElementById('arrival').innerHTML = " " + value.arrival.slice(11, 19);
                    txt += '<div class="accordion" id="accordionSection' + count + '">  <div class="accordion-item mb-3"> <h2><button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse' + count + '"><img id="historyDataAvatar" src="'+ value.avatar+'"/>' + value.name + "- " + '<strong>' + " " + ' Responsável</strong></button></h2>';
                    txt += '<div class="accordion-collapse collapse" id="collapse' + count + '" data-bs-parent="#accordionSection' + count + '">';
                    txt += '<div class="accordion-body"> <i class="fas fa-user"></i><strong> ID:</strong> #' + value.id_operational + '<br> <i class="fas fa-fire-extinguisher"></i><strong> Especialidade:</strong> ' + value.speciality + '<br>';
                    txt += '<i class="fas fa-phone"></i><strong> Contacto:</strong><a href="tel:'+value.phone_number+'">' + value.phone_number + '</a> <br>';
                    txt += '<i class="fas fa-star"></i><strong> Pontuação:</strong> ' + value.points + '<br> </div>  </div>  </div> </div>'
                    count++;
                }
                else {
                    document.getElementById('tipo').innerHTML = " " + value.occurrence_type;
                    document.getElementById('local').innerHTML = " " + value.local;
                    if (value.cost == null) {
                        document.getElementById('cost').innerHTML = " Sem informação.";
                    }
                    else {
                        document.getElementById('cost').innerHTML = " " + value.cost;
                    }
                    document.getElementById('departure').innerHTML = " " + value.departure.slice(11, 19);;
                    document.getElementById('arrival').innerHTML = " " + value.arrival.slice(11, 19);;
                    txt += '<div class="accordion" id="accordionSection' + count + '">  <div class="accordion-item mb-3"> <h2><button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse' + count + '"><img id="historyDataAvatar" src="'+ value.avatar+'"/>'+ value.name + '</button></h2>';
                    txt += '<div class="accordion-collapse collapse" id="collapse' + count + '" data-bs-parent="#accordionSection' + count + '">';
                    txt += '<div class="accordion-body"> <i class="fas fa-user"></i><strong> ID:</strong> #' + value.id_operational + '<br> <i class="fas fa-phone"></i><strong> Contacto:</strong> <a href="tel:'+value.phone_number+'">' + value.phone_number + '</a><br>';
                    txt += '<i class="fas fa-fire-extinguisher"></i><strong> Tipo de Operacional:</strong> ' + value.operational_type + '<br>';
                    txt += '<i class="fas fa-star"></i><strong> Pontuação:</strong> ' + value.points + '<br> </div>  </div>  </div> </div>'
                    count++;
                }
            });
            screen.innerHTML += txt;
        }).catch(err => console.error(err));
}

$(document).ready(function() {
    fillTeam();
})
