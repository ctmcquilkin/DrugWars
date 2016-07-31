var drugWars = angular.module("root", ['ngAnimate', 'ngRoute'])
    .controller('DrugWarsCtrl', ['$scope', '$interval', function($scope, $interval) {
		// Global variables
		$scope.day = 1;
		$scope.currentLocation = 'Bronx';
		$scope.locationCoEfficient = 1;

	
		// Model for the market radio buttons and market drug prices
		$scope.Market = {
		  Shrooms : { 
			      name : "Shrooms",
			      value : 830,
			      count : 1
			      },
		  PCP : { 
			      name : "PCP",
			      value : 1570,
			      count : 1
			      },
		  Speed : { 
			      name  : "Speed",
			      value : 200,
			      count : 1
			      },
		  Ludes : { 
			      name : "Ludes",
			      value : 25,
			      count : 1
			      },
		  Acid : { 
			      name : "Acid",
			      value : 3700,
			      count : 1
			      },
		  Weed : { 
			      name : "Weed",
			      value : 690,
			      count : 1
			      },
		  Heroin : { 
			      name : "Heroin",
			      value : 10000,
			      count : 1
			      },
		  Opium : { 
			      name : "Opium",
			      value : 870,
			      count : 1
			      },
		  MDMA : { 
			      name : "MDMA",
			      value : 4330,
			      count : 1
			      },
		  Hashish : { 
			      name : "Hashish",
			      value : 1100,
			      count : 1
			      },
		  Peyote : { 
			      name : "Peyote",
			      value : 360,
			      count : 1
			      },
		  Cocaine : { 
			      name : "Cocaine",
			      value : 23270,
			      count : 1
			      },
		}

		// Object to keep track of how many of each item we currently own, and how much we paid.
		// We make a copy of it so it's easier to discard when there's a new game.
		$scope.initialUser = {
			inventory : {
		     Shrooms : { 
		             'count' : 0,
		             'userCost' : 830
		     },
		     PCP : { 
		             'count' : 0,
		             'userCost' : 1570
		     },
		     Speed : { 
		             'count' : 0,
		             'userCost' : 200
		     },
		     Ludes : { 
		             'count' : 0,
		             'userCost' : 200
		     },
		     Acid : { 
		             'count' : 0,
		             'userCost' : 3700
		     },
		     Weed : { 
		             'count' : 0,
		             'userCost' : 690
		     },
		     Heroin : { 
		             'count' : 0,
		             'userCost' : 10000
		     },
		     Opium : { 
		             'count' : 0,
		             'userCost' : 870
		     },
		     MDMA : { 
		             'count' : 0,
		             'userCost' : 4330
		     },
		     Hashish : { 
		             'count' : 0,
		             'userCost' : 1100
		     },
		     Peyote : { 
		             'count' : 0,
		             'userCost' : 360
		     },
		     Cocaine : { 
		             'count' : 0,
		             'userCost' : 23270
		     },
		   },
	     Stats : { 
	             'numCash'        : 2000,
	             'numDebt'        : 5500,
	             'numHealth'      : 0,
	             'numGuns'        : 0,
	             'inventoryTotal' : 0
	     }
		};

    // Create copy of user data below for each game
    $scope.user = angular.copy($scope.initialUser);
	
		$scope.newGame = function() { 
					if ($scope.mapOpen) { $scope.mapToggle() };
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

			$scope.jet = function (place) {
				if ($scope.day < 31) {
			   switch (place) {
				  case 'Bronx':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.5;  // each location has a different market
					  $scope.selectedId = 'Bronx';
					  $scope.mapToggle();
					  $scope.day++;
					  break;
				  case 'Brooklyn':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.2;
					  $scope.selectedId = 'Brooklyn';
					  $scope.mapToggle();
					  $scope.day++;
					  break;
				  case 'JC':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 0.98;
					  $scope.selectedId = 'JC';
					  $scope.mapToggle();
					  $scope.day++;
					  break;
				  case 'Coney Is.':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.3;
					  $scope.selectedId = 'Coney Is.';
					  $scope.mapToggle();
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  case 'Queens':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.llocationCoEfficient = 0.99;
					  $scope.selectedId = 'Queens';
					  $scope.mapToggle();
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  case 'The City':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 2.4;
					  $scope.selectedId = 'The City';
					  $scope.mapToggle();
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  case 'Shaolin':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.4;
					  $scope.selectedId = 'Shaolin';
					  $scope.mapToggle();
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

		$scope.mapToggle = function() {
			$scope.mapOpen =! $scope.mapOpen;
		};
		$scope.mapOpen = false;
		$scope.message = false;
		$scope.selectedBool = true;

		$scope.totalInventory = function() {
			total = 0;
			inventory = $scope.user.inventory;
			for (var drug in inventory) {
				total += inventory[drug].count;
			}
			return total;
		};

		// Decrease numCash and numDebt every time pay-debt is clicked
		$scope.payDebt = function() {
			$scope.numDebt--;
			$scope.user.Stats.numCash--;
		}
	
		$scope.selectedId = 'Bronx';

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
			$scope.user.Stats.inventoryTotal = $scope.totalInventory();

		}, 10);
    }])
    .controller('SellCtrl', ['$scope', '$interval', function($scope, $interval) {
		// variable to bind sell radio buttons
		$scope.drugToSell = { 
			      name  : "Nothing",
			      value : 0,
			      count : 0
		}
		$scope.sell = function(drug, total, currentPrice) {
				 	 console.log($scope.user.Stats.inventoryTotal);
				 	 $scope.drugToSell = { name  : "Nothing", value : 0, count : 0 }
				   switch (drug) {
					  case 'Shrooms':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.Shrooms.count--;
						  };
						  break;
					  case 'PCP':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.PCP.count--;
						  };
						  break;
					  case 'Speed':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.Speed.count--;
						  };
						  break;
					  case 'Ludes':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.Ludes.count--;
						  };
						  break;
					  case 'Acid':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.inveAcid.count--;
						  };
						  break;
					  case 'Weed':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.Weed.count--;
						  };
						  break;
					  case 'Heroin':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.Heroin.count--;
						  };
						  break;
					  case 'Opium':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.Opium.count--;
						  };
						  break;
					  case 'MDMA':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.MDMA.count--;
						  };
						  break;
					  case 'Hashish':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.Hashish.count--;
						  break;
					  case 'Peyote':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.Peyote.count--;
						  break;
					  case 'Cocaine':
							total = parseInt(total);
							for (var i=0; i<total; i++) {
								$scope.user.Stats.numCash += currentPrice;
						  	$scope.user.inventory.Cocaine.count--;
						  break;
					  default:
						  console.log("unrecognized drug error");
						}
			}
    }])
    .controller('BuyCtrl', ['$scope', '$interval', function($scope, $interval) {
		// initial buy radio button selection
		$scope.drugToBuy = { 
			      name : "Ludes",
			      value : 25,
			      count : $scope.user.inventory.Shrooms.count
		} 
		// Buy Function: add purchase to inventory, deduct cost, change the price
		$scope.buy = function(drug) {
				 // console.log(drug);
			   switch (drug) {
				  case 'Shrooms':
					  $scope.user.inventory.Shrooms.userCost = $scope.Market.Shrooms.value; // save purchase price
					  $scope.user.inventory.Shrooms.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Shrooms.value; // Deduct cost
					  break;
				  case 'PCP':
					  $scope.user.inventory.PCP.userCost = $scope.Market.PCP.value; // save purchase price
					  $scope.user.inventory.PCP.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.PCP.value; // Deduct cost
					  break;
				  case 'Speed':
					  $scope.user.inventory.Speed.userCost = $scope.Market.Speed.value; // save purchase price
					  $scope.user.inventory.Speed.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Speed.value; // Deduct cost
					  break;
				  case 'Ludes':
					  $scope.user.inventory.Ludes.userCost = $scope.Market.Ludes.value; // save purchase price
					  $scope.user.inventory.Ludes.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Ludes.value; // Deduct cost
					  break;
				  case 'Acid':
					  $scope.user.inventory.Acid.userCost = $scope.Market.Acid.value; // save purchase price
					  $scope.user.inventory.Acid.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Acid.value; // Deduct cost
					  break;
				  case 'Weed':
					  $scope.user.inventory.Weed.userCost = $scope.Market.Weed.value; // save purchase price
					  $scope.user.inventory.Weed.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Weed.value; // Deduct cost
					  break;
				  case 'Heroin':
					  $scope.user.inventory.Heroin.userCost = $scope.Market.Heroin.value; // save purchase price
					  $scope.user.inventory.Heroin.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Heroin.value; // Deduct cost
					  break;
				  case 'Opium':
					  $scope.user.inventory.Opium.userCost = $scope.Market.Opium.value; // save purchase price
					  $scope.user.inventory.Opium.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Opium.value; // Deduct cost
					  break;
				  case 'MDMA':
					  $scope.user.inventory.MDMA.userCost = $scope.Market.MDMA.value; // save purchase price
					  $scope.user.inventory.MDMA.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.MDMA.value; // Deduct cost
					  break;
				  case 'Hashish':
					  $scope.user.inventory.Hashish.userCost = $scope.Market.Hashish.value; // save purchase price
					  $scope.user.inventory.Hashish.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Hashish.value; // Deduct cost
					  break;
				  case 'Peyote':
					  $scope.user.inventory.Peyote.userCost = $scope.Market.Peyote.value; // save purchase price
					  $scope.user.inventory.Peyote.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Peyote.value; // Deduct cost
					  break;
				  case 'Cocaine':
					  $scope.user.inventory.Cocaine.userCost = $scope.Market.Cocaine.value; // save purchase price
					  $scope.user.inventory.Cocaine.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Cocaine.value; // Deduct cost
					  break;
				  default:
					  console.log("unrecognized drug error");
					}
		}
    }])
.directive('svgMap', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'img/Map.svg',
        link: function (scope, element, attrs) {
            
        }
    }
}]);
