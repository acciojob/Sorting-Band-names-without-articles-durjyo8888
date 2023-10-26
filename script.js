//your code here
// An array of band names
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Aerosmith'];

// Function to remove articles and sort the array
function sortBandNames(bandNames) {
  // Define a regular expression to match articles
  const articlesRegex = /^(a|an|the)\s/i;

  // Remove articles from band names and create a new array
  const modifiedNames = bandNames.map(name => name.replace(articlesRegex, ''));

  // Sort the modified array in lexicographic order
  modifiedNames.sort();

  return modifiedNames;
}

// Get the sorted band names
const sortedBandNames = sortBandNames(bandNames);

// Create an unordered list and add band names as list items
const ulElement = document.createElement('ul');
ulElement.id = 'band';

sortedBandNames.forEach(name => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});

// Append the list to the document
document.body.appendChild(ulElement);
