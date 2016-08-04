var drugWars = angular.module('root', ['ngAnimate', 'ngRoute'])
    .controller('DrugWarsCtrl', ['$scope', '$interval', 'gameData', function($scope, $interval, gameData) {
		$scope.currentLocation = 'Bronx';
		$scope.locationCoEfficient = 1;
		$scope.mapOpen = false;
		$scope.message = false;
    /**
    * Scope.Market is a reference to the object model delievered by the gameData service. 
    * Scope.Market is a model for the buy radio buttons and sets intial drug market prices.
    * The Scope.Market stores how many of each item the user currently owns, and how much they paid.
    * We operate on a copy of the initialUser so it's easy to discard when there's a new game.
    */
		$scope.Market = gameData.Market;
		var initialUser = gameData.initialUser;
    // We create and use a copy of the initialUser so it's easy to discard when there's a new game.
    $scope.user = angular.copy(initialUser);

    // variable to bind sell radio buttons
    $scope.drugToSell = { 
            name  : "Nothing",
            value : 0,
            count : 0
    }
	
		$scope.newGame = function() { 
					if ($scope.mapOpen) { $scope.mapToggle() };
					$scope.user = angular.copy($scope.initialUser);
					$scope.user.Stats.inventoryTotal = 0;
					$scope.currentLocation == 'Bronx';
					// $scope.drugToSell.$setViewValue({ name  : "Nothing", value : 0, count : 0 });
					// var drugToSell = angular.element(element.getElementsByClassName("drugT"));

					// Initial market drug prices
					$scope.Market.Shrooms.value = 830;
					$scope.Market.PCP.value = 1570;
					$scope.Market.Speed.value = 200;
					$scope.Market.Ludes.value = 25;
					$scope.Market.Acid.value = 3700;
					$scope.Market.Weed.value = 690;
					$scope.Market.Heroin.value = 10000;
					$scope.Market.Opium.value = 870;
					$scope.Market.MDACost = 4330;
					$scope.Market.hashishCost = 1100;
					$scope.Market.Peyote.value = 360;
					$scope.Market.Cocaine.value = 23270;
		};

    /**
    * Chosen option is an object with properties {name, path} of an object within the messages object.
    * The message object is an object that contains all the scenario messages.
    */
    $scope.display_scenario = function (chosen_option) {
      var messages = gameData.Messages
      var option_path = chosen_option.path;
      $scope.option_name = chosen_option.name;
      
      switch (chosen_option.path) {
        case 'newGame':
          $scope.newGame();
          $scope.message = false;
          console.log('newGame');
          break;
        case 'close':
          $scope.message = false;
          console.log('close');
          break;
        case 'Mugged':
          $scope.user.inventory.Shrooms.count = 0;
          $scope.user.inventory.PCP.count = 0;
          $scope.user.inventory.Speed.count = 0;
          $scope.user.inventory.Ludes.count = 0;
          $scope.user.inventory.Acid.count = 0;
          $scope.user.inventory.Weed.count = 0;
          $scope.user.inventory.Heroin.count = 0;
          $scope.user.inventory.Opium.count = 0;
          $scope.user.inventory.MDA.count = 0;
          $scope.user.inventory.Hashish.count = 0;
          $scope.user.inventory.Peyote.count = 0;
          $scope.user.inventory.Cocaine.count = 0;
          $scope.scenario = messages[option_path];
          console.log('Mugged');
          break;
        case 'FoundDrugs':
          $scope.user.inventory.Cocaine.count = 5;
          $scope.scenario = messages[option_path];
          console.log('FoundDrugs');
          break;
        case 'PayDrugMule':
          $scope.message = false;
          $scope.user.Stats.numDrugMules++;
          $scope.user.Stats.numCash -= 2500;
          console.log('PayDrugMule');
          break;
        case 'PayForTrenchcoat':
          $scope.message = false;
          $scope.user.Stats.numTrenchcoat++;
          $scope.user.Stats.numCash -= 1300;
          console.log('PayForTrenchcoat');
          break;
        default:
          $scope.scenario = messages[option_path];
      };
    };

		$scope.jet = function (place) {
        var scenarios = ['Cops', 'Mugged', 'FoundDrugs', 'BiggerTrenchcoat', 'DrugMule']; 
        var scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
        $scope.message = Boolean(Math.floor(Math.random() * 2));
        if ($scope.message) { $scope.display_scenario({name: null, path: scenario}) };
        /**
        * Scenarios is an array of the entry points of each scenario within the message object. 
        * A scenario to display is a randomly selected item from this array.
        */
				$scope.user.Stats.numDebt += Math.round($scope.user.Stats.numDebt * (0.1));
				if ($scope.user.Stats.day < 30) {
			   switch (place) {
				  case 'Bronx':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.5;  // each location has a different market
					  $scope.currentLocation = 'Bronx';
					  $scope.mapToggle();
					  $scope.user.Stats.day++;
					  break;
				  case 'Brooklyn':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.2;
					  $scope.currentLocation = 'Brooklyn';
					  $scope.mapToggle();
					  $scope.user.Stats.day++;
					  break;
				  case 'JC':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 0.98;
					  $scope.currentLocation = 'JC';
					  $scope.mapToggle();
					  $scope.user.Stats.day++;
					  break;
				  case 'Coney Is.':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.3;
					  $scope.currentLocation = 'Coney Is.';
					  $scope.mapToggle();
					  $scope.user.Stats.day++;
					  break;
				  case 'Queens':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.llocationCoEfficient = 0.99;
					  $scope.currentLocation = 'Queens';
					  $scope.mapToggle();
					  $scope.user.Stats.day++;
					  break;
				  case 'The City':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 2.4;
					  $scope.currentLocation = 'The City';
					  $scope.mapToggle();
					  $scope.user.Stats.day++;
					  break;
				  case 'Shaolin':
					  this.active = $scope.active;
					  $scope.currentLocation = place;
					  $scope.locationCoEfficient = 1.4;
					  $scope.currentLocation = 'Shaolin';
					  $scope.mapToggle();
					  $scope.user.Stats.day++;
					  break;
				  default:
					  console.log("unrecognized place error");
			  }
		
			} else {
				alert('The loan shark broke your legs. Game over. Debt:' + $scope.numDebt);
			}
		};

		$scope.mapToggle = function() {
			$scope.mapOpen =! $scope.mapOpen;
		};

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
			$scope.Market.MDA.value = Math.ceil(4330 * $scope.locationCoEfficient);
			$scope.Market.Hashish.value = Math.ceil(1100 * $scope.locationCoEfficient);
			$scope.Market.Peyote.value = Math.ceil(360 * $scope.locationCoEfficient);
			$scope.Market.Cocaine.value = Math.ceil(23270 * $scope.locationCoEfficient);
			$scope.user.Stats.inventoryTotal = $scope.totalInventory();

			if ( $scope.user.Stats.numDebt < 0 ) { alert('you won! Game over.') };

		}, 10);
    }]);
