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


// const articles = [
//   {
//     id: "article-1",
//     title: "Hello world",
//     image: "https://oir.mobi/uploads/posts/2021-05/1620871320_13-oir_mobi-p-lenivets-i-koala-zhivotnie-krasivo-foto-15.jpg",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
//   },
//   {
//     id: "article-2",
//     title: "Hello world",
//     image: "https://oir.mobi/uploads/posts/2021-05/1620871320_13-oir_mobi-p-lenivets-i-koala-zhivotnie-krasivo-foto-15.jpg",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
//   },
//   {
//     id: "article-3",
//     title: "Hello world",
//     image: "https://oir.mobi/uploads/posts/2021-05/1620871320_13-oir_mobi-p-lenivets-i-koala-zhivotnie-krasivo-foto-15.jpg",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
//   }
// ];

// const main = document.querySelector('main');
// articles.forEach(article => {
//   const articleElement = document.createElement('article');
//   const h1 = document.createElement('h1');
//   const img = document.createElement('img');
//   const p = document.createElement('p');

//   articleElement.id = article.id;
//   h1.textContent = article.title;
//   img.src = article.image;
//   p.textContent = article.body;

//   articleElement.append(h1);
//   articleElement.append(img);
//   articleElement.append(p);
//   main.append(articleElement);
// })









let article1 = document.getElementById('article1');
article1.style.display = "none";
document.getElementById('art1').addEventListener('click',function(){
  article1.style.display = "block";
});
document.getElementById('art1').addEventListener('dblclick',function(){
  article1.style.display = "none";
});

let article2 = document.getElementById('article2');
article2.style.display = "none";
document.getElementById('art2').addEventListener('click',function(){
  article2.style.display = "block";
});
document.getElementById('art2').addEventListener('dblclick',function(){
  article2.style.display = "none";
});

let article3 = document.getElementById('article3');
article3.style.display = "none";
document.getElementById('art3').addEventListener('click',function(){
  article3.style.display = "block";
});
document.getElementById('art3').addEventListener('dblclick',function(){
  article3.style.display = "none";
});