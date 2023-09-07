const music = new Audio("./audio/1.mp3")
// music.play();

const songs = [
    {
        id: 1,
        songname: `Phir Aur Kya Chahiye Remix
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/1.jpg"
    },
    {
        id: 2,
        songname: `Le Aaunga
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/2.jpg"
    },
    {
        id: 3,
        songname: `Tum Kya Mile 
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/3.jpg"
    },
    {
        id: 4,
        songname: `O Bedardeya Mashup
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/4.jpg"
    },
    {
        id: 5,
        songname: `Deva Deva Mashup 2023
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/5.jpg"
    },
    {
        id: 6,
        songname: `Tumhe Kitna Pyaar Karte 
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/6.jpg"
    },
    {
        id: 7,
        songname: `Arijit Singh Mashup 
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/7.jpg"
    },
    {
        id: 8,
        songname: `Zinda Dili 
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/8.jpg"
    },
    {
        id: 9,
        songname: `What Jhumka
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/9.jpg"
    },
    {
        id: 10,
        songname: `Sun Sajni
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/10.jpg"
    },
    {
        id: 11,
        songname: `Kesariya
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/11.jpg"
    },
    {
        id: 12,
        songname: `Tum Kya Mile 
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/12.jpg"
    },
    {
        id: 13,
        songname: `O Bedardeya Remix
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/13.jpg"
    },
    {
        id: 14,
        songname: `Zinda Dil
        <div class="sub-title">Arjit Singh</div>`,
        poster: "./img/arijit/14.jpg"
    },
    {
        id: 15,
        songname: `Raatan Lambiyan 
        <div class="sub-title">Arjit Singh,</div>`,
        poster: "./img/arijit/15.jpg"
    }
]

Array.from(document.getElementsByClassName("songitem")).forEach((elem, ind) => {
    elem.getElementsByTagName("img")[0].src = songs[ind].poster;
    elem.getElementsByTagName("h5")[0].innerHTML = songs[ind].songname;
})

let masterplay = document.getElementById("masterplay")
let wave = document.getElementById("wave")

masterplay.addEventListener("click", function () {
    if (music.paused || music.currentTime <= 0) {
        music.play()
        wave.classList.add("active1")
        masterplay.classList.remove("bi-play-fill")
        masterplay.classList.add("bi-pause-fill")
    } else {
        music.pause()
        wave.classList.remove("active1")
        masterplay.classList.add("bi-play-fill")
        masterplay.classList.remove("bi-pause-fill")
    }
})

let backgroundall = () => {
    Array.from(document.getElementsByClassName("songitem")).forEach((el) => {
        el.style.background = `rgb(105, 105, 105, .0)`;
    })
}
let backgroundplays = () => {
    Array.from(document.getElementsByClassName("playlistplay")).forEach((ele) => {
        ele.classList.add("bi-play-circle-fill")
        ele.classList.remove("bi-pause-circle-fill")
    })
}


let index = 0;
let posterplay = document.getElementById("song-poster")
let title = document.getElementById("title")
let download1 = document.getElementById("download-music")

Array.from(document.getElementsByClassName("playlistplay")).forEach((elem) => {
    elem.addEventListener("click", (el) => {
        index = el.target.id;
        music.src = `audio/arjit/${index}.mp3`;
        posterplay.src = `img/arijit/${index}.jpg`;
        music.play();
        masterplay.classList.remove("bi-play-fill");
        masterplay.classList.add("bi-pause-fill");
        wave.classList.add("active1");
        download1.href = `audio/${index}.mp3`;

        let songtitle = songs.filter((elm) => {
            return elm.id == index;
        })

        songtitle.forEach(els => {
            let { songname } = els;
            title.innerHTML = songname;
            download1.setAttribute("download", songname)
        })
        backgroundall();
        Array.from(document.getElementsByClassName("songitem"))[index - 1].style.background = `rgb(105, 105, 105, .3)`
        backgroundplays();
        el.target.classList.remove("bi-play-circle-fill");
        el.target.classList.add("bi-pause-circle-fill");
    })
})



let timestart = document.getElementById("currentStart")
let timeend = document.getElementById("currentEnd")
let seek = document.getElementById("seek")
let bar = document.getElementById("bar2")
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", function () {
    let musictime = music.currentTime;
    let musicend = music.duration;

    let min1 = Math.floor(musicend / 60)
    let sec1 = Math.floor(musicend % 60)

    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }

    timeend.innerText = `${min1}:${sec1}`

    let min2 = Math.floor(musictime / 60)
    let sec2 = Math.floor(musictime % 60)
    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    timestart.innerText = `${min2}:${sec2}`


    let processbar = parseInt((musictime / musicend) * 100)
    seek.value = processbar;
    let seekbar = seek.value
    bar.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener("change", () => {
    music.currentTime = seek.value * music.duration / 100;

})

let volicon = document.getElementById("vol-icon")
let vol = document.getElementById("vol")
let volbar = document.getElementsByClassName("vol-bar")[0]
let voldot = document.getElementById("vol-dot")

vol.addEventListener("change", function () {
    if (vol.value == 0) {
        volicon.classList.remove("bi-volume-up-fill")
        volicon.classList.remove("bi-volume-down-fill")
        volicon.classList.add("bi-volume-off-fill")
    }
    if (vol.value > 0) {
        volicon.classList.remove("bi-volume-up-fill")
        volicon.classList.add("bi-volume-down-fill")
        volicon.classList.remove("bi-volume-off-fill")
    }
    if (vol.value > 50) {
        volicon.classList.add("bi-volume-up-fill")
        volicon.classList.remove("bi-volume-down-fill")
        volicon.classList.remove("bi-volume-off-fill")
    }
    let vol_a = vol.value;
    volbar.style.width = `${vol_a}%`;
    voldot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})

let back = document.getElementById("back")
let next = document.getElementById("next")

back.addEventListener("click", function () {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName("songitem")).length;
    }
    music.src =  `audio/arjit/${index}.mp3`;
    posterplay.src =`img/arijit/${index}.jpg`;
    music.play();
    masterplay.classList.remove("bi-play-fill")
    masterplay.classList.add("bi-pause-fill")
    wave.classList.add("active1")

    let songtitle = songs.filter((elm) => {
        return elm.id == index;
    })

    songtitle.forEach(els => {
        let { songname } = els;
        title.innerHTML = songname;
    })
    backgroundall();
    Array.from(document.getElementsByClassName("songitem"))[index - 1].style.background = `rgb(105, 105, 105, .3)`
    backgroundplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
})

next.addEventListener("click", function () {
    index += 1
    if (index > Array.from(document.getElementsByClassName("songitem")).length) {
        index = 1
    }
    music.src =  `audio/arjit/${index}.mp3`;
    posterplay.src =`img/arijit/${index}.jpg`;
    music.play();
    masterplay.classList.remove("bi-play-fill")
    masterplay.classList.add("bi-pause-fill")
    wave.classList.add("active1")

    let songtitle = songs.filter((elm) => {
        return elm.id == index;
    })

    songtitle.forEach(els => {
        let { songname } = els;
        title.innerHTML = songname;
    })
    backgroundall();
    Array.from(document.getElementsByClassName("songitem"))[index - 1].style.background = `rgb(105, 105, 105, .3)`
    backgroundplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
})








let left = document.getElementById("left-btn")
let right = document.getElementById("right-btn")
let popsong = document.getElementsByClassName("pop-song")[0];

left.addEventListener("click", function () {
    popsong.scrollLeft -= 330
})

right.addEventListener("click", function () {
    popsong.scrollLeft += 330
})

let items = document.getElementsByClassName("items")[0]
let leftpop = document.getElementById("left-btn-pop")
let rightpop = document.getElementById("right-btn-pop")

leftpop.addEventListener("click", function () {
    items.scrollLeft -= 330
})

rightpop.addEventListener("click", function () {
    items.scrollLeft += 330
})

let next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++
    }
    music.src =  `audio/arjit/${index}.mp3`;
    posterplay.src = `img/arijit/${index}.jpg`;
    music.play();
    masterplay.classList.remove("bi-play-fill")
    masterplay.classList.add("bi-pause-fill")
    wave.classList.add("active1")
    download1.href = `audio/${index}.mp3`;

    let songtitle = songs.filter((elm) => {
        return elm.id == index;
    })

    songtitle.forEach(els => {
        let { songname } = els;
        title.innerHTML = songname;
        download1.setAttribute("download", songname)
    })
    backgroundall();
    Array.from(document.getElementsByClassName("songitem"))[index - 1].style.background = `rgb(105, 105, 105, .3)`
    backgroundplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
}

let repeat_music = () => {
    index;
    music.src =  `audio/arjit/${index}.mp3`;
    posterplay.src = `img/arijit/${index}.jpg`;
    music.play();
    masterplay.classList.remove("bi-play-fill")
    masterplay.classList.add("bi-pause-fill")
    wave.classList.add("active1")
    download1.href = `audio/${index}.mp3`;

    let songtitle = songs.filter((elm) => {
        return elm.id == index;
    })

    songtitle.forEach(els => {
        let { songname } = els;
        title.innerHTML = songname;
        download1.setAttribute("download", songname)
    })
    backgroundall();
    Array.from(document.getElementsByClassName("songitem"))[index - 1].style.background = `rgb(105, 105, 105, .3)`
    backgroundplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
}

let random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1)
    }
    music.src = `audio/arjit/${index}.mp3`;
    posterplay.src =`img/arijit/${index}.jpg`;
    music.play();
    masterplay.classList.remove("bi-play-fill")
    masterplay.classList.add("bi-pause-fill")
    wave.classList.add("active1")
    download1.href = `audio/${index}.mp3`;

    let songtitle = songs.filter((elm) => {
        return elm.id == index;
    })

    songtitle.forEach(els => {
        let { songname } = els;
        title.innerHTML = songname;
        download1.setAttribute("download", songname)
    })
    backgroundall();
    Array.from(document.getElementsByClassName("songitem"))[index - 1].style.background = `rgb(105, 105, 105, .3)`
    backgroundplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
}

let shuffle = document.getElementsByClassName("shuffle")[0]

shuffle.addEventListener("click", () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add("bi-arrow-repeat")
            shuffle.classList.remove("bi-music-note-beamed")
            shuffle.classList.remove("bi-shuffle")
            shuffle.innerHTML = "repeat"
            break;

        case "repeat":
            shuffle.classList.remove("bi-arrow-repeat")
            shuffle.classList.remove("bi-music-note-beamed")
            shuffle.classList.add("bi-shuffle")
            shuffle.innerHTML = "random"
            break;

        case "random":
            shuffle.classList.remove("bi-arrow-repeat")
            shuffle.classList.add("bi-music-note-beamed")
            shuffle.classList.remove("bi-shuffle")
            shuffle.innerHTML = "next"
            break;
    }
})

music.addEventListener("ended", () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case "repeat":
            repeat_music()
            break;
        case "next":
            next_music()
            break;
        case "random":
            random_music()
            break;
    }
})