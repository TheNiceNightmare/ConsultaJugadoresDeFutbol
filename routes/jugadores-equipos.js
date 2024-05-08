const express = require('express');

const router = express.Router();

const JUGADORES = [
    [
        {
            id: "1",
            jugador: "Lionel Messi",
            equipo: "Paris Saint-Germain"
        },
        {
            id: "2",
            jugador: "Cristiano Ronaldo",
            equipo: "Manchester United"
        },
        {
            id: "3",
            jugador: "Neymar Jr.",
            equipo: "Paris Saint-Germain"
        },
        {
            id: "4",
            jugador: "Kylian Mbappé",
            equipo: "Paris Saint-Germain"
        },
        {
            id: "5",
            jugador: "Robert Lewandowski",
            equipo: "Bayern Munich"
        },
        {
            id: "6",
            jugador: "Mohamed Salah",
            equipo: "Liverpool"
        },
        {
            id: "7",
            jugador: "Kevin De Bruyne",
            equipo: "Manchester City"
        },
        {
            id: "8",
            jugador: "Harry Kane",
            equipo: "Tottenham Hotspur"
        },
        {
            id: "9",
            jugador: "Erling Haaland",
            equipo: "Borussia Dortmund"
        },
        {
            id: "10",
            jugador: "Sadio Mané",
            equipo: "Liverpool"
        },
        {
            id: "11",
            jugador: "Virgil van Dijk",
            equipo: "Liverpool"
        },
        {
            id: "12",
            jugador: "Luis Suárez",
            equipo: "Atlético Madrid"
        },
        {
            id: "13",
            jugador: "Antoine Griezmann",
            equipo: "Barcelona"
        },
        {
            id: "14",
            jugador: "Sergio Ramos",
            equipo: "Paris Saint-Germain"
        },
        {
            id: "15",
            jugador: "Luka Modric",
            equipo: "Real Madrid"
        },
        {
            id: "16",
            jugador: "Eden Hazard",
            equipo: "Real Madrid"
        },
        {
            id: "17",
            jugador: "Raheem Sterling",
            equipo: "Manchester City"
        },
        {
            id: "18",
            jugador: "Jadon Sancho",
            equipo: "Manchester United"
        },
        {
            id: "19",
            jugador: "Romelu Lukaku",
            equipo: "Chelsea"
        },
        {
            id: "20",
            jugador: "Gareth Bale",
            equipo: "Real Madrid"
        }
    ]
];
    
    

router.get('/', (req, res, next)=>{
    res.json({jugadores : JUGADORES});
});

module.exports = router;

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get(':pid', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const formattedJugadores = JSON.stringify(JUGADORES, null, 2);
    res.send(formattedJugadores);
});