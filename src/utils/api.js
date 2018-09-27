function getItems() {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=escalada`)
  .then(results => results.json())
  .then(data => data.results)
}

export default { getItems }
