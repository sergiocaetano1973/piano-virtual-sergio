const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume_slider input");
const keysCheck = document.querySelector(".keys_check input");

let mapedKeys = [];

let audio = new Audio("src/tunes/a.wav")

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clikedKey = document.querySelector(`[data-key="${key}"]`)
    clikedKey.classList.add("active")
    setTimeout(() => {
        clikedKey.classList.remove("active");
    }, 150)
};

pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click",()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});


document.addEventListener("keydown", (e)=>{

    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }       
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle("hide"))
};

volumeSlider.addEventListener("imput", handleVolume);

keysCheck.addEventListener("click", showHideKeys);