var drugWars = angular.module("root", ['ngAnimate', 'ngRoute'])
    .controller('IncrementalCtrl', ['$scope', '$interval', function($scope, $interval) {
		// Global variables
		$scope.day = 1;
		$scope.currentLocation = 'Bronx';
		$scope.locationCoEfficient = 1;
		$scope.drugToBuy ={ name : "Ludes", value : 25 } // initial selection
	
		// Object to keep track of how many of each tem we currently own, and how much we paid.
		// We make a copy of it so it's easier to discard when there's a new game.
		$scope.initialUser = {
	     Shrooms : { 
	             'numShrooms' : 0,
	             'userShroomCost' : 830
	     },
	     PCP : { 
	             'numPCP' : 0,
	             'userPCPCost' : 1570
	     },
	     Speed : { 
	             'numSpeed' : 0,
	             'userSpeedCost' : 200
	     },
	     Ludes : { 
	             'numLudes' : 0,
	             'userLudesCost' : 200
	     },
	     Acid : { 
	             'numAcid' : 0,
	             'userAcidCost' : 3700
	     },
	     Weed : { 
	             'numWeed' : 0,
	             'userWeedCost' : 690
	     },
	     Heroin : { 
	             'numHeroin' : 0,
	             'userHeroinCost' : 10000
	     },
	     Opium : { 
	             'numOpium' : 0,
	             'userOpiumCost' : 870
	     },
	     MDMA : { 
	             'numMDMA' : 0,
	             'userMDMACost' : 4330
	     },
	     Hashish : { 
	             'numHashish' : 0,
	             'userHashishCost' : 1100
	     },
	     Peyote : { 
	             'numPeyote' : 0,
	             'userPeyoteCost' : 360
	     },
	     Cocaine : { 
	             'numCocaine' : 0,
	             'userCocaineCost' : 23270
	     },
	     Stats : { 
	             'numCash' : 2000,
	             'numDebt' : 5500,
	             'numHealth' : 0,
	             'numGuns' : 0,
	     }
		};

		// Model for the market radio buttons and market drug prices
    $scope.Shrooms = {
      "id": 1,
      "name" : "Shrooms",
      "value": 830
    };
    $scope.PCP = {
      "id": 2,
      "name" : "PCP",
      "value": 1570
    };
    $scope.Speed = {
      "id": 3,
      "name" : "Speed",
      "value": 200
    };
    $scope.Ludes = {
      "id": 4,
      "name" : "Ludes",
      "value": 25
    };
    $scope.Acid = {
      "id": 5,
      "name" : "Acid",
      "value": 3700
    };
    $scope.Weed = {
      "id": 6,
      "name" : "Weed",
      "value": 690
    };
    $scope.Heroin = {
      "id": 7,
      "name" : "Heroin",
      "value": 10000
    };
    $scope.Opium = {
      "id": 8,
      "name" : "Opium",
      "value": 870
    };
    $scope.MDMA = {
      "id": 9,
      "name" : "MDMA",
      "value": 4330
    };
    $scope.Hashish = {
      "id": 10,
      "name" : "Hashish",
      "value": 1100
    };
    $scope.Peyote = {
      "id": 11,
      "name" : "Peyote",
      "value": 360
    };
    $scope.Cocaine = {
      "id": 12,
      "name" : "Cocaine",
      "value": 23270
    };

    // Create copy of user data below for each game
    $scope.user = angular.copy($scope.initialUser);
	
		$scope.newGame = function() { 
					if ($scope.mapOpen) { $scope.toggle() };
					$scope.user = angular.copy($scope.initialUser);

					// Initial market drug prices
					$scope.Shrooms.value = 830;
					$scope.PCP.value = 1570;
					$scope.Speed.value = 200;
					$scope.Ludes.value = 25;
						$scope.Acid.value = 3700;
					$scope.Weed.value = 690;
					$scope.Heroin.value = 10000;
					$scope.Opium.value = 870;
					$scope.mdmaCost = 4330;
					$scope.hashishCost = 1100;
					$scope.Peyote.value = 360;
					$scope.Cocaine.value = 23270;
		}

		// Decrease numCash and numDebt every time pay-debt is clicked
		$scope.payDebt = function() {
			$scope.numDebt--;
			$scope.numCash--;
		}
	
		$scope.sellShrooms = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.user.Shrooms.numShrooms--;
			}
		}
		$scope.sellPCP = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.user.PCP.numPCP--;
			}
		}
		$scope.sellSpeed = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.user.Speed.numSpeed--;
			}
		}
		$scope.sellLudes = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.user.Ludes.numLudes--;
			}
		}
		$scope.sellAcid = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.user.Acid.numAcid--;
			}
		}
		$scope.sellWeed = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.user.Weed.numWeed--;
			}
		}
		$scope.sellHeroin = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.user.Heroin.numHeroin--;
			}
		}
		$scope.sellOpium = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.user.Opium.numOpium--;
			}
		}
		$scope.sellMDA = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.numMDA--;
			}
		}
		$scope.sellHashish = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.user.Hashish.numHashish--;
			}
		}
		$scope.sellPeyote = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.user.Peyote.numPeyote--;
			}
		}
		$scope.sellCocaine = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.user.Cocaine.numCocaine--;
			}
		}

		// Buy Function: add purchase to inventory, deduct cost, change the price
		$scope.buy = function(drug) {
			   switch (drug) {
				  case 'Shrooms':
					  $scope.Shrooms.userShroomCost = $scope.Shrooms.value; // save purchase price
					  $scope.user.Shrooms.numShrooms++; // add to inventory
					  $scope.user.numCash -= $scope.Shrooms.value; // Deduct cost
					  break;
				  case 'PCP':
					  $scope.user.PCP.PCPCost = $scope.PCP.value; // save purchase price
					  $scope.user.PCP.numPCP++; // add to inventory
					  $scope.user.numCash -= $scope.PCP.value; // Deduct cost
					  break;
				  case 'Speed':
					  $scope.user.Speed.SpeedCost = $scope.Speed.value; // save purchase price
					  $scope.user.Speed.numSpeed++; // add to inventory
					  $scope.user.numCash -= $scope.Speed.value; // Deduct cost
					  break;
				  case 'Ludes':
					  $scope.user.Ludes.LudesCost = $scope.Ludes.value; // save purchase price
					  $scope.user.Ludes.numLudes++; // add to inventory
					  $scope.user.numCash -= $scope.Ludes.value; // Deduct cost
					  break;
				  case 'Acid':
					  $scope.user.Acid.userAcidCost = $scope.Acid.value; // save purchase price
					  $scope.user.Acid.numAcid++; // add to inventory
					  $scope.user.numCash -= $scope.Acid.value; // Deduct cost
					  break;
				  case 'Weed':
					  $scope.user.Weed.userWeedCost = $scope.Weed.value; // save purchase price
					  $scope.user.Weed.numWeed++; // add to inventory
					  $scope.user.numCash -= $scope.Weed.value; // Deduct cost
					  break;
				  case 'Heroin':
					  $scope.user.Heroin.userHeroinCost = $scope.Heroin.value; // save purchase price
					  $scope.user.Heroin.numHeroin++; // add to inventory
					  $scope.user.numCash -= $scope.Heroin.value; // Deduct cost
					  break;
				  case 'Opium':
					  $scope.user.Opium.userOpiumCost = $scope.Opium.value; // save purchase price
					  $scope.user.Opium.numOpium++; // add to inventory
					  $scope.user.numCash -= $scope.Opium.value; // Deduct cost
					  break;
				  case 'MDMA':
					  $scope.user.MDMA.userMDMACost = $scope.mdmaCost; // save purchase price
					  $scope.user.MDMA.numMDMA++; // add to inventory
					  $scope.user.numCash -= $scope.mdmaCost; // Deduct cost
					  break;
				  case 'Hashish':
					  $scope.user.Hashish.userHashishCost = $scope.hashishCost; // save purchase price
					  $scope.user.Hashish.numHashish++; // add to inventory
					  $scope.user.numCash -= $scope.hashishCost; // Deduct cost
					  break;
				  case 'Peyote':
					  $scope.user.Peyote.userPeyoteCost = $scope.Peyote.value; // save purchase price
					  $scope.user.Peyote.numPeyote++; // add to inventory
					  $scope.user.numCash -= $scope.Peyote.value; // Deduct cost
					  break;
				  case 'Cocaine':
					  $scope.user.Cocaine.userCocaineCost = $scope.Cocaine.value; // save purchase price
					  $scope.user.Cocaine.numCocaine++; // add to inventory
					  $scope.user.numCash -= $scope.Cocaine.value; // Deduct cost
					  break;
				  default:
					  console.log("unrecognized drug error");
					}
		}

		$scope.selectedId = 'Bronx';

			$scope.jet = function (place) {
				if ($scope.day < 31) {
			   switch (place) {
				  case 'Bronx':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.5;  // each location has a different market
					  $scope.selectedId = 'Bronx';
					  $scope.toggle();
					  $scope.day++;
					  break;
				  case 'Brooklyn':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.2;
					  $scope.selectedId = 'Brooklyn';
					  $scope.toggle();
					  $scope.day++;
					  break;
				  case 'JC':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 0.98;
					  $scope.selectedId = 'JC';
					  $scope.toggle();
					  $scope.day++;
					  break;
				  case 'Coney Is.':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.3;
					  $scope.selectedId = 'Coney Is.';
					  $scope.toggle();
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  case 'Queens':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.llocationCoEfficient = 0.99;
					  $scope.selectedId = 'Queens';
					  $scope.toggle();
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  case 'The City':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 2.4;
					  $scope.selectedId = 'The City';
					  $scope.toggle();
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  case 'Shaolin':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.4;
					  $scope.selectedId = 'Shaolin';
					  $scope.toggle();
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  default:
					  console.log("unrecognized place error");
			  }
		
			} else {
				alert('game over. Debt:' + $scope.numDebt);
			}
		};

		$scope.toggle = function() {
			$scope.mapOpen =! $scope.mapOpen;
		};
		$scope.mapOpen = false;
		$scope.message = false;
		$scope.selectedBool = true;

	
		// Run UI update code every 10ms
		$interval(function() {
		
			// Change cost of drugs based on location, using Math.ceil() to round up
			$scope.Shrooms.value = Math.ceil(830 * $scope.locationCoEfficient); 
			$scope.PCP.value = Math.ceil(1570 * $scope.locationCoEfficient);
			$scope.Speed.value = Math.ceil(200 * $scope.locationCoEfficient);
			$scope.Ludes.value = Math.ceil(25 * $scope.locationCoEfficient);
			$scope.Acid.value = Math.ceil(3700 * $scope.locationCoEfficient);
			$scope.Weed.value = Math.ceil(690 * $scope.locationCoEfficient);
			$scope.Heroin.value = Math.ceil(10000 * $scope.locationCoEfficient);
			$scope.Opium.value = Math.ceil(870 * $scope.locationCoEfficient);
			$scope.MDMA.value = Math.ceil(4330 * $scope.locationCoEfficient);
			$scope.Hashish.value = Math.ceil(1100 * $scope.locationCoEfficient);
			$scope.Peyote.value = Math.ceil(360 * $scope.locationCoEfficient);
			$scope.Cocaine.value = Math.ceil(23270 * $scope.locationCoEfficient);

		}, 10);
    }])
.directive('svgMap', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'img/Map.svg',
        link: function (scope, element, attrs) {
            
        }
    }
}]);
