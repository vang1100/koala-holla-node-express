console.log( 'js' );

//import axios from 'axios';

// const axios = require('axios');

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

  function getKoalas(){
    console.log('in getKoalas');
    axios.get('/koalas').then((response) => {
      console.log('response is:', response);

      let koalasFromServer = response.data;
      console.log('koalas froms server:', koalasFromServer);

      let koalasDIV = document.querySelector('#viewKoalas');

      for (let items of koalasFromServer) {
        koalasDIV.innerHTML += `
        <tr>
          <td>${items.name}</td>
          <td>${items.age}</td>
          <td>${items.favoriteColor}</td>
          <td>${items.readyForTransfer}</td>
          <td>${items.notes}</td>
        </tr>
        `;
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  getKoalas();
  
//} // end getKoalas

//function saveKoala(){
  //console.log( 'in saveKoala' );
  // axios call to server to get koalas

  function saveKoala(){
  let nameInput = document.querySelector('#nameIn').value;
  let ageInput = document.querySelector('#ageIn').value;
  let colorInput = document.querySelector('#colorIn').value;
  let transferInput = document.querySelector('#readyForTransferIn').value;
  let notesInput = document.querySelector('#notesIn').value;
  
  let koalasForServer = {
    name: nameInput,
    age: ageInput,
    favoriteColor: colorInput,
    readyForTransfer: transferInput,
    notes: notesInput
  };

  axios.post('/koalas', koalasForServer).then((response) => {
    console.log(response);
    getKoalas();
  }).catch((error) => {
    console.log(error);
  })
  }
 
//}


