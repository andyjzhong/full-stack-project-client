'use strict'

// Goes and gets information from the GetFormFields file. This came with the template.
const getFormFields = require(`../../../lib/get-form-fields`)
// Goes and gets the info from the api.js file.
const api = require('./api')
// Goes and gets the info from the ui.js file.
const ui = require('./ui')

// const events = require('./events')
// $('.save-button').on('submit', events.onUpdateCar)
// console.log('save-button from Ui.js ran!')

// Updates a car.
const onUpdateCar = function (event) {
  console.log('onUpdateCar from Update2Events.js ran.')
  console.log($(this).parent().parent().attr('data-id'))
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  console.log('Update2 Worked')
  const carId = $(this).parent().parent().attr('data-id')
  api.updateCar(carId, data)
    .then(ui.updateCarSuccess)
    .catch(ui.updateCarFailure)
}

module.exports = {
  onUpdateCar
}
