var drugWars = angular.module("root", ['ngAnimate', 'ngRoute'])
    .controller('IncrementalCtrl', function($scope, $interval) {
		// Basic variable declaration - keep track of how many of each
		// item we currently own, and how much the new ones should cost.
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
		$scope.numMDA = 0;
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
		$scope.userMDACost = 4330;
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
		$scope.mdaCost = 4330;
		$scope.hashishCost = 1100;
		$scope.peyoteCost = 360;
		$scope.cocaineCost = 23270;
	
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

		// add shrooms to inventory, deduct cost, change the price
		$scope.buyShrooms = function() {
			$scope.numShrooms++;
			$scope.userShroomCost = $scope.shroomCost;

			// Deduct cost
			$scope.numCash -= $scope.shroomCost;
		}
	
		// ditto for PCP
		$scope.buyPCP = function() {
			$scope.numPCP++;

			// Deduct cost
			$scope.numCash -= $scope.PCPCost;
		}

		// ditto for Speed
		$scope.buySpeed = function() {
			$scope.numSpeed++;

			// Deduct cost
			$scope.numCash -= $scope.speedCost;
		}
	
		// ditto for Ludes
		$scope.buyLudes = function() {
			$scope.numLudes++;

			// Deduct cost
			$scope.numCash -= $scope.ludesCost;
		}
	
		// ditto for Acid
		$scope.buyAcid = function() {
			$scope.numAcid++;

			// Deduct cost
			$scope.numCash -= $scope.acidCost;
		}
	
		// ditto for Weed
		$scope.buyWeed = function() {
			$scope.numWeed++;

			// Deduct cost
			$scope.numCash -= $scope.weedCost;
		}
	
		// ditto for Heroin
		$scope.buyHeroin = function() {
			$scope.numHeroin++;

			// Deduct cost
			$scope.numCash -= $scope.heroinCost;
		}

		// ditto for Opium
		$scope.buyOpium = function() {
			$scope.numOpium++;

			// Deduct cost
			$scope.numCash -= $scope.opiumCost;
		}
	
		// ditto for MDA
		$scope.buyMDA = function() {
			$scope.numMDA++;

			// Deduct cost
			$scope.numCash -= $scope.mdaCost;
		}

		// ditto for Hashish
		$scope.buyHashish = function() {
			$scope.numHashish++;

			// Deduct cost
			$scope.numCash -= $scope.hashishCost;
		}
	
		// ditto for Peyote
		$scope.buyPeyote = function() {
			$scope.numPeyote++;

			// Deduct cost
			$scope.numCash -= $scope.peyoteCost;
		}
	
		// ditto for Cocaine
		$scope.buyCocaine = function() {
			$scope.numCocaine++;

			// Deduct cost
			$scope.numCash -= $scope.cocaineCost;
		}

			$scope.jet = function (place) {
				if ($scope.day < 31) {
			   switch (place) {
				  case 'Bronx':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.5;  // each location has a different market
					  $scope.day++;
					  break;
				  case 'Brooklyn':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.2;
					  $scope.day++;
					  break;
				  case 'Central Park':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 0.98;
					  $scope.day++;
					  break;
				  case 'Coney Island':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.3;
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  case 'Ghetto':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.llocationCoEfficient = 0.99;
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  case 'Manhattan':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.4;
					  console.log($scope.locationCoEfficient);
					  $scope.day++;
					  break;
				  default:
					  console.log("error?");
			  }
		
			} else {
				alert('game over. Debt:' + $scope.numDebt);
			}
		};

	
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
    });
