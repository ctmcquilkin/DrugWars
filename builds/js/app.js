var drugWars = angular.module('root', ['ngAnimate', 'ngRoute'])
    .controller('DrugWarsCtrl', ['$scope', '$interval', 'gameData', function($scope, $interval, gameData) {
		// Global variables
		$scope.day = 1;
		$scope.currentLocation = 'Bronx';
		$scope.locationCoEfficient = 1;
		$scope.mapOpen = false;
		$scope.message = false;

	
		// reference to model stored in a service for the market radio buttons and market drug prices
		$scope.Market = gameData.Market;
		// Object to keep track of how many of each item we currently own, and how much we paid.
		// We make a copy of it so it's easier to discard when there's a new game.
		$scope.initialUser = gameData.initialUser;

    // Create copy of user data below for each game
    $scope.user = angular.copy($scope.initialUser);
	
		$scope.newGame = function() { 
					if ($scope.mapOpen) { $scope.mapToggle() };
					$scope.user = angular.copy($scope.initialUser);
					$scope.user.Stats.inventoryTotal = 0;
					$scope.day = 1;
					// $scope.drugToSell.$setViewValue({ name  : "Nothing", value : 0, count : 0 });

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
				$scope.user.Stats.numDebt += Math.round($scope.user.Stats.numDebt * (0.1));
				if ($scope.day < 31) {
			   switch (place) {
				  case 'Bronx':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.5;  // each location has a different market
					  $scope.currentLocation = 'Bronx';
					  $scope.mapToggle();
					  $scope.day++;
					  break;
				  case 'Brooklyn':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.2;
					  $scope.currentLocation = 'Brooklyn';
					  $scope.mapToggle();
					  $scope.day++;
					  break;
				  case 'JC':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 0.98;
					  $scope.currentLocation = 'JC';
					  $scope.mapToggle();
					  $scope.day++;
					  break;
				  case 'Coney Is.':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.3;
					  $scope.currentLocation = 'Coney Is.';
					  $scope.mapToggle();
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  case 'Queens':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.llocationCoEfficient = 0.99;
					  $scope.currentLocation = 'Queens';
					  $scope.mapToggle();
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  case 'The City':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 2.4;
					  $scope.currentLocation = 'The City';
					  $scope.mapToggle();
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  case 'Shaolin':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.4;
					  $scope.currentLocation = 'Shaolin';
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

		// variable to bind sell radio buttons
		$scope.drugToSell = { 
			      name  : "Nothing",
			      value : 0,
			      count : 0
		}

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
			console.log($scope.user.Stats.numCash);
			if ($scope.user.Stats.numCash > 1000) {
				console.log($scope.user.Stats.numCash);
				$scope.user.Stats.numDebt -= 1000;
				$scope.user.Stats.numCash -= 1000;
			}
		}

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

			if ( $scope.user.Stats.numDebt < 0 ) { alert('game over you won!') };

		}, 10);
    }]);
