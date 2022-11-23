
 const api_url = 'https://openlibrary.org/subjects/fantasy.json';
async function getFantasy(){
  const response = await fetch(api_url);
  const data = await response.json();
  let arrayy = data.works;
  for(let i=0; i<arrayy.length; i++){
   let writer = data.works[i].authors;
   for(let w=0; w<writer.length; w++){
   let space = "<br>";
   document.getElementById('center2').innerHTML += "<a href = 'https://openlibrary.org/" + arrayy[i].key + "'> " + arrayy[i].title + space + writer[w].name + space + space +" </a>";
  } 
 }
}

  const button = document.querySelector('button');
  button.onclick = function(){
    let book = document.getElementById('book').value;
    if(book == 'fantasy'){
    return getFantasy();
    } else {(book != 'fantasy')
    return alert('Dite "fantasy" ed entrate!');
    }
  }


    