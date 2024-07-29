//const koalaRouter = require("../../routes/koala.router");

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
            <td><button>Delete</button></td>
            `
    }

  });

} // end getKoalas

function saveKoala(){
  console.log( 'in saveKoala' );
   // let nameVal = document.querySelector('#nameIn').value;
  // let ageVal = document.querySelector('#ageIn').value;
  // let colorVal = document.querySelector('#colorIn').value;
  // let transferStatus = document.querySelector('#readyForTransferIn').value;
  // let notesVal = document.querySelector('#notesIn').value;
  let viewKoalasDiv = document.querySelector('#viewKoalas');
  viewKoalasDiv.innerHTML += `test`;
  // axios call to server to get koalas
 
}

getKoalas();

// need function for delete button