const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const geoCoder = (address) => {
  let latLng = null
  const API_KEY = "7RNyAHse9r9wjXT9pJUwBuwAdHnp40KL"
  const URL = `http://open.mapquestapi.com/geocoding/v1/address?key=${API_KEY}&location=${address}`
  fetch(URL)
  .then(resp => resp.json())
  .then(data => {
    latLng = data.results[0].locations[0].latLng
    return latLng
  })

}

// data.results[0].locations[0].latlng
// function getAddress(latlng){
//   console.log("get address running")
//   let lat = latlng.lat
//   let lng = latlng.lng
//   const locationInput = document.querySelector('#location')
//   fetch(`https://api.opencagedata.com/geocode/v1/json?key=52d0a97508b24a06a1477a4b7280fb10&q=${lat}%2C${lng}&pretty=1&no_annotations=1`)
//   .then(resp => resp.json())
//   .then(data => {
//     locationInput.value = data.results["0"].formatted
//   })
// }

export {capitalize, geoCoder}
