
	var wood = 0;
		function woodClick(number){
			wood = wood + number
			document.getElementById("wood").innerHTML = wood;
	};
	
	var stone = 0;
		function stoneClick(number2){
			stone = stone + number2
			document.getElementById("stone").innerHTML = stone;
	};

	var coins = 0;
		function sellwood1(){
			if(wood >= 1){
			coins = coins + 1
			wood = wood - 1}
			document.getElementById("coins").innerHTML = coins;
	};
		function sellstone1(){
			if(stone >= 1){
			coins = coins + 1
			stone = stone - 1}
			document.getElementById("stone").innerHTML = stone;
			document.getElementById("coins").innerHTML = coins;
	};
		function sellwood(){
			if(wood >= 1){
			coins = coins + 1
			wood = wood - 1}
			document.getElementById("coins").innerHTML = coins;
	};
	
	loadData();
	
	function saveData() {
		 localStorage.setItem("wooddata", wood);
		 localStorage.setItem("stonedata", stone);
		 localStorage.setItem("coinsdata", coins);
		 //localStorage.setItem("fooddata", food);
		 
		 localStorage.setItem("Woodcutterdata", Woodcutter);
		 //localStorage.setItem("Minerdata", Miner);
		 //localStorage.setItem("Foragerdata", Forager);
		 //localStorage.setItem("Traderdata", Trader);
		 
		 
	}
	
	function loadData() {
		if(Number(localStorage.getItem("wooddata")) == 0) saveData();
		wood = Number(localStorage.getItem("wooddata"));
		stone = Number(localStorage.getItem("stone"));
		coins = Number(localStorage.getItem("coins"));
		//food = Number(localStorage.getItem("food"));
		Woodcutter = Number(localStorage.getItem("Woodcutter"));
		//Miner = Number(localStorage.getItem("Minerdata"));
		//Forager = Number(localStorage.getItem("Foragerdata"));
		//Trader = Number(localStorage.getItem("Traderdata"));
	}
	
	window.onbeforeunload = function() {
		saveData();
	};
	
		
	
	var Woodcutter = 0;
		function buyWoodcutter(){
			var WoodcutterCost = Math.floor(10 * Math.pow(1.15,Woodcutter));     //works out the cost of this cursor
			if(coins >= WoodcutterCost){                                   //checks that the player can afford the cursor
				Woodcutter = Woodcutter + 1;                                   //increases number of Woodcutter
				coins = coins - WoodcutterCost;                          //removes the coins spent
				document.getElementById("Woodcutter").innerHTML = Woodcutter;  //updates the number of Woodcutter for the user
				document.getElementById("coins").innerHTML = coins;  //updates the number of coins for the user
    };
			var WoodcutterCost = Math.floor(10 * Math.pow(1.15,Woodcutter));       //works out the cost of the next cursor
			document.getElementById("WoodcutterCost").innerHTML = WoodcutterCost;  //updates the cursor cost for the user
	};

		function play(){
			var axeHit = document.getElementById("axeHit").innerHTML = axeHit;
			axeHit.play();
			var pickaxeHit = document.getElementById("pickaxeHit").innerHTML = pickaxeHit;
			pickaxeHit.play();
			var shopsell = document.getElementById("shopsell").innerHTML = shopsell;
			shopsell.play();
			var sharpenHit = document.getElementById("sharpen").innerHTML = sharpen;
			sharpen.play();
			}

	window.setInterval(function(){

	woodClick(Woodcutter*0.5);
	
}, 1000);
