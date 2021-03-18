
function getwinner(){
	var team1_goals = parseInt(document.getElementById("team1_goals").value);
	var team2_goals = parseInt(document.getElementById("team2_goals").value);


	var team1_players = document.getElementById("players1").value;
	var team2_players = document.getElementById("players2").value;

	var team1_players_arr = team1_players.split(' ');
	var team2_players_arr = team2_players.split(' ');

	if(team1_players_arr.length > 11 || team2_players_arr.length > 11){
		alert("The number of players in a single team cannot be more than 11");
	}

	if(team1_goals + team2_goals > 7){
		alert("The combined number of goals cannot be greater than 7");
	}

	console.log("Team 1 players:");
	team1_players_arr.forEach(function (val) {
		console.log(val);
	});

	console.log("Team 2 players:");
	team2_players_arr.forEach(function (val){
		console.log(val);
	});



	if(team1_goals > team2_goals){
		document.getElementById("win").innerHTML = "Winner is team 1";
	} else {
		document.getElementById("win").innerHTML = "Winner is team 2";
	}

	var goals_team1, goals_team2;

	
	if(team1_goals == 0){
		goals_team1 = "0";
	} else if(team1_goals == 1){
		goals_team1 = "1";
	} else if(team1_goals == 2){
		goals_team1 = "(1, 1) <br> (2)";
	} else if(team1_goals == 3){
		goals_team1 = "(1, 1, 1) <br> (1, 2) <br> (3)";
	} else if(team1_goals == 4){
		goals_team1 = "(1, 1, 1, 1) <br> (1, 1, 2) <br> (2, 2) <br> (1, 3) <br> (4)";
	} else if(team1_goals == 5){
		goals_team1 = "(1, 1, 1, 1, 1) <br> (1, 1, 1, 2) <br> (1, 2, 2) <br> (2, 3) <br> (1, 1, 3) <br> (1, 4) <br> (5)";
	} else if(team1_goals == 6){
		goals_team1 = "(1, 1, 1, 1, 1, 1) <br> (1, 5) <br> (1, 1, 4) <br> (1, 1, 1, 3) <br> (1, 1, 1, 1, 2) <br> (1, 1, 2, 2) <br> (2, 2, 2) <br> (3, 3) <br> (1, 2, 3) <br> (2, 4) <br> (6)";
	} else if(team1_goals == 7){
		goals_team1 = "(1, 1, 1, 1, 1, 1, 1) <br> (1, 1, 1, 1, 1, 2) <br> (1, 1, 1, 1, 3) <br> (1, 1, 1, 4) <br> (1, 1, 5) <br> (1, 6) <br> (2, 2, 2, 1) <br> (3, 3, 1) <br> (2, 2, 3) <br> (2, 4, 1) <br> (2, 5) <br> (3, 4) <br> (1, 1, 2, 3) <br> (7)";
	}

	if(team2_goals == 0){
		goals_team2 = "0";
	} else if(team2_goals == 1){
		goals_team2 = "1";
	} else if(team2_goals == 2){
		goals_team2 = "(1, 1) <br> (2)";
	} else if(team2_goals == 3){
		goals_team2 = "(1, 1, 1) <br> (1, 2) <br> (3)";
	} else if(team2_goals == 4){
		goals_team2 = "(1, 1, 1, 1) <br> (1, 1, 2) <br> (2, 2) <br> (1, 3) <br> (4)";
	} else if(team2_goals == 5){
		goals_team2 = "(1, 1, 1, 1, 1) <br> (1, 1, 1, 2) <br> (1, 2, 2) <br> (2, 3) <br> (1, 1, 3) <br> (1, 4) <br> (5)";
	} else if(team2_goals == 6){
		goals_team2 = "(1, 1, 1, 1, 1, 1) <br> (1, 5) <br> (1, 1, 4) <br> (1, 1, 1, 3) <br> (1, 1, 1, 1, 2) <br> (1, 1, 2, 2) <br> (2, 2, 2) <br> (3, 3) <br> (1, 2, 3) <br> (2, 4) <br> (6)";
	} else if(team2_goals == 7){
		goals_team2 = "(1, 1, 1, 1, 1, 1, 1) <br> (1, 1, 1, 1, 1, 2) <br> (1, 1, 1, 1, 3) <br> (1, 1, 1, 4) <br> (1, 1, 5) <br> (1, 6) <br> (2, 2, 2, 1) <br> (3, 3, 1) <br> (2, 2, 3) <br> (2, 4, 1) <br> (2, 5) <br> (3, 4) <br> (1, 1, 2, 3) <br> (7)";
	}
	

	document.getElementById("score1").innerHTML = goals_team1;
	document.getElementById("score2").innerHTML = goals_team2;
}
