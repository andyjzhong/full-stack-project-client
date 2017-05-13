'use strict'

// Goes and gets information from the GetFormFields file. This came with the template.
const getFormFields = require(`../../../lib/get-form-fields`)
// Goes and gets the info from the api.js file.
const api = require('./api')
// Goes and gets the info from the ui.js file.
const ui = require('./ui')

const setUpPage = function () {
  $('#signUpForm, #signInForm, #signOutForm, #changePasswordForm').show()
  $('#signOutForm, #changePasswordForm, .package, .collection').hide()
}

// Signup Function
const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// Creates a car.
const onCreateCar = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createCar(data)
    .then(ui.createCarSuccess)
    .catch(ui.createCarFailure)
}

// Shows all cars.
const onShowCars = function (event) {
  event.preventDefault()
  api.showCars()
    .then(ui.showCarsSuccess)
    .catch(ui.showCarsFailure)
}

// Delete a car.
const onSellCar = function (event) {
  event.preventDefault()
  const id = getFormFields(event.target)
  api.sellCar(id)
    .then(ui.sellCarSuccess)
    .catch(ui.sellCarFailure)
}

// Creates an event handler to listen for when the submit button is clicked.
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#create-car').on('submit', onCreateCar)
  $('#show-button').on('click', onShowCars)
  $('#sell-car').on('submit', onSellCar)
}

// Exports out the addHandlers function.
module.exports = {
  addHandlers,
  setUpPage
}
