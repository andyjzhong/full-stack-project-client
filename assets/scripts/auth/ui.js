'use strict'

// const authEvents = require('./events.js')
// const authApi = require('./api.js')
// const authUi = require('./ui.js')

const showCarsTemplate = require('../templates/car-listing.handlebars')

const store = require('../store')

const signUpSuccess = (data) => {
  $('.account-banner').text('You have successfully created an account. Log in to Play!')
  $('#signUpForm').hide()
  $('#sign-up').find('input:text, input:password').val('')
}

const signUpFailure = (error) => {
  $('.account-banner').text("Username is taken or your passwords don't match.")
  console.error(error)
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log(store.user)
  $('#signOutForm, #changePasswordForm, .package, .collection').show()
  $('#signUpForm, #signInForm').hide()
  $('.account-banner').text('You have successfully logged in.')
  $('#sign-in').find('input:text, input:password').val('')
}

const signInFailure = (error) => {
  $('.account-banner').text('Either the info you typed was wrong or you need to create an account.')
  $('#sign-in').find('input:text, input:password').val('')
  console.error(error)
}

const signOutSuccess = (data) => {
  store.user = null
  $('#signInForm, #signUpForm').show()
  $('#signOutForm, #changePasswordForm, .package, .collection, .content').hide()
  $('.content').empty()
  $('.account-banner').text('You have successfully logged out.')
}

const signOutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  $('.account-banner').text('You have successfully changed your password.')
  $('#change-password').find('input:password').val('')
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('.account-banner').text('Your password is incorrect, please try again.')
  $('#change-password').find('input:password').val('')
}

const createCarSuccess = (data) => {
  console.log('createCarSuccess in Ui.js ran')
  console.log(data)
}

const createCarFailure = (error) => {
  console.error(error)
}

const showCarsSuccess = (data) => {
  console.log('showCarsSuccess in Ui.js ran')
  console.log(data)
  const showCarsHtml = showCarsTemplate({ cars: data.cars })
  $('.content').show()
  $('.content').html(showCarsHtml)
}

const showCarsFailure = (error) => {
  console.error(error)
}

const updateCarSuccess = (id) => {
  console.log('updateCarSuccess in Ui.js ran')
  console.log(id)
}

const updateCarFailure = (error) => {
  console.log('updateCarFailure in Ui.js ran')
  console.error(error)
}

const sellCarSuccess = (id) => {
  console.log('sellCarSuccess in Ui.js ran')
  console.log(id)
}

const sellCarFailure = (error) => {
  console.log('sellCarFailure in Ui.js ran')
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createCarSuccess,
  createCarFailure,
  showCarsSuccess,
  showCarsFailure,
  updateCarSuccess,
  updateCarFailure,
  sellCarSuccess,
  sellCarFailure
}
