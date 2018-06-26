// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];
planets.reverse();

var sel = document.getElementById('planets');

planets.forEach(function(value) {
    var opt = document.createElement('option');
    opt.innerHTML = value[0];
    sel.appendChild(opt);
});

function calculateWeight() {
    var userWeight = document.getElementById('user-weight').value;
    var selectedPlanet = document.getElementById('planets').selectedIndex;
    var gravity = planets[selectedPlanet][1];
    return userWeight * gravity;
};

function handleClickEvent() {
    var planetName = document.getElementById('planets').value;
    var result = calculateWeight();
    document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
};