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
		  MDA : { 
			      name : "MDA",
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
						     MDA : { 
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
					             'day'            : 1,
					             'numCash'        : 2000,
					             'numDebt'        : 5500,
					             'numHealth'      : 100,
					             'numTrenchcoat'  : 0,
					             'numDrugMules'   : 0,
					             'numGuns'        : 0,
					             'inventoryTotal' : 0
					     }
						};
	// Contains the messages and paths
	this.Messages = {
      Cops: {
        prompt: 'Busted! Officer Hardass and his deputies have busted you.',
        options: [{
          name: 'Run!',
          path: 'Run'
        }, {
          name: 'Fight!',
          path: 'Fight'
        }]
      },
      Run: {
        prompt: 'You can\'t run! He\'s right behind you!',
        options: [{
          name: 'Fight!',
          path: 'Fight'
        }, {
          name: 'Run!',
          path: 'exit'
        }]
      },
      exit: {
        prompt: 'You lost him.',
        options: [{
          name: 'OK',
          path: 'close'
        }]
      },
      Fight: {
        prompt: 'You shoot at the officers and die in a hail of bullets.',
        options: [{
          name: 'New Game.',
          path: 'newGame'
        }]
      },
      Mugged: {
        prompt: 'You\'ve been Mugged! They stole your drugs.',
        options: [{
          name: 'OK',
          path: 'close'
        }]
      },
      NoSpace: {
        prompt: 'You\'re out of space in your trenchcoat!',
        options: [{
          name: 'OK',
          path: 'close'
        }]
      },
      BiggerTrenchcoat: {
        prompt: 'Want to buy a bigger trenchcoat for $1300?',
        options: [{
          name: 'OK',
          path: 'PayForTrenchcoat'
        }, {
          name: 'Cancel',
          path: 'close'
        }]
      },
      DrugMule: {
        prompt: 'Hey dude, I’ll carry drugs for you for $2500?',
        options: [{
          name: 'OK',
          path: 'PayDrugMule'
        }, {
          name: 'Cancel',
          path: 'close'
        }]
      },
      FoundDrugs: {
        prompt: 'You found a stash of Cocaine!',
        options: [{
          name: 'OK',
          path: 'close'
        }]
      },
      AcidBust: {
        prompt: 'Cops made a big Acid bust! Prices are outrageous!',
        options: [{
          name: 'OK',
          path: 'close'
        }]
      },
      Opium: {
        prompt: 'Addicts are buying Opium at ridiculous prices!',
        options: [{
          name: 'OK',
          path: 'close'
        }]
      },
      WeedBust: {
        prompt: 'Cops made a big Weed bust! Prices are outrageous!',
        options: [{
          name: 'OK',
          path: 'close'
        }]
      },
      Weed: {
        prompt: 'Columbian freighter dusted the Coast Guard! Weed prices have bottomed',
        options: [{
          name: 'OK',
          path: 'close'
        }]
      },
      Ludes: {
        prompt: 'Rival drug dealers raided a pharmacy and are selling cheap Ludes!',
        options: [{
          name: 'OK',
          path: 'close'
        }]
      }
  };
})