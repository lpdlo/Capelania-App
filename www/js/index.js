
function Index() {
}


//INIT
Index.prototype.init = () => {
  if(localStorage.primeiraVez){
    app.router.navigate('/menu/');
  } 
  //Get All Grupos
  getAllGroups();
  //Get All Reunioes

}

//Get grupo
Index.prototype.getGrupo = (id) => {
  try {
    let grupos = JSON.parse(localStorage.getItem('Grupos'));
    if (grupos.length) {
      for (let i = 0; i < grupos.length; i++) {
        if (id === grupos[i]._id) {
          return grupos[i];
        }
      }
    }
    else {
      return [];
    }
  } catch (err) {
    console.log('err: ' + err);
  }
}


//Get Reunioes
Index.prototype.getReunioes = (id) => {
  
  try {
    let reunioes = JSON.parse(localStorage.getItem('Reunioes'));
    if (reunioes.length) {
      return reunioes.filter(reuniao => {
        if (id === reuniao.autor) {
          return true
        }
        return false
      })
    }
    else {
      return [];
    }
  } catch (err) {
    console.log('err: ' + err);
  }
}



//Recarregar Grupos

Index.prototype.recarregarGrupos = () => {
  //Get Grupos
  getAllGroups()
  console.log('Recarregar ');

  //Get Reunioes
}







//Get All Grupos
function getAllGroups() {
  try {
    let url = 'http://localhost:3000/api/grupo'
    fetch(url,
      {
        method: "get",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(grupos => {
        console.log('HERE');

        getAllReunioes();

        gurpos = grupos.map(grupo => {
          if(grupo.imagem){
          grupo.imagem = bufferToBase64(grupo.imagem.data)}
        })

        localStorage.setItem('Grupos', JSON.stringify(grupos));
        app.router.navigate('/menu/', {reload:true, force:true, ignoreCache:true});
        localStorage.primeiraVez = true
        app.ptr.done();
      })
      .catch(err => {
        let grupos = JSON.parse(localStorage.getItem('Grupos'));
        if (grupos) {
          app.router.navigate('/menu/');
        }
        console.log('Request failure: ', err);
      })
  } catch (err) {
    console.log('err: ' + err);

  }
}

//Get all Reunioes
function getAllReunioes() {
  try {
    let url = 'http://localhost:3000/api/reuniao'
    fetch(url,
      {
        method: "get",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(reunioes => {
        console.log('Reuniao HERE');
        localStorage.setItem('Reunioes', JSON.stringify(reunioes));
      })
      .catch(err => {
        console.log('Request failure: ', err);
      })
  } catch (err) {
    console.log('err: ' + err);

  }
}



function bufferToBase64(buf) {
  var binstr = Array.prototype.map.call(buf, function (ch) {
    return String.fromCharCode(ch);
  }).join('');
  return btoa(binstr);
}