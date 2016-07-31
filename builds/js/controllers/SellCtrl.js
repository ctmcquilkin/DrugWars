drugWars.controller('SellCtrl', ['$scope', '$interval', function($scope, $interval) {
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
					  };
					  break;
				  case 'Peyote':
						total = parseInt(total);
						for (var i=0; i<total; i++) {
							$scope.user.Stats.numCash += currentPrice;
					  	$scope.user.inventory.Peyote.count--;
					  };
					  break;
				  case 'Cocaine':
						total = parseInt(total);
						for (var i=0; i<total; i++) {
							$scope.user.Stats.numCash += currentPrice;
					  	$scope.user.inventory.Cocaine.count--;
					  };
					  break;
				  default:
					  console.log("unrecognized drug error");
					}
		}
}])