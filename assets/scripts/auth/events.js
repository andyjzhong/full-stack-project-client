'use strict'

// Goes and gets information from the GetFormFields file. This came with the template.
const getFormFields = require(`../../../lib/get-form-fields`)
// Goes and gets the info from the api.js file.
const api = require('./api')
// Goes and gets the info from the ui.js file.
const ui = require('./ui')

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

// Signup Function
const onCreateCar = function (event) {
  const data = getFormFields(this)
  console.log(data)
  console.log('onCreateCar from Events.js Ran!')
  event.preventDefault()
  api.createCar(data)
    .then(ui.createCarSuccess)
    .catch(ui.createCarFailure)
}

// Updates a car.
const onUpdateCar = function (event) {
  console.log('updateCar from Events.js ran.')
  event.preventDefault()
  const id = getFormFields(event.target)
  api.updateCar(id)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

// Creates an event handler to listen for when the submit button is clicked.
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#create-car').on('submit', onCreateCar)
  $('#update-car').on('submit', onUpdateCar)
}

// Exports out the addHandlers function.
module.exports = {
  addHandlers
}
