// export function foo() {
//   console.log('export from pixabay!');
// }

let q = 'cat';
const KEY = '42263617-81d7156b9f7b88cd7b1016c2a';
const url = `https://pixabay.com/api/?key=${KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`;

export function getImage() {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      // Handle the data returned by the API
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('Error fetching data:', error);
    });
}
