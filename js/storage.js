function Storage() {}

Storage.prototype.addMusicToStorage = function(newMusic) {
  let musics = this.getMusicsFromStorage();

  musics.push(newMusic);

  localStorage.setItem('musics',JSON.stringify(musics));
}

Storage.prototype.getMusicsFromStorage = function() {
  let musics;

  if (localStorage.getItem('musics') === null) {
    musics = [];
  } else {
    musics = JSON.parse(localStorage.getItem('musics'));
  }

  return musics;
}

Storage.prototype.deleteMusicFromStorage = function(musicTitle) {
  let musics = this.getMusicsFromStorage();

  musics.forEach(function(music, index) {
    if (music.title === musicTitle) {
      musics.splice(index,1);
    }
  });

  localStorage.setItem('musics', JSON.stringify(musics));
}

Storage.prototype.clearAllFilmsFromStorage = function() {
  localStorage.removeItem('musics');
}