// document.querySelector('select').addEventListener('input', function(){
//   const value = this.value
//   document.querySelectorAll('ul').forEach(function(ul){
//     // ul.className = value === ul.id ? '' : 'hidden'
//     // ul.classList.toggle('hidden', this.value !== ul.id)
//    if(value === ul.id) {
//     ul.className = '';
//    }
//    else {
//     ul.className = 'hidden';
//    }

//   });
// });


// document.body.classList.add('hello');

// document.body.classList.remove('hello');

// document.body.classList.toggle('hello');

// document.body.classList.contains('hello');

const articles = [
  {
    id: "article-1",
    title: "Hello world",
    image: "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg?w=400&h=225&c=crop",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi eveniet doloremque iure velit earum! Enim, voluptatibus culpa quasi ex ut blanditiis ea velit, fuga praesentium nesciunt ad eum! Eveniet!"
  },
  {
    id: "article-2",
    title: "Hello world",
    image: "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg?w=400&h=225&c=crop",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi eveniet doloremque iure velit earum! Enim, voluptatibus culpa quasi ex ut blanditiis ea velit, fuga praesentium nesciunt ad eum! Eveniet!"
  },
  {
    id: "article-3",
    title: "Hello world",
    image: "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg?w=400&h=225&c=crop",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi eveniet doloremque iure velit earum! Enim, voluptatibus culpa quasi ex ut blanditiis ea velit, fuga praesentium nesciunt ad eum! Eveniet!"
  }
]

let main = document.querySelector('main');
main.forEach(function() {
  let article = document.createElement('article')
})