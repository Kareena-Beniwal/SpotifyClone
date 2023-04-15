console.log("Welcome to JavaScript Part");

//Syntax for playing an audio:
//  audioElement.play();


//Initializing variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName : "Kana Yaari", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
    {songName : "Kahani Suno 2.0", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName : "Lut gaye", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName : "Pasoori", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName : "Beshram Rang", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName : "Sway", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"}
]



//Handle play pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused|| audioElement.currentTime<=0){
        gif.style.opacity = 1;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        gif.style.opacity = 0;
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})




//Listen to events

audioElement.addEventListener(
    'timeupdate', ()=>{
        //Updating Seek Bar
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value = progress;
    })

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value *audioElement.duration)/100;
})    
