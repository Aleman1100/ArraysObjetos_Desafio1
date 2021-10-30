//Creacion de todos los arreglos y sus objetos.
var radiologia = [{
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9.878.782-1",
    prevision: "FONASA",
},
{
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15.345.241-3",
    prevision: "ISAPRE",
},
{
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16.445.345-9",
    prevision: "ISAPRE",
},
{
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17.666.419-0",
    prevision: "FONASA",
},
{
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14.989.389-K",
    prevision: "FONASA",
}]


var traumatologia = [{
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15.554.774-5",
    prevision: "FONASA",
},
{
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15.444.147-9",
    prevision: "ISAPRE",
},
{
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17.879.423-9",
    prevision: "ISAPRE",
},
{
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1.547.423-6",
    prevision: "ISAPRE",
},
{
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16.554.741-K",
    prevision: "FONASA",
},
{
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9.747.535-8",
    prevision: "ISAPRE",
},
{
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11.254.785-5",
    prevision: "ISAPRE",
},
]


var dental = [{
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11.123.425-6",
    prevision: "ISAPRE",
},
{
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9.878.789-2",
    prevision: "ISAPRE",
},
{
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7.998.789-5",
    prevision: "FONASA",
},
{
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18.887.662-K",
    prevision: "FONASA",
},
{
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17.665.461-4",
    prevision: "FONASA",
},
{
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14.441.281-0",
    prevision: "ISAPRE",
},
];

//Encontrar el primer y ultimo elemento de cada objeto, independiente de si se agregan o resta objetos.
document.write("Radiologia <br>");

for (var i = 0; i < radiologia.length; i++) {
    if (i == 0) {
        document.write("Primer paciente fue " + radiologia[i].paciente + " - "+ radiologia[i].prevision + " | ");
}; 
if (i == radiologia.length-1) {
    document.write("Ultimo paciente fue " + radiologia[i].paciente + " - "+ radiologia[i].prevision + " | <br>");
}
}


document.write("<br> Traumatologia <br>");

for (var i = 0; i < traumatologia.length; i++) {
    if (i == 0) {
        document.write(`Primer paciente fue ${traumatologia[i].paciente} - ${traumatologia[i].prevision} | `);
}; 
if (i == traumatologia.length-1) {
    document.write(`Ultimo paciente fue ${traumatologia[i].paciente} - ${traumatologia[i].prevision} | <br>`);
}
}


document.write("<br> Dental <br>");

for (var i = 0; i < dental.length; i++) {
    if (i == 0) {
        document.write("Primer paciente fue " + dental[i].paciente + " - "+ dental[i].prevision + " | ");
}; 
if (i == dental.length-1) {
    document.write("Ultimo paciente fue " + dental[i].paciente + " - "+ dental[i].prevision + " | <br>");
} 
}

//Inyeccion de cada tabla al HTML
var textoRadiologia = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (var i = 0; i < radiologia.length; i++) {
    textoRadiologia += `<tr>
    <td>${radiologia[i].hora}</td>
    <td>${radiologia[i].especialista}</td>
    <td>${radiologia[i].paciente}</td>
    <td>${radiologia[i].rut}</td>
    <td>${radiologia[i].prevision}</td>
    </tr>`;
};

document.getElementById("cuerpo-tabla-radiologia").innerHTML = textoRadiologia;


var textoTraumatologia = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (var i = 0; i < traumatologia.length; i++) {
    textoTraumatologia += `<tr>
    <td>${traumatologia[i].hora}</td>
    <td>${traumatologia[i].especialista}</td>
    <td>${traumatologia[i].paciente}</td>
    <td>${traumatologia[i].rut}</td>
    <td>${traumatologia[i].prevision}</td>
    </tr>`;
};

document.getElementById("cuerpo-tabla-traumatologia").innerHTML = textoTraumatologia;


var textoDental = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (var i = 0; i < dental.length; i++) {
    textoDental += `<tr>
    <td>${dental[i].hora}</td>
    <td>${dental[i].especialista}</td>
    <td>${dental[i].paciente}</td>
    <td>${dental[i].rut}</td>
    <td>${dental[i].prevision}</td>
    </tr>`;
};

document.getElementById("cuerpo-tabla-dental").innerHTML = textoDental;
