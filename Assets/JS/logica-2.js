$(document).ready(function () {

    $("button").click(function () {
        var diginame = $("#digimon-name").val();
        fetch('https://digimon-api.vercel.app/api/digimon/name/' + diginame)
            .then(response => response.json())
            .then(datos => {
                card(datos)
            });
    })

    function card(datos) {
        var showdigi = document.querySelector("#show-digimon");
        showdigi.innerHTML = ""
        for (let digimon of datos) {
            showdigi.innerHTML += `
                <img src="${digimon.img}" alt="${digimon.name}">
                <h5>${digimon.name}</h5>
                <p>${digimon.level}</p>
                `
        }
    }

    $("form").submit(function (event) {
        event.preventDefault();
    });

    var content = document.querySelector("#table-content");
    var diginumber = 1;

    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(datos => {
            tabla(datos)
        });

    function tabla(datos) {
        content.innerHTML = ""
        for (let digimon of datos) {
            content.innerHTML += `
            <tr>
            <th scope="row">${diginumber}</ th>
            <td>${digimon.name}</td>
            <td>${digimon.level}</td>
            <td><img src="${digimon.img}" alt="${digimon.name}"></td>
            </tr>
            `
            diginumber++;
        }
    }

    $("#show-digimon").mouseenter(function () {
        $("#show-digimon").css("background-color", "greenyellow").css("color", "white");
    });

    $("#show-digimon").mouseout(function () {
        $("#show-digimon").css("background-color", "white").css("color", "black");
    })


});
