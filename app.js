const btn = document.queryselector('.talk')
const  content = document.queryselector('.content')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();	

const greeting = ["I am fine Thank you. How about you sweetheart","Hey! I'm good what about you.","Ahh! I'm slightly tired today that siri took so long while bitching about alexa. girl stuff you know."]
const weather = ["It's very hot outside."]

recognition.onstart = ()=>{
	console.log("Voice has been connected Let's talk and have some fun today together ;0");
}

recognition.onresult = (event)=>{
	// console.log(event);
	const current = event.resultIndex;
	const transcript = event.result[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
}

btn.addEventListener('click',()=>{
	recognition.start();
})

function readOutLoud (message) {
	const speech = new SpeechSynthesisUtterance();
	speech.text ="Sorry I don't listen you, I was chitchating with Siri and Alexa girls stuff you know.";
	if(message.includes("how are you")){
		const finalText = greeting[Math.floor(Math.random()*greeting.lenght	)];
		speech.text = finalText;
	}
	
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
	
	window.speechSynthesis.speak(speech);
}

