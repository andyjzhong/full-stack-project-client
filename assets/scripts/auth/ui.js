'use strict'

const showCarsTemplate = require('../templates/car-listing.handlebars')

const store = require('../store')

const modify = require('./update2')

const signUpSuccess = (data) => {
  $('.account-banner').text('You have successfully created an account. Log in to manage cars.')
  $('#signUpForm').hide()
  $('#sign-up').find('input:text, input:password').val('')
}

const signUpFailure = (error) => {
  $('.account-banner').text("Username is taken or your passwords don't match.")
  console.error(error)
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#signOutForm, #changePasswordForm, .package, .collection').show()
  $('#signUpForm, #signInForm, .save-banner, .delete-banner').hide()
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
  $('.collection-banner').text('Enter Car Info Below to Add to Collection')
  $('#signOutForm, #changePasswordForm, .package, .collection, .content, .save-banner, .delete-banner').hide()
  $('.content').empty()
  $('.account-banner').text('You have successfully logged out.')
}

const signOutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  $('.account-banner').text('You have successfully changed your password.')
  $('#change-password').find('input:password').val('')
  $('.save-banner, .delete-banner').hide()
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('.account-banner').text('Your password is incorrect, please try again.')
  $('#change-password').find('input:password').val('')
  $('.save-banner, .delete-banner').hide()
}

const createCarSuccess = (data) => {
  $('.collection-banner').text('You have successfully recorded your new car.')
  $('#create-car').find('input:text').val('')
  $('.content, .delete-banner').hide()
}

const createCarFailure = (error) => {
  console.error(error)
  $('#create-car').find('input:text').val('')
  $('.collection-banner').text('You must enter data to all fields.')
  $('.delete-banner').hide()
}

const sellCarSuccess = (id) => {
  $('.delete-banner').show()
}

const sellCarFailure = (error) => {
  console.error(error)
}

const showCarsSuccess = (data) => {
  $('.collection-banner').text('Enter Car Info Below to Add to Collection')
  // Shows the content in your collection.
  const showCarsHtml = showCarsTemplate({ cars: data.cars })
  $('.content').show()
  $('.content').html(showCarsHtml)
  $('.update-area, .save-banner, .delete-banner').hide()

  // Removes object from the current listing
  $('.sell-button').on('click', function (event) {
    event.preventDefault()
    const carId = $(event.target).parent().attr('data-id')
    $(event.target).parent().remove()
    const api = require('./api')
    api.sellCar(carId)
      .then(sellCarSuccess)
      .catch(sellCarFailure)
  })

  // Modify Click Hide/Show button
  $('.mod-button').on('click', function (event) {
    event.preventDefault()
    $(event.target).siblings('.save-button, .mod-car, .cancel-button').show()
    $(event.target).siblings('.update-area').show()
    $('.mod-button, .sell-button, .save-banner').hide()
  })

  // Cancel Button Hide/Show button
  $('.cancel-button').on('click', function (event) {
    event.preventDefault()
    $('.mod-button, .sell-button').show()
    $('.update-area').hide()
    $('.mod-car').find('input:text').val('')
  })

  // Save Button Update Request
  $('.mod-car').on('submit', modify.onUpdateCar)
  $('.update-area').hide()
}

const showCarsFailure = (error) => {
  console.error(error)
}

const updateCarSuccess = (data) => {
}

const updateCarFailure = (error) => {
  console.error(error)
  $('.save-banner').text('Please enter a color.')
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
