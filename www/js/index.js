
function Index() {
}


//INIT
Index.prototype.init = () => {
  try {
    let grupos = localStorage.getItem('Grupos');
    if (grupos) {
      getAllGroups()
    } else {
      localStorage.setItem('Grupos', JSON.stringify([]));
    }
  } catch (err) {
    console.log('err: ' + err);

  }

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