const updateCounter = () => {
  let counterElement = document.getElementById('counter');
  let count = parseInt(counterElement.innerText) || 0;
  counterElement.innerText = count + 1;
}

// manipulate responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  updateCounter();
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>"
  } else {
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`
  }
}

// manipulate responseField to render an unformatted response
const renderRawResponse = (res) => {
  updateCounter();
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>"
  } else {
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n")
    structuredRes = `<pre>${structuredRes}</pre>`

    responseField.innerHTML = `${structuredRes}`
  }
}
