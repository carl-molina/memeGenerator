const addMeme = document.querySelector('#add-meme');
const imageUrl = document.querySelector('input[name="image-url"]');
const textOnTop = document.querySelector('input[name="text-on-top"]');
const textCenter = document.querySelector('input[name="text-center"]');
const textOnBottom = document.querySelector('input[name="text-on-bottom"]');
const memeArea = document.querySelector('#meme-area');

addMeme.addEventListener('submit', function(e) {
  e.preventDefault();
  const newMeme = memeCreator(imageUrl.value, textOnTop.value, textCenter.value, textOnBottom.value);
  memeArea.appendChild(newMeme);
  imageUrl.value = '';
  textOnTop.value = '';
  textCenter.value = '';
  textOnBottom.value = '';
});


function memeCreator(url, top, center, bottom) {
  const memeContainer = document.createElement('div');
  const newImg = document.createElement('img');
  const topText = document.createElement('strong');
  const centerText = document.createElement('strong');
  const bottomText = document.createElement('strong');
  const deleteMeme = document.createElement('h2');

  newImg.src = url;
  topText.innerText = top;
  centerText.innerText = center;
  bottomText.innerText = bottom;
  deleteMeme.innerText = "X";

  memeContainer.classList.add('completed-meme');
  newImg.classList.add('image');
  topText.classList.add('text-top', 'meme-text');
  centerText.classList.add('text-center', 'meme-text');
  bottomText.classList.add('text-bottom', 'meme-text');
  deleteMeme.classList.add('hover-text');


  memeContainer.appendChild(newImg);
  memeContainer.appendChild(topText);
  memeContainer.appendChild(centerText);
  memeContainer.appendChild(bottomText);
  memeContainer.appendChild(deleteMeme);

  memeContainer.style.width = '33%';
  memeContainer.style.height = '33%';

  newImg.style.maxWidth = '100%';
  newImg.style.maxHeight = '100%';
  newImg.style.display = 'inline-block';

  return memeContainer;
};

memeArea.addEventListener("click", function(e) {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'STRONG' || e.target.tagName === 'H2') {
    e.target.parentElement.remove();
  }
});