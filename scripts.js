const musicPlayer = document.getElementById("music-player")
const musicAlbum = document.getElementById("music-album")
const musicTitle = document.getElementById("music-title")
const musicArtist= document.getElementById("music-artist")

const playBack = document.getElementById("playBack")
const playForward = document.getElementById("playForward")
const playPause= document.getElementById("playPause")

const progressBar= document.getElementById("progressBar")
const currentTime= document.getElementById("current-time")
const endTime= document.getElementById("end-time")

const musics=[
    {
        caminhoDaMusica: "./music/m1.mp3",
        tituloDaMusica: "Música 01",
        artista:"J&M",
        album:"./assets/music-img.png"
    },
    {
        caminhoDaMusica: "./music/m2.mp3",
        tituloDaMusica: "Música 02",
        artista:"J&M",
        album:"./assets/music-img.png"
        
    },
    {
        caminhoDaMusica: "./music/m3.mp3",
        tituloDaMusica: "Música 03",
        artista:"J&M",
        album:"./assets/music-img.png"
        
    }

]

function getMusic (){
    musicPlayer.src = musics[0].caminhoDaMusica
    musicAlbum.src = musics[0].album
    musicTitle.innerText = musics[0].tituloDaMusica
    musicArtist.innerText = musics[0].artista

}

getMusic()

playPause.addEventListener("click", function (){
    musicPlayer.play()
})