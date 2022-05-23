baguetteBox.run('.grid');



let searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', myFunction);

function myFunction() {
     let searchLower = searchInput.value.toLowerCase();
     const link = document.querySelectorAll('a');
   

     for ( i = 0; i < link.length; i++ ) {
        let text = link[i].getAttribute('data-caption').toLowerCase();
        let filter = text.includes(searchLower);

        if ( filter === true ){
            link[i].style.display = 'grid';
        } else {
            link[i].style.display = 'none';
        };

     };

  
};








