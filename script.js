let showTimer = document.querySelector(".hours");
let showDate = document.querySelector(".date");

let affichageHeure = function () {
  let today,
    annee,
    listeMois,
    mois,
    listeJours,
    jourNumero,
    JourNom,
    heures,
    minutes,
    secondes,
    heuresDeuxChiffres; // Je déclare mes variables

  today = new Date(); // j'instancie l'objet Date

  annee = today.getFullYear();

  listeMois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ]; // Je crée un tableau des mois

  mois = listeMois[today.getMonth()]; // Je récupère le mois

  listeJours = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  jourNumero = today.getDate();

  JourNom = listeJours[today.getDay()];

  heuresDeuxChiffres = function (key) {
    if (key < 10) {
      return (key = "0" + key);
    } else {
      return (key = key);
    }
  };

  heures = heuresDeuxChiffres(today.getHours());
  minutes = heuresDeuxChiffres(today.getMinutes());
  secondes = heuresDeuxChiffres(today.getSeconds());

  showTimer.textContent = heures + " : " + minutes + " : " + secondes;

  showDate.textContent =
    "Nous sommes le " + JourNom + " " + jourNumero + " " + mois + " " + annee;

  setTimeout(affichageHeure, 1000);
};
affichageHeure();
