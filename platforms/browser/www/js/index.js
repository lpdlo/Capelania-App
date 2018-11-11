function Index() {
}

Index.prototype.getAllGroups = () => {
    let url = 'http://201.6.243.44:3878/api/grupo'
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
  })
  .catch(err => {
    console.log('Request failure: ', error);
  })
}