var drugWars = angular.module("root", ['ngAnimate', 'ngRoute'])
    .controller('IncrementalCtrl', ['$scope', '$interval', function($scope, $interval) {
		// Global variables
		$scope.day = 1;
		$scope.currentLocation = 'Bronx';
		$scope.locationCoEfficient = 1;

	
		// Model for the market radio buttons and market drug prices
		$scope.Market = {
		  Shrooms : { 
			      id : 1,
			      name : "Shrooms",
			      value : 830
			      },
		  PCP : { 
			      id : 2,
			      name : "PCP",
			      value : 1570
			      },
		  Speed : { 
			      id : 3,
			      name  : "Speed",
			      value : 200
			      },
		  Ludes : { 
			      id: 4,
			      name : "Ludes",
			      value : 25
			      },
		  Acid : { 
			      id: 5,
			      name : "Acid",
			      value : 3700
			      },
		  Weed : { 
			      id : 6,
			      name : "Weed",
			      value : 690
			      },
		  Heroin : { 
			      id : 7,
			      name : "Heroin",
			      value : 10000
			      },
		  Opium : { 
			      id : 8,
			      name : "Opium",
			      value : 870
			      },
		  MDMA : { 
			      id : 9,
			      name : "MDMA",
			      value : 4330
			      },
		  Hashish : { 
			      id : 10,
			      name : "Hashish",
			      value : 1100
			      },
		  Peyote : { 
			      id : 11,
			      name : "Peyote",
			      value : 360
			      },
		  Cocaine : { 
			      id : 12,
			      name : "Cocaine",
			      value : 23270
			      },
		}
		$scope.drugToBuy = { 
			      id : 4,
			      name : "Ludes",
			      value : 25
		} // initial buy radio button selection

		// Object to keep track of how many of each item we currently own, and how much we paid.
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

    // Create copy of user data below for each game
    $scope.user = angular.copy($scope.initialUser);
	
		$scope.newGame = function() { 
					if ($scope.mapOpen) { $scope.toggle() };
					$scope.user = angular.copy($scope.initialUser);

					// Initial market drug prices
					$scope.Market.Shrooms.value = 830;
					$scope.Market.PCP.value = 1570;
					$scope.Market.Speed.value = 200;
					$scope.Market.Ludes.value = 25;
					$scope.Market.Acid.value = 3700;
					$scope.Market.Weed.value = 690;
					$scope.Market.Heroin.value = 10000;
					$scope.Market.Opium.value = 870;
					$scope.Market.mdmaCost = 4330;
					$scope.Market.hashishCost = 1100;
					$scope.Market.Peyote.value = 360;
					$scope.Market.Cocaine.value = 23270;
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
				 console.log(drug);
			   switch (drug) {
				  case 'Shrooms':
					  $scope.user.Shrooms.userShroomCost = $scope.Market.Shrooms.value; // save purchase price
					  $scope.user.Shrooms.numShrooms++; // add to inventory
					  $scope.user.numCash -= $scope.Market.Shrooms.value; // Deduct cost
					  break;
				  case 'PCP':
					  $scope.user.PCP.PCPCost = $scope.Market.PCP.value; // save purchase price
					  $scope.user.PCP.numPCP++; // add to inventory
					  $scope.user.numCash -= $scope.Market.PCP.value; // Deduct cost
					  break;
				  case 'Speed':
					  $scope.user.Speed.SpeedCost = $scope.Market.Speed.value; // save purchase price
					  $scope.user.Speed.numSpeed++; // add to inventory
					  $scope.user.numCash -= $scope.Market.Speed.value; // Deduct cost
					  break;
				  case 'Ludes':
					  $scope.user.Ludes.LudesCost = $scope.Market.Ludes.value; // save purchase price
					  $scope.user.Ludes.numLudes++; // add to inventory
					  $scope.user.numCash -= $scope.Market.Ludes.value; // Deduct cost
					  break;
				  case 'Acid':
					  $scope.user.Acid.userAcidCost = $scope.Market.Acid.value; // save purchase price
					  $scope.user.Acid.numAcid++; // add to inventory
					  $scope.user.numCash -= $scope.Market.Acid.value; // Deduct cost
					  break;
				  case 'Weed':
					  $scope.user.Weed.userWeedCost = $scope.Market.Weed.value; // save purchase price
					  $scope.user.Weed.numWeed++; // add to inventory
					  $scope.user.numCash -= $scope.Market.Weed.value; // Deduct cost
					  break;
				  case 'Heroin':
					  $scope.user.Heroin.userHeroinCost = $scope.Market.Heroin.value; // save purchase price
					  $scope.user.Heroin.numHeroin++; // add to inventory
					  $scope.user.numCash -= $scope.Market.Heroin.value; // Deduct cost
					  break;
				  case 'Opium':
					  $scope.user.Opium.userOpiumCost = $scope.Market.Opium.value; // save purchase price
					  $scope.user.Opium.numOpium++; // add to inventory
					  $scope.user.numCash -= $scope.Market.Opium.value; // Deduct cost
					  break;
				  case 'MDMA':
					  $scope.user.MDMA.userMDMACost = $scope.Market.mdmaCost; // save purchase price
					  $scope.user.MDMA.numMDMA++; // add to inventory
					  $scope.user.numCash -= $scope.Market.mdmaCost; // Deduct cost
					  break;
				  case 'Hashish':
					  $scope.user.Hashish.userHashishCost = $scope.Market.hashishCost; // save purchase price
					  $scope.user.Hashish.numHashish++; // add to inventory
					  $scope.user.numCash -= $scope.Market.hashishCost; // Deduct cost
					  break;
				  case 'Peyote':
					  $scope.user.Peyote.userPeyoteCost = $scope.Market.Peyote.value; // save purchase price
					  $scope.user.Peyote.numPeyote++; // add to inventory
					  $scope.user.numCash -= $scope.Market.Peyote.value; // Deduct cost
					  break;
				  case 'Cocaine':
					  $scope.user.Cocaine.userCocaineCost = $scope.Market.Cocaine.value; // save purchase price
					  $scope.user.Cocaine.numCocaine++; // add to inventory
					  $scope.user.numCash -= $scope.Market.Cocaine.value; // Deduct cost
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
			$scope.Market.Shrooms.value = Math.ceil(830 * $scope.locationCoEfficient); 
			$scope.Market.PCP.value = Math.ceil(1570 * $scope.locationCoEfficient);
			$scope.Market.Speed.value = Math.ceil(200 * $scope.locationCoEfficient);
			$scope.Market.Ludes.value = Math.ceil(25 * $scope.locationCoEfficient);
			$scope.Market.Acid.value = Math.ceil(3700 * $scope.locationCoEfficient);
			$scope.Market.Weed.value = Math.ceil(690 * $scope.locationCoEfficient);
			$scope.Market.Heroin.value = Math.ceil(10000 * $scope.locationCoEfficient);
			$scope.Market.Opium.value = Math.ceil(870 * $scope.locationCoEfficient);
			$scope.Market.MDMA.value = Math.ceil(4330 * $scope.locationCoEfficient);
			$scope.Market.Hashish.value = Math.ceil(1100 * $scope.locationCoEfficient);
			$scope.Market.Peyote.value = Math.ceil(360 * $scope.locationCoEfficient);
			$scope.Market.Cocaine.value = Math.ceil(23270 * $scope.locationCoEfficient);

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
