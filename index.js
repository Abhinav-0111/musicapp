const music = new Audio("./audio/1.mp3")
// music.play();

const songs = [
    {
        id: 1,
        songname: `Allah De Bandeya 
        <div class="sub-title">	B Praak,</div>`,
        poster: "./img/1.jpg"
    },
    {
        id: 2,
        songname: `Tu Tu Tu 
        <div class="sub-title">B Praak,</div>`,
        poster: "./img/2.jpg"
    },
    {
        id: 3,
        songname: `Hota Hai Ji Hota Hai
        <div class="sub-title">B Praak,</div>`,
        poster: "./img/3.jpg"
    },
    {
        id: 4,
        songname: `Farehaa
        <div class="sub-title">B Praak,</div>`,
        poster: "./img/4.jpg"
    },
    {
        id: 5,
        songname: `Zinda Banda
        <div class="sub-title">B Praak,</div>`,
        poster: "./img/5.jpg"
    },
    {
        id: 6,
        songname: `Dil Bechara
        <div class="sub-title">Dil Bechara</div>`,
        poster: "./img/6.jpg"
    },
    {
        id: 7,
        songname: `Yaar Ka Sataya Hua Hai
        <div class="sub-title">Jaani, B Praak</div>`,
        poster: "./img/7.jpg"
    },
    {
        id: 8,
        songname: `Raatan Kaaliyan
        <div class="sub-title">Ayushmann Khurrana, Rochak Kohli, Gurpreet Saini, Gautam G Sharma</div>`,
        poster: "./img/8.jpg"
    },
    {
        id: 9,
        songname: `What Jhumka
        <div class="sub-title">Pritam, Arijit Singh, Jonita Gandhi, Ranveer Singh, Amitabh Bhattacharya</div>`,
        poster: "./img/9.jpg"
    },
    {
        id: 10,
        songname: `Sun Sajni
        <div class="sub-title">Meet Bros, Parampara Tandon, Piyush Mehroliyaa</div>`,
        poster: "./img/10.jpg"
    },
    {
        id: 11,
        songname: `Tum Kya Mile
        <div class="sub-title">Pritam, Arijit Singh, Shreya Ghoshal, Amitabh Bhattacharya</div>`,
        poster: "./img/11.jpg"
    },
    {
        id: 12,
        songname: `Maan Meri Jaan 
        <div class="sub-title">	King</div>`,
        poster: "./img/12.jpg"
    },
    {
        id: 13,
        songname: `Har Har Shambhu Shiv Mahadeva
        <div class="sub-title">	Abhilipsa Panda, Jeetu Sharma,</div>`,
        poster: "./img/13.jpg"
    },
    {
        id: 14,
        songname: `Kahani Suno
        <div class="sub-title">Kaifi Khalil</div>`,
        poster: "./img/14.jpg"
    },
    {
        id: 15,
        songname: `Daku 
        <div class="sub-title">Inderpal Moga,</div>`,
        poster: "./img/15.jpg"
    },
    {
        id: 16,
        songname: `Malang Sajna
        <div class="sub-title">	Sachet Parampara,</div>`,
        poster: "./img/16.jpg"
    },
    {
        id: 17,
        songname: `Rees
        <div class="sub-title">Nijjar,</div>`,
        poster: "./img/17.jpg"
    },
    {
        id: 18,
        songname: `CROWN
        <div class="sub-title">	King,</div>`,
        poster: "./img/18.jpg"
    },
    {
        id: 19,
        songname: `Punjab Shadeya 
        <div class="sub-title">	R Nait,</div>`,
        poster: "./img/19.jpg"
    },
    {
        id: 20,
        songname: `	Naa Lai Ke 
        <div class="sub-title">Sunny Randhawa,</div>`,
        poster: "./img/20.jpg"
    }
]

// search data start
let search_result = document.getElementsByClassName("search-result")[0]

songs.forEach((elem) => {
    const { id, songname, poster } = elem
    let card = document.createElement("a");
    card.classList.add("card")
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}">
    <div class="content">
    ${songname}
    </div>
    `;

    search_result.appendChild(card)
})

let input = document.getElementsByTagName("input")[0];
input.addEventListener("keyup", () => {
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName("a")

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName("content")[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex"
        } else {
            items[index].style.display = "none"
        }

        if(input.value==0){
            search_result.style.display = "none"
        }else{
            search_result.style.display = ""
        }

    }
})

// search data end
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
        music.src = `audio/${index}.mp3`;
        posterplay.src = `img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;
    posterplay.src = `img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;
    posterplay.src = `img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;
    posterplay.src = `img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;
    posterplay.src = `img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;
    posterplay.src = `img/${index}.jpg`;
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