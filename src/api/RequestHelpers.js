export const url = 'https://socnetworkbackend.justcode.am/';
export const imgUrl = 'https://socnetworkbackend.justcode.am/uploads/'

export async function postRequest(api, body) {
  return await fetch(`${url}api/${api}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then(response => {
      console.log(response.status);
      return Promise.all([response.status, response.json()]);
    })
    .catch(error => console.log(error));
}

export async function getRequest(api) {
  return await fetch(`${url}api/${api}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function postRequestAuth(api, token, body) {
  return await fetch(`${url}api/${api}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then(response => {
    console.log(response.status);
    return Promise.all([response.status, response.json()]);
  })
    .catch(error => console.log(error));
}

export async function postRequestAuthFile(api, token, body) {
  return await fetch(`${url}api/${api}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    body: body,
  }).then(response => {
    console.log(response.status);
    return Promise.all([response.status, response.json()]);
  })
    .catch(error => console.log(error));
}

export async function getRequestAuth(api, token) {
  return await fetch(`${url}api/${api}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }).then(response => response.json());
}

export async function getRequestPaginationAuth(url, token) {
  return await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }).then(response => response.json());
}

export async function postRequestPaginationAuth(url, token, body) {
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then(response => {
    console.log(response.status);
    return Promise.all([response.status, response.json()]);
  })
    .catch(error => console.log(error));
}
