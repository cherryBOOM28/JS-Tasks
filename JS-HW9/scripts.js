const burgerIcon = document.querySelector(".open__burger__menu");
const burgerMenu = document.querySelector(".burger-menu");
const close = document.querySelector(".close-icon")
const language = document.querySelector(".menu__lang");
const blackout = document.querySelector(".blackout");
const logo = document.querySelector(".menu__logo");
// const videoContent = document.querySelector(".video__content");


blackout.addEventListener("click", openBurgerMenu);
burgerIcon.addEventListener("click", openBurgerMenu);
close.addEventListener("click", closeBurgerMenu)

function openBurgerMenu() {
    burgerMenu.classList.add("active");
    burgerIcon.style.display = "none";
    language.style.display = "none";
    close.style.display = "block"
    // videoContent.style.zIndex = -1;

    videoPlayBtn.style.zIndex = -1;
    blackout.style.opacity = 1;
    blackout.style.zIndex = 1;
}

function closeBurgerMenu() {
    burgerMenu.classList.remove("active");
    burgerIcon.style.display = "block";
    language.style.display = "block";
    close.style.display = "none"

    videoPlayBtn.style.zIndex = 1;
    blackout.style.opacity = 0;
    blackout.style.zIndex = -1;
    // blackout.style.display = "none"
}

// PORTFOLIO SEASONS CHANGE

const seasonsButtons = document.querySelectorAll(".season__btn");
const seasonsImages = document.querySelectorAll(".portfolio__photos img");

const winterImages = [
    "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1519749163903-90027c6224bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1513267257196-91be473829b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1482331336918-c80fab6c90f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  ];

const springImages = [
    "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1600647993560-11a92e039466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1586952205040-22514ffab1a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNwcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1602934585418-f588bea4215c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1485148470689-9e57a229c0f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
];

const summerImages = [
    "https://images.unsplash.com/photo-1572953745960-14685e3e9b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1572246538688-3f326dca3951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
];

const autumnImages = [
    "./images/autumn.png",
    "./images/tree.png",
    "./images/baby.png",
    "./images/ground.png",
    "./images/couple.png",
    "./images/phone.png",
  ];

seasonsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      //Очистка от класса актив
      seasonsButtons.forEach((button) => {
        button.classList.remove("active-season");
      });
  
      //добавление
      if (button.innerText === "Spring") {
        button.classList.add("active-season");
  
        for (let i = 0; i < seasonsImages.length; i++) {
            seasonsImages[i].src = `${springImages[i]}`; //tabsImages[0].src
        }
      } else if (button.innerText === "Summer") {
        button.classList.add("active-season");
  
        for (let i = 0; i < seasonsImages.length; i++) {
            seasonsImages[i].src = `${summerImages[i]}`; //tabsImages[0].src
        }
      } else if (button.innerText === "Winter") {
        button.classList.add("active-season");
  
        for (let i = 0; i < seasonsImages.length; i++) {
            seasonsImages[i].src = `${winterImages[i]}`; //tabsImages[0].src
        }
      } else if (button.innerText === "Autumn") {
        button.classList.add("active-season");
  
        for (let i = 0; i < seasonsImages.length; i++) {
            seasonsImages[i].src = `${autumnImages[i]}`; //tabsImages[0].src
        }
    }
    })
  });

// VIDEO
const videoContainer = document.querySelector(".container-video"),
mainVideo = videoContainer.querySelector("video"),
videoTimeline = videoContainer.querySelector(".video-timeline"),
progressBar = videoContainer.querySelector(".progress-bar"),
volumeBtn = videoContainer.querySelector(".volume i"),
volumeSlider = videoContainer.querySelector(".options.left input"),
currentVideoTime = videoContainer.querySelector(".current-time"),
videoDuration = videoContainer.querySelector(".video-duration"),
skipBackward = videoContainer.querySelector(".skip-backward i"),
skipForward = videoContainer.querySelector(".skip-forward i"),
playPauseBtn = videoContainer.querySelector(".play-pause i"),
speedBtn = videoContainer.querySelector(".playback-speed span"),
speedOptions = videoContainer.querySelector(".speed-options"),
picInPic = videoContainer.querySelector(".pic-in-pic span"),
fullscreenBtn = videoContainer.querySelector(".fullscreen i");
videoPlayBtn = videoContainer.querySelector('.video-play')
let timer;


const hideControls = () => {
    // if(mainVideo.paused) return;
    timer = setTimeout(() => {
        videoContainer.classList.remove("show-controls");
    }, 2000)
};
hideControls();

videoContainer.addEventListener("mousemove", () => {
    videoContainer.classList.add("show-controls");
    clearTimeout(timer); // clear timeout to 0
    hideControls();
});

videoPlayBtn.addEventListener('click', () => {
    mainVideo.play();
    videoPlayBtn.style.display = 'none';
});


//default volume of video
mainVideo.volume = 0.5
//default slider value relating volume
volumeSlider.value = mainVideo.volume*100
//default progress var width
progressBar.style.width = '0%'

const formatTime = time => {
    let seconds = Math.floor(time % 60)
    let minutes = Math.floor(time / 60) % 60
    let hours = Math.floor(time / 3600)

    seconds = seconds < 10 ? `0${seconds}` : seconds
    minutes = minutes < 10 ? `0${minutes}` : minutes
    hours = hours < 10 ? `0${hours}` : hours

    if(hours == 0) { //if hours is 0 only return minutes and seconds
        return `${minutes}:${seconds}`
    }
    return `${hours}:${minutes}:${seconds}`
}

//dynamic progress bar
mainVideo.addEventListener("timeupdate", e => {
    let { currentTime, duration } = e.target; //getting current time and duration of the video
    let percent = (currentTime / duration) * 100;
    progressBar.style.width = `${percent}%`;
    //changing current video time
    currentVideoTime.innerHTML = formatTime(currentTime); 
});

mainVideo.addEventListener("loadeddata", e => {
    videoDuration.innerHTML = formatTime(e.target.duration);
});

skipBackward.addEventListener("click", () => {
    mainVideo.currentTime -= 10; // 5 sec 
})

skipForward.addEventListener("click", () => {
    mainVideo.currentTime += 10; // 5 sec skip
})

playPauseBtn.addEventListener("click", () => {
    // if video is paused, play the video else pause the video
    if (mainVideo.paused) {
        mainVideo.play();
        videoPlayBtn.style.display = 'none';
    } else {
        mainVideo.pause();
        videoPlayBtn.style.display = 'block';
    }
    //mainVideo.paused ? mainVideo.play() : mainVideo.pause();
});

// if video is play, change icon to pause
mainVideo.addEventListener("play", () => {
    playPauseBtn.classList.replace("fa-play", "fa-pause");
});

//if video is pause, change icon to play
mainVideo.addEventListener("pause", () => {
    playPauseBtn.classList.replace("fa-pause", "fa-play");
});

volumeBtn.addEventListener("click", () => {
    // if volume icon isn't volume high icon
    mainVideo.muted = mainVideo.muted == false ? mainVideo.muted=true : mainVideo.muted=false
    if(mainVideo.muted == true) {
        volumeSlider.value = 0; // passing 0.5 value as video valume
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    } else {
        volumeSlider.value = mainVideo.volume*100; // passing 0.0 value as video valume, so the video mute
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    }
});

volumeSlider.addEventListener("input", e => {
    // console.log(e.target.value);
    mainVideo.volume = e.target.value / 100; // passing slider value as video volume
    if(e.target.value == 0) {
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    } else {
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    };
});

speedBtn.addEventListener("click", () => {
    speedOptions.classList.toggle("show");
});

document.addEventListener("click", e => {
    if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded") {
        speedOptions.classList.remove("show")
    };
});

speedOptions.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", () => { // adding click event on all speed option
        mainVideo.playbackRate = option.dataset.speed; // passing option dataset value as video playback value
        speedOptions.querySelector(".active-speed").classList.remove('active-speed')//removing active class
        option.classList.add('active-speed')//adding active class to selected option
    });
});


picInPic.addEventListener("click", () => {
    mainVideo.requestPictureInPicture();
});

//Keyboard buttons pressing events
document.addEventListener('keydown', e => {
    if(e.key === "Escape"){
        console.log('pressed escape')
        container.classList.remove('fullscreen')
        fullscreenBtn.classList.replace("fa-compress", "fa-expand")
        return document.exitFullscreen()
    }
    if(e.code === "Space"){
        //if video paused, play the video. Else pause the video
        mainVideo.paused ? mainVideo.play() : mainVideo.pause()
    }
});

mainVideo.addEventListener("click", ()=>{
    if(mainVideo.paused)
      mainVideo.play();
    else
      mainVideo.pause();
});

//changing video mode to fullscreen
fullscreenBtn.addEventListener("click", () => {
    videoContainer.classList.toggle("fullscreen");
    if(document.fullscreenElement) {
        fullscreenBtn.classList.replace("fa-compress", "fa-expand");
        return document.exitFullscreen();
    }
    fullscreenBtn.classList.replace("fa-expand", "fa-compress");
    videoContainer.requestFullscreen(); //go to fullscreen mode
});

document.addEventListener('keydown', e => {
    if(e.key === "Escape"){
        // console.log('pressed escape')
        container.classList.remove('fullscreen')
        fullscreenBtn.classList.replace("fa-compress", "fa-expand")
        return document.exitFullscreen()
    }
});

videoTimeline.addEventListener("click", e => {
    let timelineWidth = e.target.clientWidth;
    //updating video current time according to video duration and mouse position
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration; //e.offsetX gives mouse x position
});

videoTimeline.addEventListener("mousemove", e => {
    const progressTime = videoTimeline.querySelector("span");
    let offsetX = e.offsetX;
    progressTime.style.left = `${offsetX}px`;
    let timelineWidth = videoTimeline.clientWidth;
    let percent = (e.offsetX / timelineWidth) * mainVideo.duration;
    progressTime.innerHTML = formatTime(percent);
});

//modified event when clicking to videoTimeLine and dragging user can drag the whole screen
videoTimeline.addEventListener("mousedown", () => { //calling draggableProgressBar function on mousemove event
    document.addEventListener("mousemove", draggableProgressBar)
});

document.addEventListener("mouseup", () => { //calling draggableProgressBar function on mousemove event
    document.removeEventListener("mousemove", draggableProgressBar);
});

const draggableProgressBar = e => {
    // e.preventDefault();
    let timelineWidth = e.target.clientWidth;
    progressBar.style.width = `${e.offsetX}px`;
     //updating video current time according to video duration and mouse position
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
    currentVideoTime.innerHTML = formatTime(mainVideo.currentTime);
}
