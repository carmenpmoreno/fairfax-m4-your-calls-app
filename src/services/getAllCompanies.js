const ENDPOINT = 'https://adalab.interacso.com/api/call';

const getCompanies = () =>
  fetch(ENDPOINT, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json());
// .then(data => {
//   console.log(data);
//   return data;
// });

export { getCompanies };
