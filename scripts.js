const musicPlayer = document.getElementById("music-player")
const musicAlbum = document.getElementById("music-album")
const musicTitle = document.getElementById("music-title")
const musicArtist = document.getElementById("music-artist")

const playBack = document.getElementById("playBack")
const playForward = document.getElementById("playForward")
const playButton = document.getElementById("playButton")
const pauseButton = document.getElementById("pauseButton")

const progressBar = document.getElementById("progressBar")
const currentTime = document.getElementById("current-time")
const endTime = document.getElementById("end-time")

const musics = [
    {
        caminhoDaMusica: "./music/m1.mp3",
        tituloDaMusica: "Logo Eu",
        artista: "J&M",
        album: "./assets/music-img.png"
    },
    {
        caminhoDaMusica: "./music/m2.mp3",
        tituloDaMusica: "Envolver",
        artista: "Anitta",
        album: "./assets/music-img.png"

    },
    {
        caminhoDaMusica: "./music/m3.mp3",
        tituloDaMusica: "Cacos De Vidro",
        artista: "BK",
        album: "./assets/music-img.png"

    }

]

var musicaAtual = 0

function getMusic(indexMusic) {
    musicPlayer.src = musics[indexMusic].caminhoDaMusica
    musicAlbum.src = musics[indexMusic].album
    musicTitle.innerText = musics[indexMusic].tituloDaMusica
    musicArtist.innerText = musics[indexMusic].artista

    musicaAtual = indexMusic

}


getMusic(musicaAtual)

function nextMusic() {
    getMusic(musicaAtual + 1)
    musicPlayer.play()
}

function previousMusic() {
    getMusic(musicaAtual - 1)
    musicPlayer.play()
}

playButton.addEventListener("click", function () {
    musicPlayer.play()
    playButton.style.display= "none"
    pauseButton.style.display = "inline-block"

})

pauseButton.addEventListener("click", function () {
    musicPlayer.pause()
    pauseButton.style.display= "none"
    playButton.style.display = "inline-block"
})


playForward.addEventListener("click", function () {
    nextMusic()
    musicPlayer.play()

})

playBack.addEventListener("click" , function (){
    previousMusic()
    musicPlayer.play()
})


