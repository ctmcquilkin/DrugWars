var drugWars = angular.module("root", ['ngAnimate', 'ngRoute'])
    .controller('IncrementalCtrl', ['$scope', '$interval', function($scope, $interval) {
		// Basic variable declaration - keep track of how many of each
		// item we currently own, and how much the new ones should cost.
		$scope.numCash = 2000;
		$scope.numDebt = 5500;
		$scope.day = 1;
		$scope.health = 100;
		$scope.guns = 0;
	
		$scope.currentLocation = 'Bronx';
		$scope.locationCoEfficient = 1;
		$scope.drug ={ name : "Ludes", value : 25 }
	
		// Initial user drug inventory
		$scope.numShrooms = 0;
		$scope.numPCP = 0;
		$scope.numSpeed = 0;
		$scope.numLudes = 0;
		$scope.numAcid = 0;
		$scope.numWeed = 0;
		$scope.numHeroin = 0;
		$scope.numOpium = 0;
		$scope.numMDMA = 0;
		$scope.numHashish = 0;
		$scope.numPeyote = 0;
		$scope.numCocaine = 0;

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
	
		// Initial market drug prices
		$scope.shroomCost = 830;
		$scope.PCPCost = 1570;
		$scope.speedCost = 200;
		$scope.ludesCost = 25;
		$scope.acidCost = 3700;
		$scope.weedCost = 690;
		$scope.heroinCost = 10000;
		$scope.opiumCost = 870;
		$scope.mdmaCost = 4330;
		$scope.hashishCost = 1100;
		$scope.peyoteCost = 360;
		$scope.cocaineCost = 23270;

		// Prices the user paid for their inventory:
		$scope.userShroomCost = 830;
		$scope.userPCPCost = 1570;
		$scope.userSpeedCost = 200;
		$scope.userLudesCost = 25;
		$scope.userAcidCost = 3700;
		$scope.userWeedCost = 690;
		$scope.userHeroinCost = 10000;
		$scope.userOpiumCost = 870;
		$scope.userMDMACost = 4330;
		$scope.userHashishCost = 1100;
		$scope.userPeyoteCost = 360;
		$scope.userCocaineCost = 23270;
	
		$scope.newGame = function() {
					$scope.numCash = 2000;
					$scope.numDebt = 5500;
					$scope.day = 1;
					$scope.health = 100;
					$scope.guns = 0;
				
					$scope.currentLocation = 'Bronx';
					$scope.locationCoEfficient = 1;
				
					// Initial user drug inventory
					$scope.numShrooms = 0;
					$scope.numPCP = 0;
					$scope.numSpeed = 0;
					$scope.numLudes = 0;
					$scope.numAcid = 0;
					$scope.numWeed = 0;
					$scope.numHeroin = 0;
					$scope.numOpium = 0;
					$scope.numMDMA = 0;
					$scope.numHashish = 0;
					$scope.numPeyote = 0;
					$scope.numCocaine = 0;
				
					// Prices the user paid for their inventory:
					$scope.userShroomCost = 830;
					$scope.userPCPCost = 1570;
					$scope.userSpeedCost = 200;
					$scope.userLudesCost = 25;
						$scope.userAcidCost = 3700;
					$scope.userWeedCost = 690;
					$scope.userHeroinCost = 10000;
					$scope.userOpiumCost = 870;
					$scope.userMDMACost = 4330;
					$scope.userHashishCost = 1100;
					$scope.userPeyoteCost = 360;
					$scope.userCocaineCost = 23270;
				
					// Initial market drug prices
					$scope.shroomCost = 830;
					$scope.PCPCost = 1570;
					$scope.speedCost = 200;
					$scope.ludesCost = 25;
						$scope.acidCost = 3700;
					$scope.weedCost = 690;
					$scope.heroinCost = 10000;
					$scope.opiumCost = 870;
					$scope.mdmaCost = 4330;
					$scope.hashishCost = 1100;
					$scope.peyoteCost = 360;
					$scope.cocaineCost = 23270;
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
			  $scope.numShrooms--;
			}
		}
		$scope.sellPCP = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.numPCP--;
			}
		}
		$scope.sellSpeed = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.numSpeed--;
			}
		}
		$scope.sellLudes = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.numLudes--;
			}
		}
		$scope.sellAcid = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.numAcid--;
			}
		}
		$scope.sellWeed = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.numWeed--;
			}
		}
		$scope.sellHeroin = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.numHeroin--;
			}
		}
		$scope.sellOpium = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.numOpium--;
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
			  $scope.numHashish--;
			}
		}
		$scope.sellPeyote = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.numPeyote--;
			}
		}
		$scope.sellCocaine = function(total, currentPrice) {
				total = parseInt(total);
				for (var i=0; i<total; i++) {
					$scope.numCash += currentPrice;
			  $scope.numCocaine--;
			}
		}

		// Buy Function: add purchase to inventory, deduct cost, change the price
		$scope.buy = function(drug) {
			   switch (drug) {
				  case 'Shrooms':
					  $scope.userShroomCost = $scope.shroomCost; // save purchase price
					  $scope.numShrooms++; // add to inventory
					  $scope.numCash -= $scope.shroomCost; // Deduct cost
					  break;
				  case 'PCP':
					  $scope.userPCPCost = $scope.PCPCost; // save purchase price
					  $scope.numPCP++; // add to inventory
					  $scope.numCash -= $scope.PCPCost; // Deduct cost
					  break;
				  case 'Speed':
					  $scope.userSpeedCost = $scope.speedCost; // save purchase price
					  $scope.numSpeed++; // add to inventory
					  $scope.numCash -= $scope.speedCost; // Deduct cost
					  break;
				  case 'Ludes':
					  $scope.userLudesCost = $scope.ludesCost; // save purchase price
					  $scope.numLudes++; // add to inventory
					  $scope.numCash -= $scope.ludesCost; // Deduct cost
					  break;
				  case 'Acid':
					  $scope.userAcidCost = $scope.acidCost; // save purchase price
					  $scope.numAcid++; // add to inventory
					  $scope.numCash -= $scope.acidCost; // Deduct cost
					  break;
				  case 'Weed':
					  $scope.userWeedCost = $scope.weedCost; // save purchase price
					  $scope.numWeed++; // add to inventory
					  $scope.numCash -= $scope.weedCost; // Deduct cost
					  break;
				  case 'Heroin':
					  $scope.userHeroinCost = $scope.heroinCost; // save purchase price
					  $scope.numHeroin++; // add to inventory
					  $scope.numCash -= $scope.heroinCost; // Deduct cost
					  break;
				  case 'Opium':
					  $scope.userOpiumCost = $scope.opiumCost; // save purchase price
					  $scope.numOpium++; // add to inventory
					  $scope.numCash -= $scope.opiumCost; // Deduct cost
					  break;
				  case 'MDMA':
					  $scope.userMDMACost = $scope.mdmaCost; // save purchase price
					  $scope.numMDMA++; // add to inventory
					  $scope.numCash -= $scope.mdmaCost; // Deduct cost
					  break;
				  case 'Hashish':
					  $scope.userHashishCost = $scope.hashishCost; // save purchase price
					  $scope.numHashish++; // add to inventory
					  $scope.numCash -= $scope.hashishCost; // Deduct cost
					  break;
				  case 'Peyote':
					  $scope.userPeyoteCost = $scope.peyoteCost; // save purchase price
					  $scope.numPeyote++; // add to inventory
					  $scope.numCash -= $scope.peyoteCost; // Deduct cost
					  break;
				  case 'Cocaine':
					  $scope.userCocaineCost = $scope.cocaineCost; // save purchase price
					  $scope.numCocaine++; // add to inventory
					  $scope.numCash -= $scope.cocaineCost; // Deduct cost
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
				  case 'Jersey City':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 0.98;
					  $scope.selectedId = 'Jersey City';
					  $scope.toggle();
					  $scope.day++;
					  break;
				  case 'Coney Island':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.3;
					  $scope.selectedId = 'Coney Island';
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
				  case 'Manhattan':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 2.4;
					  $scope.selectedId = 'Manhattan';
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
			$scope.shroomCost = Math.ceil(830 * $scope.locationCoEfficient);
			$scope.PCPCost = Math.ceil(1570 * $scope.locationCoEfficient);
			$scope.speedCost = Math.ceil(200 * $scope.locationCoEfficient);
			$scope.ludesCost = Math.ceil(25 * $scope.locationCoEfficient);
			$scope.acidCost = Math.ceil(3700 * $scope.locationCoEfficient);
			$scope.weedCost = Math.ceil(690 * $scope.locationCoEfficient);
			$scope.heroinCost = Math.ceil(10000 * $scope.locationCoEfficient);
			$scope.opiumCost = Math.ceil(870 * $scope.locationCoEfficient);
			$scope.mdaCost = Math.ceil(4330 * $scope.locationCoEfficient);
			$scope.hashishCost = Math.ceil(1100 * $scope.locationCoEfficient);
			$scope.peyoteCost = Math.ceil(360 * $scope.locationCoEfficient);
			$scope.cocaineCost = Math.ceil(23270 * $scope.locationCoEfficient);

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
