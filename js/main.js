const form = document.getElementById('music-form');
const titleElement = document.getElementById('title');
const artistElement = document.getElementById('artist');
const albumElement = document.getElementById('album');
const coverElement = document.getElementById('cover');
const cardBody = document.querySelectorAll('.card-body')[1];
const clear = document.querySelector('#clear-musics');

const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners() {
  form.addEventListener('submit', addMusic);
  document.addEventListener('DOMContentLoaded', function(){
    let musics = storage.getMusicsFromStorage();
    ui.loadAllMusics(musics);
  });

  cardBody.addEventListener('click',deleteMusic);
  clear.addEventListener('click', clearAllMusics);
}

function addMusic(e) {
  const title = titleElement.value;
  const artist = artistElement.value;
  const album = albumElement.value;
  const cover = coverElement.value;

  if (title === '' || artist === '' || album === '' || cover === '') {
    ui.showAlert('Please fill the inputs', 'danger')
  } else {
    const newMusic = new Music(title,artist,album,cover);

    ui.addMusicToUI(newMusic);
    storage.addMusicToStorage(newMusic);
    ui.showAlert('Music added successfully','success');
  }

  ui.clearInputs(titleElement, artistElement, albumElement, coverElement);

  e.preventDefault();
}

function deleteMusic(e) {
  if (e.target.id === 'delete-music') {
    ui.deleteMusicFromUI(e.target);
    storage.deleteMusicFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    ui.showAlert('Music deleted successfully','success');
  }
}

function clearAllMusics() {

  if (confirm('Are You Sure?')) {
    ui.clearAllMusicsFromUI();
    storage.clearAllMusicsFromStorage();
  }
}