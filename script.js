const song = {
  title: "The Room Is Quiet",
  file: "https://www.dropbox.com/scl/fi/d3l280n2zde60suj8z2p6/The-room-is-quiet-but-my-head-s-too-lou-1.mp3?rlkey=8uxbzi1syhatzdiq0u8ho3kwo&st=hiz2ko2t&raw=1",
  lyrics: `[Verse 1]
The room is quiet, but my head’s too loud
Ruangannya sunyi, tapi kepalaku terlalu bising
Thoughts collide, then fade somehow
Pikiran saling bertabrakan, lalu entah bagaimana menghilang
I smile like I’ve figured it out
Aku tersenyum seolah aku sudah memahami semuanya
But some nights I’m just breaking down
Tapi di beberapa malam aku benar-benar runtuh

[Pre-Chorus]
I don’t need saving
Aku tidak butuh diselamatkan
I just need time
Aku hanya butuh waktu

[Chorus]
I’m tired, but I’m still standing here
Aku lelah, tapi aku masih berdiri di sini`
};

let audio = new Audio(song.file);
let isPlaying = false;

const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const lyricsBox = document.getElementById("lyrics");

lyricsBox.textContent = song.lyrics;

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶";
  } else {
    audio.play();
    playBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
}

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});

progress.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});
