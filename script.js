const paragraph = document.querySelector('#carta-gerada');
const imputLetter = document.querySelector('#carta-texto');
const buttonCreate = document.querySelector('#criar-carta');

buttonCreate.addEventListener('click', () => {
  paragraph.innerHTML = '';
  if (imputLetter.value === '') {
    imputLetter.value = 'Por Favor, digite o conteúdo da carta';
  } else {
    const phrase = imputLetter.value.split(' ');
    for (let index = 0; index < phrase.length; index += 1) {
      const createSpan = document.createElement('span');
      createSpan.innerHTML = phrase[index];
      paragraph.appendChild(createSpan);
    }
  }
});
