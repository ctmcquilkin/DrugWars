drugWars.service('gameData', function(){
	this.Market = {
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
		this.initialUser = {
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
					             'numHealth'      : 100,
					             'numGuns'        : 0,
					             'inventoryTotal' : 0
					     }
						};
})