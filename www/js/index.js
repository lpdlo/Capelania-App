
function Index() {
}


//INIT
Index.prototype.init = () => {
  if (localStorage.primeiraVez) {
    app.router.navigate('/menu/');
  } else {
    getAll();
  }
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

//Recarregar
Index.prototype.recarregar = (id) => {
  getAll(true);
}



function getAll(refresh = false) {
  try {
    let url = 'http://201.6.243.44:3878/api/all'
    fetch(url,
      {
        method: "get",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(all => {
        console.log(all);
        
        localStorage.setItem('Grupos', JSON.stringify(all.grupos));
        localStorage.setItem('Reunioes', JSON.stringify(all.reunioes));
        
        if (refresh) {
          app.router.navigate('/menu/', { reloadCurrent: true, force: true, ignoreCache: true });
          app.ptr.done();
        } else {
          app.router.navigate('/menu/');
          localStorage.primeiraVez = true
        }
      })
      .catch(err => {
        console.log('Request failure: ', err);
        app.ptr.done();
        console.log(app)
        app.dialog.alert("Não foi possível Atualizar, tente conectar-se a internet.", "Open Groups", function () {
          console.log(window);
          // window.navigator.app.exitApp();
        });
      })
  } catch (err) {
    console.log('err: ' + err);
    app.ptr.done();
    app.dialog.alert("Houve algum erro no sistema, por favor reinicie a aplicação.", "Open Groups");
  }
}


function bufferToBase64(buf) {
  var binstr = Array.prototype.map.call(buf, function (ch) {
    return String.fromCharCode(ch);
  }).join('');
  return btoa(binstr);
}