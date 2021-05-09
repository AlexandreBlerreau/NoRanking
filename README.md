# NoRanking
Simple API récupérant le classement de NoConsulting sur les challenges CodingGame.


## Fonctionnemenet 

NoRanking simule les appels fait sur le site CodinGame pour le classement des entreprises.

Url d'appel utilisée : (POST) :    `https://www.codingame.com/services/Leaderboards/getFilteredChallengeTeamLeaderboard`

Contenu du body :

    ["challengeName","userId",{"active":true,"column":"KEYWORD","filter":"NoConsulting"},"COMPANY","france"]

> ChallengeName : Nom du challenge définie par le site. Exemple : spring-challenge-2021
> userId : Identifiant d'un compte utilisateur CodingGame. Exemple : 91c2791a62d4a5d50707b89cfb8418102618204
> Null : Peut-être remplacé par l'indentifiant du pays : "FR"

## Lancement

    $ npm install
	$ nodemon Server.js ou $ npm start
	
    

## Consomation

Récupération du classement France :

    GET
    http://localhost:9000/spring-challenge-2021/91c2791a62d4a5d50707b89cfb8418102618204/france


Récupération du classement monde :

    GET
    http://localhost:9000/spring-challenge-2021/91c2791a62d4a5d50707b89cfb8418102618204/world


Le résultat d'appel le numéro de rang du classement.


## Améliorations

Il est possible de récupérer les membres de la société ainsi que leur classement.
Ces données sont déjà disponible dans l'appel POST.

Exemple d'un jeu de donnée :

        "users": [
    
    {
    
    "rank": 720,
    
    "league": {
    
    "divisionIndex": 2,
    
    "divisionCount": 6,
    
    "divisionAgentsCount": 4241,
    
    "openingLeaguesCount": 3,
    
    "divisionOffset": 0,
    
    "openingDate": 1620655200000
    
    },
    
    "codinGamer": {
    
    "userId": 3997903,
    
    "pseudo": "qb-rgb",
    
    "avatar": 53445524368374,
    
    "publicHandle": "47479ade04d92054b8c1db9eb2be2ecd3097993"
    
    }
    
    },
    
    {
    
    "rank": 829,
    
    "league": {
    
    "divisionIndex": 2,
    
    "divisionCount": 6,
    
    "divisionAgentsCount": 4241,
    
    "openingLeaguesCount": 3,
    
    "divisionOffset": 0,
    
    "openingDate": 1620655200000
    
    },
    
    "codinGamer": {
    
    "userId": 4028162,
    
    "pseudo": "AlexBlerr",
    
    "onlineSince": 1620487717418,
    
    "publicHandle": "91c2791a62d4a5d50707b89cfb8418102618204"
    
    }
    
    },
