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

const main = document.querySelector('main');
articles.forEach(article => {
  const article = document.createElement('article');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const p = document.createElement('p');

  articleElement.append(h1);
  articleElement.append()
  articleElement.append()
  main.append
 
})

pts.js
// document.querySelector('select').addEventListener('input', function() {
//   document.querySelectorAll('ul').forEach(
//     ul => ul.classList.toggle('hidden', this.value !== ul.id)
//   );
// });

// document.body.classList.toggle('hello');

// document.body.classList.add('hello');
// document.body.classList.remove('hello');

// if (document.body.classList.contains('bye')) {

// }

// document.body.classList.replace('hello', 'bye');


const articles = [
  {
    id: "article-1",
    title: "Hello world",
    image: "./photo.jpeg",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
  },
  {
    id: "article-2",
    title: "Hello world",
    image: "./photo.jpeg",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
  },
  {
    id: "article-3",
    title: "Hello world",
    image: "./photo.jpeg",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
  }
];

const main = document.querySelector('main');
articles.forEach(article => {
  const articleElement = document.createElement('article');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const p = document.createElement('p');

  articleElement.id = article.id;
  h1.textContent = article.title;
  img.src = article.image;
  p.textContent = article.body;

  articleElement.append(h1);
  articleElement.append(img);
  articleElement.append(p);
  main.append(articleElement);
})