
 const api_url = 'https://openlibrary.org/subjects/fantasy.json';
async function getFantasy(){
  const response = await fetch(api_url);
  const data = await response.json();
  let arrayy = data.works;
  //console.log(data.works[0].authors[0].name);
  for(let i=0; i<arrayy.length; i++){
    console.log(arrayy[i]);
   let space = "<br></br>";
    document.getElementById('res').innerHTML += "<a href = 'https://openlibrary.org/" + arrayy[i].key + "'> " + arrayy[i].title  + space +" </a>";
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