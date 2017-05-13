'use strict'

// Goes and gets information from the GetFormFields file. This came with the template.
const getFormFields = require(`../../../lib/get-form-fields`)
// Goes and gets the info from the api.js file.
const api = require('./api')
// Goes and gets the info from the ui.js file.
const ui = require('./ui')

// Updates a car.
const onUpdateCar = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  $('.update-area, #content').hide()
  $('.sell-button, .mod-button, .save-banner').show()
  const carId = $(this).parent().parent().attr('data-id')
  api.updateCar(carId, data)
    .then(ui.updateCarSuccess)
    .catch(ui.updateCarFailure)
}

module.exports = {
  onUpdateCar
}
