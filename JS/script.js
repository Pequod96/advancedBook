
search.onclick = function(){
   let book = document.getElementById('book').value;
    if(book != 'fantasy' && book != 'Alice in wonderland')
    return (alert('Errore generico'));
}

 fetch('https://openlibrary.org/subjects/fantasy.json')
 .then(response => {
   return response.json();
 }).then(json => {
    console.log('fetch', json);
 
 })
