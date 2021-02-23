let button = document.getElementById('button');
let text = document.getElementById('heading');

let book = ["Hi !", "I", "am", "Mr.Potato", "and", "I", "am", "reading", "this", "book", "and", "I", "never", "lie !", "Ahmm !", "You", "are", "very", "cute", "kind", "innocent", "smart", "intelligent", "caring", "hardworking", "beutiful", "girl", "and", "you", "can", "play", "ukulele", "you", "can", "draw", "you", "can", "sing", "you", "make", "awesome", "embroidery", "and", "you", "are", "a","sharp", "nailcutter", "shooter", "You", "are", "awesome !"];

let index = 1;

button.addEventListener('click', ()=>{
    text.innerHTML = book[index];
    index = (index + 1)%book.length;
})