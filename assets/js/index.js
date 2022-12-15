
 const getFantasy = () => {
  axios.get('https://openlibrary.org/subjects/fantasy.json').then(response => {
    //console.log(response);
    const arrayy = response.data.works;
    //console.log(arrayy);
    const result = document.getElementById('center2');
    for(let i=0; i<arrayy.length; i++){
    let writer = response.data.works[i].authors;
    for(let w=0; w<writer.length; w++){
    let space = "<br>";
    result.innerHTML += "<a href = 'https://openlibrary.org/" + arrayy[i].key + "'> " + arrayy[i].title + space + writer[w].name + space + space +" </a>";
    }}})}
 

  const button = document.querySelector('button');
  button.onclick = function(){
    let book = document.getElementById('book').value;
    if((book == 'fantasy') || (book == 'Fantasy')){
    return getFantasy();
    } else {(book != 'fantasy')
    return alert('Dite "fantasy" ed entrate!');
    }
  }
