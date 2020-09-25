const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
let check = [];

function addKey(keyCode) {
	check.push(keyCode)
}

function validate() {
	return check.map((val, i) => konamiCode[i] === val ? true : false);
}

function randomNumber(){
	return parseInt(Math.random() * (5 - 1) + 1);
}

function randomize(one, two, three, four){
	switch(randomNumber()){
		case 1:
			return one;

		case 2:
			return two;

		case 3:
			return three;

		case 4:
			return four;
	}
}

function showMario() {
	check = [];
	
	const mario = document.getElementById('mario-wrapper');
	mario.style.display = 'flex'
	
	//Bullet Animation
	const gravity = document.getElementById('gravity'); 
	const array = new Array(120).fill(1);

	let duration = randomize(1000, 2000, 3000, 3500);

	array.map((val, index) => {
		let bullet = document.createElement('div');

		let offset = parseInt(Math.random() * (600 - 10) + 10);
		let offsety = parseInt(Math.random() * (600 - 10) + 10);

		bullet.className = randomize(
			'bullet bullet-blue',
			'bullet bullet-red',
			'bullet bullet-brown',
			'bullet bullet-skin'
		)
		
			
		switch(randomNumber()){
			case 1:
				operatorx =''
				operatory =''
				break;

			case 2:
				operatorx ='-'
				operatory =''
				break;

			case 3:
				operatorx =''
				operatory ='-'
				break;

			case 4:
				operatorx ='-'
				operatory ='-'
				break;
		}



		bullet.animate([ // keyframes
			{
				transform: 'translatex(' + operatorx + offset + 'px) translatey(' + operatory + offsety + 'px)',
				width: '10px',
				height: '10px',
			}, 
			{
				transform: 'translateX(-5px) translateY(-5px)',
				width: '10px',
				height: '10px',
			}
		], {
			duration: duration,
			iterations: 1
		});

		gravity.appendChild(bullet);
	})

	mario.addEventListener('click', event => {
		mario.style.display = 'none'
	})
}


let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
		button.addEventListener('click', event => {
			addKey(parseInt(event.path[0].dataset.key))
			const isUnvalid = validate().includes(false);
			
			if(isUnvalid){
				check = [];
			}

			if(check.length === konamiCode.length && !isUnvalid){
				showMario();
			}
		});
	})


window.addEventListener('keydown', function(event){
  const validKeyDown = document.querySelector(`button[data-key="${event.keyCode}"]`);

	if(!!validKeyDown){
		addKey(event.keyCode)
	} else {
		check = [];
	}
	
	const isUnvalid = validate().includes(false);
	
	if(isUnvalid){
		check = [];
	}
	 
	if(check.length === konamiCode.length && !isUnvalid){
		showMario();
	}
});



