console.log( 'js' );



function addKoala(){
  console.log('submit koala');
  let nameInput = document.querySelector('#nameIn').value;
  let koalaData = document.querySelector('#viewKoalas');

  koalaData.innerHTML += `
  <tr>
    <td>${nameInput}</td>
  </tr>
    `;
}



//function getKoalas(){
 // console.log( 'in getKoalas' );
  // axios call to server to get koalas
  
//} // end getKoalas

//function saveKoala(){
  //console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
//}

//getKoalas();
