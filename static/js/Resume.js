const links = document.querySelectorAll('ul > li');
var prevLink = links[0];
var prevActiveDiv = document.querySelector(links[0].children[1].attributes.href.value);
console.log(links[0].children[1].attributes.href.value);
let widthWindow = window.outerWidth;
console.log(widthWindow)
function smoothscroll(target,duration) {
	var target = document.querySelector(target);
	var targetPosition = target.offsetTop;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition + 800;
	var startTime = null
	function animation(currentTime) {
	  if(startTime === null) {
		startTime = currentTime;
	  }
	  var timeElapsed = currentTime - startTime;
	  var run = ease(timeElapsed,startPosition,distance,duration);
	  console.log(run)
	  window.scrollTo(0,run);
	  if(timeElapsed < duration) {
		requestAnimationFrame(animation)
	  }
	}
	function ease(t,b,c,d) {
	  
	  t /= d/2;
	  if(t<1) {
		return c / 2 *t * t + b 
	  }
	  t--;
	  return -c/2 * (t * (t-2) - 1) + b; 
	}
	requestAnimationFrame(animation);
}
window.addEventListener('resize' ,() => {
	widthWindow = window.outerWidth
})

if(widthWindow < 500) {

	links.forEach(link => {

		// if()
		link.addEventListener('click',() => {
			if(prevLink) {
				prevLink.classList.remove('active-nav-link');
				prevLink.children[0].classList.remove('active-nav-link')
				prevLink.children[1].classList.remove('active-nav-link')
				prevActiveDiv.classList.remove('active-div');
			}
			console.log('hello')
			var currentActiveDiv = document.querySelector(link.children[1].attributes.href.value);
			smoothscroll(link.children[1].attributes.href.value,1000)
			link.classList.add('active-nav-link');
	
			link.children[0].classList.add('active-nav-link')
			link.children[1].classList.add('active-nav-link')
			currentActiveDiv.classList.add('active-div')
			prevLink = link;
			prevActiveDiv = currentActiveDiv;
		})
	})
}
else {
	links.forEach(link => {

		// if()
		link.addEventListener('click',() => {
			if(prevLink) {
				prevLink.classList.remove('active-nav-link');
				prevLink.children[0].classList.remove('active-nav-link')
				prevLink.children[1].classList.remove('active-nav-link')
				prevActiveDiv.classList.remove('active-div');
			}
			var currentActiveDiv = document.querySelector(link.children[1].attributes.href.value);
			link.classList.add('active-nav-link');
	
			link.children[0].classList.add('active-nav-link')
			link.children[1].classList.add('active-nav-link')
			currentActiveDiv.classList.add('active-div')
			prevLink = link;
			prevActiveDiv = currentActiveDiv;
		})
	})
}


const divs = document.querySelectorAll('scrollable-div > div')

const messageContainer = document.querySelector('.message-container');
console.log(messageContainer)
if(messageContainer) {
	console.log(messageContainer)
	// document.body.classList.add('active-message')
	messageContainer.classList.add('active-message')
	document.querySelector('.cross').classList.add('active-message')
	document.querySelector('.container').classList.add('active-message')
	document.querySelector('nav').classList.add('active-message')
	document.querySelector('.glass-container').classList.add('active-message')
	

}
const cross = document.querySelector('.cross');
if(cross) {
	cross.addEventListener('click',() => {
		document.querySelector('.container').classList.remove('active-message')
		document.querySelector('nav').classList.remove('active-message')
		document.querySelector('.glass-container').classList.remove('active-message')
		messageContainer.classList.remove('active-message')
		cross.classList.remove('active-message')
	})
}

const changingText = document.querySelector('.changing-text');

const texts = ['freelancer','Developer','Enthusisast'];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let fillingText = true;

function typingEffect() {
	
	
	if(index < texts[count].length) {

		changingText.textContent += texts[count].charAt(index);
		index++;
		setTimeout(typingEffect,200);
		// index = 0;
		// count++;
		
	}
	else {
		setTimeout(typingEffect2,1000)
	}


}
// console.log(changingText)
let k=0
function typingEffect2() {

	if(index > 0) {
		changingText.textContent = texts[count].substring(0,index-1);
		index--;
		setTimeout(typingEffect2,100);
	}
	else {
		count++;
		if(count === texts.length) {
			count = 0;
			
		}
		setTimeout(typingEffect,200);
	}

}

typingEffect()
if(widthWindow < 500){
	const hamBurger = document.querySelector('.ham-burger');
	var style = getComputedStyle(document.body)
	hamBurger.addEventListener('click',() => {
		
		document.querySelector('ul').classList.toggle('ham-activate')

	})
}