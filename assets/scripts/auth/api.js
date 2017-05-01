'use strict'

// Go get the information from config.js. This came with the template.
const config = require('../config')
// Go get the information from store.js. This came with the template.
const store = require('../store')

// Creates the Ajax function to POST data for Signing up.
const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data: data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Creates the Ajax function to POST data for new car
const createCar = (data) => {
  console.log('createCar from Api.js ran.')
  return $.ajax({
    url: config.apiOrigin + '/cars/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Creates the Ajax function to PATCHES data into a car id!
const updateCar = (data) => {
  console.log('updateCar from Api.js ran.')
  return $.ajax({
    url: config.apiOrigin + '/cars/' + store.car.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Creates the Ajax function to POST data for new car!
const showCars = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/cars',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Creates the Ajax function to PATCHES data into a car id!
const sellCar = (data) => {
  console.log('sellCar from Api.js ran.')
  return $.ajax({
    url: config.apiOrigin + '/cars/' + store.car.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Exports out the signUp Ajax function.
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createCar,
  updateCar,
  showCars,
  sellCar
}
