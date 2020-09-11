function UI() {}

UI.prototype.addMusicToUI = function(newMusic) {
  const musicList = document.getElementById('musics');

  musicList.innerHTML += `
    <tr>
      <td><img src="${newMusic.cover}" class="img-thumbnail"></td>
      <td>${newMusic.title}</td>
      <td>${newMusic.artist}</td>
      <td>${newMusic.album}</td>
      <td><a href="#" id="delete-music" class="btn btn-danger">Delete Music</td>
    </tr>
  `;
}

UI.prototype.clearInputs = function(element1,element2,element3,element4) {
  element1.value = '';
  element2.value = '';
  element3.value = '';
  element4.value = '';
}

UI.prototype.showAlert = function(message, type) {
  const parent = document.querySelector('.card-body');

  const div = document.createElement('div');

  div.className = `alert alert-${type}`;

  div.textContent = message;

  parent.appendChild(div);

  setTimeout(function(){
    div.remove();
  },1500);
}

UI.prototype.loadAllMusics = function(musics) {
  const musicList = document.getElementById('musics');

  musics.forEach(music => {
    musicList.innerHTML += `
    <tr>
      <td><img src="${music.cover}" class=" img-thumbnail"></td>
      <td>${music.title}</td>
      <td>${music.artist}</td>
      <td>${music.album}</td>
      <td><a href="#" id="delete-music" class="btn btn-danger">Delete Music</td>
    </tr>
    `;
  });
}

UI.prototype.deleteMusicFromUI = function(element) {
  element.parentElement.parentElement.remove();
}

UI.prototype.clearAllMusicsFromUI = function() {
  const musicList = document.getElementById('musics');

  while (musicList.firstElementChild !== null) {
    musicList.firstElementChild.remove();
  }
}