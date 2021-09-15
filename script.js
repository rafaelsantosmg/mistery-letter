const paragraph = document.querySelector('#carta-gerada');
const imputLetter = document.querySelector('#carta-texto');
const buttonCreate = document.querySelector('#criar-carta');
const paragraphCount = document.querySelector('#carta-contador');
// const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
// const sizeGroup = ['medium', 'big', 'reallybig'];
// const rotationGroup = ['rotateleft', 'rotateright'];
// const inclinationGroup = ['skewleft', 'skewrigth'];
const arrayGroup = ['newspaper', 'magazine1', 'magazine2',
  'medium', 'big', 'reallybig', 'rotateleft',
  'rotateright', 'skewleft', 'skewright'];

function randomClass() {
  return arrayGroup[Math.floor(Math.random() * 10)];
}

function countWord() {
  return imputLetter.value.split(' ').length;
}

buttonCreate.addEventListener('click', () => {
  paragraph.innerHTML = '';
  if (imputLetter.value.trim() === '') {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
  const phrase = imputLetter.value.split(' ');
  for (let index = 0; index < phrase.length; index += 1) {
    const createSpan = document.createElement('span');
    createSpan.style.display = 'inline-block';
    createSpan.classList.add(randomClass());
    createSpan.innerHTML = phrase[index];
    paragraph.appendChild(createSpan);
  }
  paragraphCount.innerHTML = countWord();
});
