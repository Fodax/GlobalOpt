window.addEventListener('DOMContentLoaded', () => {
	const slider = tns({
		container: '.reviews__carousel',
		items: 3,
		startIndex: 1,
		speed: 600,
		loop: false,
		fixedWidth: 250,
		rewind: true,
		center: true,
		controls: false,
		nav: false,
		touch: false,
		mouseDrag: false,
		navPosition: 'bottom',
		responsive: {
			769: {
				fixedWidth: 601,
			},
			577: {
				fixedWidth: 550,
			}
		}
	});
	
	let index = 1;
	slider.goTo(index);
	
	document.querySelector('.prev-btn').addEventListener('click', function() {
		index--;
		if (index < 0) index = 2;
		slider.goTo(index);
		activeSlide();
	});
	
	document.querySelector('.next-btn').addEventListener('click', function() {
		index++;
		if (index > 2) index = 0;
		slider.goTo(index);
		activeSlide();
	});
	
	function activeSlide() {
		var info = slider.getInfo(),
		indexPrev = info.indexCached,
		indexCurrent = info.index;
	
		// update style based on index
		info.slideItems[indexPrev].classList.remove('active');
		info.slideItems[indexCurrent].classList.add('active');
	
		if (indexCurrent == 0) {
			info.slideItems[1].classList.remove('left-slide');
			info.slideItems[1].classList.add('right-slide');
			info.slideItems[indexCurrent].classList.remove('left-slide');
		} else if (indexCurrent == 1) {
			info.slideItems[0].classList.add('left-slide');
			info.slideItems[2].classList.add('right-slide');
			info.slideItems[indexCurrent].classList.remove('left-slide');
			info.slideItems[indexCurrent].classList.remove('right-slide');
		} else {
			info.slideItems[1].classList.remove('right-slide');
			info.slideItems[1].classList.add('left-slide');
			info.slideItems[indexCurrent].classList.remove('right-slide');
		} 
	}

	//smooth scroll
	const links = document.querySelectorAll('a[data-smooth]');

	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			const href = e.target.href;
			const className = '.' + href.slice(href.indexOf('#') + 1);
			const top = document.querySelector(className).offsetTop;
			window.scrollTo({top: top, behavior: 'smooth'});
		});
	});
});