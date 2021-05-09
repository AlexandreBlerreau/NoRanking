/** Express Server | NoRanking. */

/** Modules. */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const axios = require('axios')

/** Express server configuration */
const port = 9000;
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header('Access-Control-Allow-Methods', 'GET,POST');
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,    Content-Type, Accept");
next();
});

const url = "https://www.codingame.com/services/Leaderboards/getFilteredChallengeTeamLeaderboard";
const jsonBody  = `["challengeName","userId",{"active":true,"column":"KEYWORD","filter":"NoConsulting"},"COMPANY",null]`;

/** Getting France rank. */
app.get('/:challengeName/:userId/france', async function(req,res){

   let body = jsonBody.replace("challengeName",req.params.challengeName);
   body = body.replace("userId",req.params.userId);
   body = body.replace("null","FR");

   res.send( await getRanking(url,body));
});

/** Getting world rank. */
app.get('/:challengeName/:userId/world', async function(req,res){

    let body = jsonBody.replace("challengeName",req.params.challengeName);
    body = body.replace("userId",req.params.userId);
   
    res.send( await getRanking(url,body));
});


/** Make post request to Condingame to get the current rank. */
async function getRanking(url,body){
    let rank = "Unknown rank | Server or API Error : see node logs.";
    
    await axios
    .post(url,
    body,
     {
        headers: { 'Content-Type': 'text/plain' }
    })
   
    .then(result => {
      console.log(`statusCode: ${result.statusCode}`)
      console.log(result.data);
      rank = `${result.data.codingamerTeamRank.rank}`;
    })
    .catch(error => { 
      console.error(error)
    })
    return rank;
}


app.listen(port);
console.log(`Server started on port: ${port}`);
