document.querySelector('select').addEventListener('input', function(){
  document.querySelectorAll('ul').forEach(function(ul){
    ul.className = 'hidden';

  });
});