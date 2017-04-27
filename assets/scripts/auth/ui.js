'use strict'

const authEvents = require('./events.js')
const authApi = require('./api.js')
const authUi = require('./ui.js')
const authGame = require('../game-logic/game.js')

const store = require('../store')

const signUpSuccess = (data) => {
  $('.account-banner').text('You have successfully created an account. Log in to Play!')
  $('#signUpForm').hide()
  $('#sign-up').find('input:text, input:password').val('')
}

const signUpFailure = (error) => {
  $('.account-banner').text("Username is taken or your passwords don't match.")
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#signOutForm, #changePasswordForm, #createGame, #getGamesPlayed').show()
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
  $('#signOutForm, #changePasswordForm, #createGame, #gameArea, #getGamesPlayed, .game-stats').hide()
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

const createGameSuccess = (data) => {
  $('.box').text('')
  $('#gameArea').show()
  $('.game-stats').hide()
  $('.banner-id').text("Let's Play!")
  store.game = data.game
  $('#move_marker_form').val(authGame.currentPlayer)
  $('#index_form').val(+$(this).attr('id'))
  $('#game_over_form').val('false')
  authGame.gameBoard = {}
  authGame.currentPlayer = 'X'
}

const createGameFailure = (error) => {
  console.error(error)
}

const updateGameSuccess = (id) => {
}

const updateGameFailure = (error) => {
  console.error(error)
}

const getGamesSuccess = (data) => {
  const count = data.games.length
  $('.game-stats').show()
  $('#game-count').text(count)
}

const getGamesFailure = (error) => {
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
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
