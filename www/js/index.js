
function Index() {
}


//INIT
Index.prototype.init = () => {
   let grupos = JSON.parse(localStorage.getItem('Grupos'));
   if(grupos){
   	 app.router.navigate('/menu/');
   }
	//Get Grupos
   getAllGroups()
   getAllReunioes();
  	//Get Reunioes
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
			if (id === reuniao.autor._id) {
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
   try {
    let url = 'http://201.6.243.44:3878/api/grupo'
    fetch(url,
      {
        method: "get",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(grupos => {
        console.log('aaaa');
        gurpos = grupos.map(grupo=>{
          grupo.imagem = bufferToBase64(grupo.imagem.data)
        })
        localStorage.setItem('Grupos', JSON.stringify(grupos));
		app.router.navigate('/menu/',{
            force: true,
            ignoreCache: true,
            reload: true
       });
	   
      })
      .catch(err => {
        console.log('Request failure: ', error);
      })
  } catch (err) {
    console.log('err: ' + err);

  }
   getAllReunioes();
  	//Get Reunioes
}








function getAllGroups() {
  try {
    let url = 'http://201.6.243.44:3878/api/grupo'
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

        gurpos = grupos.map(grupo=>{
          grupo.imagem = bufferToBase64(grupo.imagem.data)
        })

        localStorage.setItem('Grupos', JSON.stringify(grupos));
		app.router.navigate('/menu/');
      })
      .catch(err => {
        console.log('Request failure: ', error);
      })
  } catch (err) {
    console.log('err: ' + err);

  }
}


function getAllReunioes() {
  try {
    let url = 'http://201.6.243.44:3878/api/reuniao'
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
        console.log('Request failure: ', error);
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