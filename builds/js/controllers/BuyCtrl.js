drugWars.controller('BuyCtrl', ['$scope', '$interval', function($scope, $interval) {
		// initial buy radio button selection
		$scope.drugToBuy = { 
			      name : "Ludes",
			      value : 25,
			      count : $scope.user.Stats.inventoryTotal
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