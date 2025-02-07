let speech = new SpeechSynthesisUtterance();
let voices = [];
let optionsVoices = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        optionsVoices.options[i] = new Option(voice.name, i);
    });
};

optionsVoices.addEventListener('change', () => {
    speech.voice = voices[optionsVoices.selectedIndex];
});

document.querySelector('.play').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});
