class GameEngine {
	constructor(scores){	
	}
	
	getScore(){
		this.score = []
		for(let i = 0; i < scores.length; i++){
			if(this.scores[i] <= 0){
				return 0;
			} else {
				return this.scores[i]
			}

		}
		return scores;
	}	

}

