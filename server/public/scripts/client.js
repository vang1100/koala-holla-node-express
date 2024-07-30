//const koalaRouter = require("../../routes/koala.router");

//const { response } = require("express");

console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas

  
  axios.get('/koalas').then((response) => {

    //this console log should show the koalalist array from the server side
    //console.log('response', response.data);

    let koalasFromServer = response.data;
    console.log(koalasFromServer);

    let viewKoalasDiv = document.querySelector('#viewKoalas');
    
    //looping over response.data to put on DOM

    for (let items of koalasFromServer) {
      viewKoalasDiv.innerHTML += `
          <tr>
            <td>${items.name}</td>
            <td>${items.age}</td>
            <td>${items.color}</td>
            <td>${items.transfer}</td>
            <td>${items.notes}</td>
            <td><button onclick="deleteKoala(event)">Delete</button></td>
            `
    }

  });

} // end getKoalas

function saveKoala(event){
  event.preventDefault();
  console.log( 'in saveKoala' );
  let nameVal = document.querySelector('#nameIn').value;
  let ageVal = document.querySelector('#ageIn').value;
  let colorVal = document.querySelector('#colorIn').value;
  let transVal = document.querySelector('#readyForTransferIn').value;
  let notesVal = document.querySelector('#notesIn').value;
  let viewKoalasDiv = document.querySelector('#viewKoalas');

  let koalasToAdd = {
    name: nameVal,
    age: ageVal,
    color: colorVal,
    transfer: transVal,
    notes: notesVal

  }

  // axios call to server to get koalas

  axios.post('/koalas', koalasToAdd).then((response) =>{
    console.log('response from post',response);
    getKoalas();
  }).catch((error) => {
    console.log(error);
    alert('something went wrong in axios post');
  });
 
}

getKoalas();

// need function for delete button

function deleteKoala(event){
console.log('testing the delete button');

let td = event.target.parentElement;
let tr = td.parentElement;
tr.remove();

}