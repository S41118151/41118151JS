function adjustFontAndColor() {
  var idElement = document.getElementById('student-id');
  var nameElement = document.getElementById('student-name');

  idElement.style.fontFamily = 'Arial, sans-serif';
  idElement.style.color = 'blue';

  nameElement.style.fontFamily = 'Arial, sans-serif';
  nameElement.style.color = 'green';
}

function adjustSelfie() {
  var selfieElement = document.getElementById('selfie');
  selfieElement.style.borderRadius = '50%';
  selfieElement.style.border = '2px solid red';
}

function changeImage() {
  var selfieElement = document.getElementById('selfie');
  selfieElement.src = 'life_photo.jpg';
}