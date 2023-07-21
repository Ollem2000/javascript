class Atleta{
	weight;
	type;
	
	constructor(weight){
		this.weight = weight
	}
	
	typeDefine(){
		if(this.weight <= 50){
			this.type = "child"
		}
		else if(this.weight <= 65){
			this.type = "teenager"
		}
		else{
			this.type = "adult"
		}
	}
}
let atleta = new Atleta

class Lutador extends Atleta{
	constructor(weight){
		super(weight)
	}
	
	typeDefine(){
		if(this.weight <= 52){
			this.type = "light"
		}
		else if(this.weight <= 60){
			this.type = "medium"
		}
		else if(this.weight <= 70){
			this.type = "heavy"
		}
		else{
			this.type = "jumbo"
		}
	}
}