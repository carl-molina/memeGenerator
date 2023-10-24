const addMeme = document.querySelector('#add-meme');
const imageUrl = document.querySelector('input[name="image-url"]');
const textOnTop = document.querySelector('input[name="text-on-top"]');
const textOnBottom = document.querySelector('input[name="text-on-bottom"]');
const memeArea = document.querySelector('#meme-area');

addMeme.addEventListener('submit', function(e) {
  e.preventDefault();
  const newMeme = memeCreator(imageUrl.value, textOnTop.value, textOnBottom.value);
  memeArea.appendChild(newMeme);
  imageUrl.value = '';
  textOnTop.value = '';
  textOnBottom.value = '';
});


function memeCreator(url, top, bottom) {
  const memeContainer = document.createElement('div');
  const newImg = document.createElement('img');
  const topText = document.createElement('strong');
  const bottomText = document.createElement('strong');
  const deleteMeme = document.createElement('h2');

  newImg.src = url;
  topText.innerText = top;
  bottomText.innerText = bottom;
  deleteMeme.innerText = "X";

  memeContainer.classList.add('container');
  newImg.classList.add('image');
  topText.classList.add('text-top');
  topText.classList.add('meme-text');
  bottomText.classList.add('text-bottom');
  bottomText.classList.add('meme-text');
  deleteMeme.classList.add('hover-text');


  memeContainer.appendChild(newImg);
  memeContainer.appendChild(topText);
  memeContainer.appendChild(bottomText);
  memeContainer.appendChild(deleteMeme);

  return memeContainer;
};

memeArea.addEventListener("click", function(e) {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'STRONG' || e.target.tagName === 'H2') {
    e.target.parentElement.remove();
  }
});

// memeArea.addEventListener("hover", function(e) {
//   if (e.target.classList)
// })

//  memeArea.addEventListener("click", function(e) {
//    console.log(e.target.tagName);
//  });