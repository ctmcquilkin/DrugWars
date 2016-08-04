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
					  if ($scope.user.inventory.Shrooms == 0) {
					  	$scope.user.inventory.Shrooms.userCost = $scope.Market.Shrooms.value; // save purchase price
					  } else {
					  	$scope.user.inventory.Shrooms.userCost = $scope.Market.Shrooms.value + $scope.Market.Shrooms.value / $scope.user.inventory.Shrooms;
					  };
					  $scope.user.inventory.Shrooms.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Shrooms.value; // Deduct cost
					  break;
				  case 'PCP':
					  if ($scope.user.inventory.PCP == 0) {
					  	$scope.user.inventory.PCP.userCost = $scope.Market.PCP.value; // save purchase price
					  } else {
					  	$scope.user.inventory.PCP.userCost = $scope.Market.PCP.value + $scope.Market.PCP.value / $scope.user.inventory.PCP;
					  };
					  $scope.user.inventory.PCP.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.PCP.value; // Deduct cost
					  break;
				  case 'Speed':
					  if ($scope.user.inventory.Speed == 0) {
					  	$scope.user.inventory.Speed.userCost = $scope.Market.Speed.value; // save purchase price
					  } else {
					  	$scope.user.inventory.Speed.userCost = $scope.Market.Speed.value + $scope.Market.Speed.value / $scope.user.inventory.Speed;
					  };
					  $scope.user.inventory.Speed.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Speed.value; // Deduct cost
					  break;
				  case 'Ludes':
					  if ($scope.user.inventory.Ludes == 0) {
					  	$scope.user.inventory.Ludes.userCost = $scope.Market.Ludes.value; // save purchase price
					  } else {
					  	$scope.user.inventory.Ludes.userCost = $scope.Market.Ludes.value + $scope.Market.Ludes.value / $scope.user.inventory.Ludes;
					  };
					  $scope.user.inventory.Ludes.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Ludes.value; // Deduct cost
					  break;
				  case 'Acid':
					  if ($scope.user.inventory.Acid == 0) {
					  	$scope.user.inventory.Acid.userCost = $scope.Market.Acid.value; // save purchase price
					  } else {
					  	$scope.user.inventory.Acid.userCost = $scope.Market.Acid.value + $scope.Market.Acid.value / $scope.user.inventory.Acid;
					  };
					  $scope.user.inventory.Acid.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Acid.value; // Deduct cost
					  break;
				  case 'Weed':
					  if ($scope.user.inventory.Weed == 0) {
					  	$scope.user.inventory.Weed.userCost = $scope.Market.Weed.value; // save purchase price
					  } else {
					  	$scope.user.inventory.Weed.userCost = $scope.Market.Weed.value + $scope.Market.Weed.value / $scope.user.inventory.Weed;
					  };
					  $scope.user.inventory.Weed.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Weed.value; // Deduct cost
					  break;
				  case 'Heroin':
					  if ($scope.user.inventory.Heroin == 0) {
					  	$scope.user.inventory.Heroin.userCost = $scope.Market.Heroin.value; // save purchase price
					  } else {
					  	$scope.user.inventory.Heroin.userCost = $scope.Market.Heroin.value + $scope.Market.Heroin.value / $scope.user.inventory.Heroin;
					  };
					  $scope.user.inventory.Heroin.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Heroin.value; // Deduct cost
					  break;
				  case 'Opium':
					  if ($scope.user.inventory.Opium == 0) {
					  	$scope.user.inventory.Opium.userCost = $scope.Market.Opium.value; // save purchase price
					  } else {
					  	$scope.user.inventory.Opium.userCost = $scope.Market.Opium.value + $scope.Market.Opium.value / $scope.user.inventory.Opium;
					  };
					  $scope.user.inventory.Opium.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Opium.value; // Deduct cost
					  break;
				  case 'MDA':
					  if ($scope.user.inventory.MDA == 0) {
					  	$scope.user.inventory.MDA.userCost = $scope.Market.MDA.value; // save purchase price
					  } else {
					  	$scope.user.inventory.MDA.userCost = $scope.Market.MDA.value + $scope.Market.MDA.value / $scope.user.inventory.MDA;
					  };
					  $scope.user.inventory.MDA.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.MDA.value; // Deduct cost
					  break;
				  case 'Hashish':
					  if ($scope.user.inventory.Hashish == 0) {
					  	$scope.user.inventory.Hashish.userCost = $scope.Market.Hashish.value; // save purchase price
					  } else {
					  	$scope.user.inventory.Hashish.userCost = $scope.Market.Hashish.value + $scope.Market.Hashish.value / $scope.user.inventory.Hashish;
					  };
					  $scope.user.inventory.Hashish.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Hashish.value; // Deduct cost
					  break;
				  case 'Peyote':
					  if ($scope.user.inventory.Peyote == 0) {
					  	$scope.user.inventory.Peyote.userCost = $scope.Market.Peyote.value; // save purchase price
					  } else {
					  	$scope.user.inventory.Peyote.userCost = $scope.Market.Peyote.value + $scope.Market.Peyote.value / $scope.user.inventory.Peyote;
					  };
					  $scope.user.inventory.Peyote.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Peyote.value; // Deduct cost
					  break;
				  case 'Cocaine':
					  if ($scope.user.inventory.Cocaine == 0) {
					  	$scope.user.inventory.Cocaine.userCost = $scope.Market.Cocaine.value; // save purchase price
					  } else {
					  	$scope.user.inventory.Cocaine.userCost = $scope.Market.Cocaine.value + $scope.Market.Cocaine.value / $scope.user.inventory.Cocaine;
					  };
					  $scope.user.inventory.Cocaine.count++; // add to inventory
					  $scope.user.Stats.numCash -= $scope.Market.Cocaine.value; // Deduct cost
					  break;
				  default:
					  console.log("unrecognized drug error");
					}
		}
    }])