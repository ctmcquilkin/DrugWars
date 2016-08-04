drugWars.controller('BuyCtrl', ['$scope', '$interval', function($scope, $interval) {
		// initial buy radio button selection
		$scope.drugToBuy = { 
			      name : "Ludes",
			      value : 25,
			      count : $scope.user.Stats.inventoryTotal
		} 
		// Buy Function: add purchase to inventory, deduct cost, change the price
		$scope.buy = function(drug) {
			   var trenchcoat = 50;
			   var drugMule = 100;
			   var userMaxInventory = 100 + $scope.user.Stats.numDrugMules + $scope.user.Stats.numTrenchcoat;
			   if ($scope.user.Stats.inventoryTotal > 100) {
			   		if ($scope.user.Stats.numTrenchcoat == 0 && $scope.user.Stats.numDrugMules == 0) {
			   			$scope.display_scenario({name: null, path: NoSpace});
			   			return false;
			   		} else if ($scope.user.Stats.inventoryTotal > userMaxInventory) {
			   			$scope.display_scenario({name: null, path: NoSpace});
			   			return false;
			   		}
			   };
			   switch (drug) {
				  case 'Shrooms':
					  $scope.user.inventory.Shrooms.count++; // add to inventory
					  if ($scope.user.inventory.Shrooms.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.Shrooms.userCost = $scope.Market.Shrooms.value + $scope.user.inventory.Shrooms.userCost / $scope.user.inventory.Shrooms.count; 
					  	console.log($scope.user.inventory.Shrooms.userCost);
					  };
					  $scope.user.inventory.Shrooms.userCost = $scope.Market.Shrooms.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.Shrooms.value; // Deduct cost
					  break;
				  case 'PCP':
					  $scope.user.inventory.PCP.count++; // add to inventory
					  if ($scope.user.inventory.PCP.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.PCP.userCost = $scope.Market.PCP.value + $scope.user.inventory.PCP.userCost / $scope.user.inventory.PCP.count; 
					  };
					  $scope.user.inventory.PCP.userCost = $scope.Market.PCP.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.PCP.value; // Deduct cost
					  break;
				  case 'Speed':
					  $scope.user.inventory.Speed.count++; // add to inventory
					  if ($scope.user.inventory.Speed.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.Speed.userCost = $scope.Market.Speed.value + $scope.user.inventory.Speed.userCost / $scope.user.inventory.Speed.count; 
					  };
					  $scope.user.inventory.Speed.userCost = $scope.Market.Speed.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.Speed.value; // Deduct cost
					  break;
				  case 'Ludes':
					  $scope.user.inventory.Ludes.count++; // add to inventory
					  if ($scope.user.inventory.Ludes.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.Ludes.userCost = $scope.Market.Ludes.value + $scope.user.inventory.Ludes.userCost / $scope.user.inventory.Ludes.count; 
					  };
					  $scope.user.inventory.Ludes.userCost = $scope.Market.Ludes.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.Ludes.value; // Deduct cost
					  break;
				  case 'Acid':
					  $scope.user.inventory.Acid.count++; // add to inventory
					  if ($scope.user.inventory.Acid.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.Acid.userCost = $scope.Market.Acid.value + $scope.user.inventory.Acid.userCost / $scope.user.inventory.Acid.count; 
					  };
					  $scope.user.inventory.Acid.userCost = $scope.Market.Acid.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.Acid.value; // Deduct cost
					  break;
				  case 'Weed':
					  $scope.user.inventory.Weed.count++; // add to inventory
					  if ($scope.user.inventory.Weed.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.Weed.userCost = $scope.Market.Weed.value + $scope.user.inventory.Weed.userCost / $scope.user.inventory.Weed.count; 
					  };
					  $scope.user.inventory.Weed.userCost = $scope.Market.Weed.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.Weed.value; // Deduct cost
					  break;
				  case 'Heroin':
					  $scope.user.inventory.Heroin.count++; // add to inventory
					  if ($scope.user.inventory.Heroin.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.Heroin.userCost = $scope.Market.Heroin.value + $scope.user.inventory.Heroin.userCost / $scope.user.inventory.Heroin.count; 
					  };
					  $scope.user.inventory.Heroin.userCost = $scope.Market.Heroin.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.Heroin.value; // Deduct cost
					  break;
				  case 'Opium':
					  $scope.user.inventory.Opium.count++; // add to inventory
					  if ($scope.user.inventory.Opium.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.Opium.userCost = $scope.Market.Opium.value + $scope.user.inventory.Opium.userCost / $scope.user.inventory.Opium.count; 
					  };
					  $scope.user.inventory.Opium.userCost = $scope.Market.Opium.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.Opium.value; // Deduct cost
					  break;
				  case 'MDA':
					  $scope.user.inventory.MDA.count++; // add to inventory
					  if ($scope.user.inventory.MDA.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.MDA.userCost = $scope.Market.MDA.value + $scope.user.inventory.MDA.userCost / $scope.user.inventory.MDA.count; 
					  };
					  $scope.user.inventory.MDA.userCost = $scope.Market.MDA.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.MDA.value; // Deduct cost
					  break;
				  case 'Hashish':
					  $scope.user.inventory.Hashish.count++; // add to inventory
					  if ($scope.user.inventory.Hashish.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.Hashish.userCost = $scope.Market.Hashish.value + $scope.user.inventory.Hashish.userCost / $scope.user.inventory.Hashish.count; 
					  };
					  $scope.user.inventory.Hashish.userCost = $scope.Market.Hashish.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.Hashish.value; // Deduct cost
					  break;
				  case 'Peyote':
					  $scope.user.inventory.Peyote.count++; // add to inventory
					  if ($scope.user.inventory.Peyote.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.Peyote.userCost = $scope.Market.Peyote.value + $scope.user.inventory.Peyote.userCost / $scope.user.inventory.Peyote.count; 
					  };
					  $scope.user.inventory.Peyote.userCost = $scope.Market.Peyote.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.Peyote.value; // Deduct cost
					  break;
				  case 'Cocaine':
					  $scope.user.inventory.Cocaine.count++; // add to inventory
					  if ($scope.user.inventory.Cocaine.count > 1) { // average user cost if necessary
					  	$scope.user.inventory.Cocaine.userCost = $scope.Market.Cocaine.value + $scope.user.inventory.Cocaine.userCost / $scope.user.inventory.Cocaine.count; 
					  };
					  $scope.user.inventory.Cocaine.userCost = $scope.Market.Cocaine.value; // save purchase price
					  $scope.user.Stats.numCash -= $scope.Market.Cocaine.value; // Deduct cost
					  break;
				  default:
					  console.log("unrecognized drug error");
					}
		}
    }])