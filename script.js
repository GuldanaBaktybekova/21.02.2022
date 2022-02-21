document.querySelector('select').addEventListener('input', function(){
  const value = this.value
  document.querySelectorAll('ul').forEach(function(ul){
    // ul.className = value === ul.id ? '' : 'hidden'
    // ul.classList.toggle('hidden', this.value !== ul.id)
   if(value === ul.id) {
    ul.className = '';
   }
   else {
    ul.className = 'hidden';
   }

  });
});

