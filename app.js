const video = document.querySelector('.video');
const btnPausePlay = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img');
const barreOrange = document.querySelector('.barre-orange');
const juice = document.querySelector('.juice');
const muteBtn = document.getElementById('mute');
const fullScreen = document.getElementById('fullscreen');
const volumeSlider = document.getElementById('volume-slider');

btnPausePlay.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

function togglePlayPause (){
    if(video.paused){
        img.src = "ressources/pause.svg";
        video.play();
    }
    else {
        img.src = "ressources/play.svg";
        video.pause();
    }
}

// la barre orange 

video.addEventListener('timeupdate', () => {
        let juicePos = video.currentTime / video.duration;
        juice.style.width = juicePos * 100 + "%";
        if(video.ended){
            img.src = "ressources/play.svg";
        }
})

// volume

volumeSlider.addEventListener('change', () => {
    video.volume = volumeSlider.value / 100;
    console.log(video.volume);
})

// mute

muteBtn.addEventListener('click', () =>{
    if(video.muted){
        video.muted = false;
        muteBtn.innerText = "Mute";
    }
    else{
        video.muted = true;
        muteBtn.innerText = "Unmute";
    }
})

// click sur la barre pour navigation dans la video

let rect = barreOrange.getBoundingClientRect();
let largeur = rect.width;

barreOrange.addEventListener('click', (e) =>{
    let x = e.clientX - rect.left;

    let widthPercent = ((x*100/largeur));

    let durationVideo = video.duration;
    // position en secobnde par rapport au pourcentage
    video.currentTime = durationVideo * (widthPercent / 100);
})

// resize
window.addEventListener('resize', () => {
    let rect = barreOrange.getBoundingClientRect();
    let largeur = rect.width;
})

//passage en plein ecran

video.addEventListener('dblclick', () => {
    video.requestFullscreen();
})
fullScreen.addEventListener('click' , () => {
    video.requestFullscreen();
})