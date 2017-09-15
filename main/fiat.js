var fiat = {
		make: 	"Fiat",
		model: 	"500",
		year: 	"1957",
		color: 	"Medium Blue",
		passengers: 2,
		convertible: false,
		mileage: 88000,
		started: false,
		fuel: 0,
		start: function(){
			this.started = true;
			alert("Bruuuuum.....!!");
		},
		stop: function(){
			this.started = false;
			alert("...........");
		},
		drive: function(){
			if(this.started){
				if(this.fuel>0){
					alert(this.make+" "+this.model+" Zoom Zoom!");
					this.fuel--;
				}else{
					alert("Ohh ohhh, out of fuel.");
					this.stop();
				}
			}else{
				alert("You need to start the engine first.");
			}
		},
		addFuel: function(amount){
			this.fuel +=amount;
		}
};