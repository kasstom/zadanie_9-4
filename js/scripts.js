function drawTree(a) {
	for (var i = 0; i < a; i++) {
		var star='';
			for (var j = 1; j < (a - i); j++) {
				star += ' ';	
			}	
			for (var s = 0; s <= i * 2; s++) {
				star += '*';
			}
		console.log(star);
	}
}
drawTree(10);