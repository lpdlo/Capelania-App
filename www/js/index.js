function Index() {
}

Index.prototype.getAllGroups = () => {
  console.log('GOOOOOOOoo');
  
    let url = 'http://localhost:3000/api/grupo'
    fetch(url,
  {
    method: "get",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(user => {
    return user
    log(user)
  })
  .catch(err => {
    console.log('Request failure: ', error);
  })
}