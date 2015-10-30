var ans = Math.floor(100*Math.random()+1);

function process(){
	console.log("hi");
	//document.getElementbyId('input').value;
	var input = $("#input").val();
	if (input == ans){
		$("#response").html("Correct!");
	}else if (input < ans){
		$("#response").html("Wrong! Try again higher!");
	}else{
		$("#response").html("Wrong! Try again lower!");
	}
}
