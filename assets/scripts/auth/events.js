'use strict'

// Goes and gets information from the GetFormFields file. This came with the template.
const getFormFields = require(`../../../lib/get-form-fields`)
// Goes and gets the info from the api.js file.
const api = require('./api')
// Goes and gets the info from the ui.js file.
const ui = require('./ui')

const setUpPage = function () {
  console.log('setUpPage from Events.js ran!')
  $('#signUpForm, #signInForm, #signOutForm, #changePasswordForm').show()
  $('#signOutForm, #changePasswordForm, .package, .collection').hide()
}

// Signup Function
const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log(data)
  console.log('onSignUp from Events.js Ran!')
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log('onSignIn from Events.js Ran!')
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  console.log('onSignOut from Events.js Ran!')
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  console.log('onChangePassword from Events.js Ran!')
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// Creates a car.
const onCreateCar = function (event) {
  const data = getFormFields(this)
  console.log(data)
  console.log('onCreateCar from Events.js Ran!')
  event.preventDefault()
  api.createCar(data)
    .then(ui.createCarSuccess)
    .catch(ui.createCarFailure)
}

// Shows all cars.
const onShowCars = function (event) {
  console.log('onShowCars from Events.js ran.')
  event.preventDefault()
  api.showCars()
    .then(ui.showCarsSuccess)
    .catch(ui.showCarsFailure)
}

// Delete a car.
const onSellCar = function (event) {
  console.log('onSellCar from Events.js ran.')
  event.preventDefault()
  const id = getFormFields(event.target)
  api.sellCar(id)
    .then(ui.sellCarSuccess)
    .catch(ui.sellCarFailure)
}

// Updates a car.
const onUpdateCar = function (event) {
  console.log('onUpdateCar from Events.js ran.')
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  console.log('Why isnt the data correct?')
  api.updateCar(data)
    .then(ui.updateCarSuccess)
    .catch(ui.updateCarFailure)
}

// Creates an event handler to listen for when the submit button is clicked.
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#create-car').on('submit', onCreateCar)
  $('#show-button').on('click', onShowCars)
  $('#mod-car').on('submit', onUpdateCar)
  $('#sell-car').on('submit', onSellCar)
}

// Exports out the addHandlers function.
module.exports = {
  addHandlers,
  setUpPage,
  onUpdateCar
}
