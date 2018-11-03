function getItems() {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=escalada`)
  .then(results => results.json())
  .then(data => data.results)
  .catch(error => alert('Problemas na requisição. Por favor, atualize a página.'))
}

export default { getItems }
