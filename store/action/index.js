export function postLogin(payload) {
  const data = { telepon: payload.phoneNumber, password: payload.password };
  console.log(data, '=>>>>>>>>')
  return (dispatch, getState) => {
    const url = 'https://tukangcukur.herokuapp.com/login/customer'
    const myRequest = new Request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    fetch(myRequest)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        dispatch({
          type: "SET_ACCESS_TOKEN",
          payload: {
            access_token: data.accesToken
          }
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

export function postRegister(payload) {
  const data = { telepon: payload.phoneNumber, password: payload.password, nama:payload.name, alamat:payload.address };
  console.log(data, '=>>>>>>>>')
  return (dispatch, getState) => {
    const url = 'https://tukangcukur.herokuapp.com/customer/'
    const myRequest = new Request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    fetch(myRequest)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "\n Berhasil Register")
      })
      .catch((error) => {
        console.log('Ciluk ba')
        console.error('Error:', error);
      });
  }
}

