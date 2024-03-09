console.log( 'js' );



function addKoala(){
  console.log('submit koala');
  let nameInput = document.querySelector('#nameIn').value;
  let ageInput = document.querySelector('#ageIn').value;
  let colorInput = document.querySelector('#colorIn').value;
  let transferInput = document.querySelector('#readyForTransferIn').value;
  let notesInput = document.querySelector('#notesIn').value;
  let koalaData = document.querySelector('#viewKoalas');

  koalaData.innerHTML += `
  <tr>
    <td>${nameInput}</td>
    <td>${ageInput}</td>
    <td>${colorInput}</td>
    <td>${transferInput}</td>
    <td>${notesInput}</td>
    <td><button onClick="markReady()">Mark Ready</button></td>
    <td><button onClick="deleteButton()">Delete</button></td>
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
