'use strict'

const store = require('../store')

const signUpSuccess = function (responseData) {
  // tell the user it was successful STEP 17
  $('#success-message').text('Signed up successfully!')

  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('#success-message').fadeOut(10000)

  $('form').trigger('reset')
}
const signInSuccess = function (responseData) {
  // step 19
  store.user = responseData.user

  // tell the user it was successful
  $('#success-message').text('Signed in successfully!')

  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('#success-message').fadeOut(10000)

  $('form').trigger('reset')

  $('#before-sign-in').hide()
  // after we sign in, show the section with the id 'after-sign-in' STEP 18
  $('#after-sign-in').show()
}
const signOutSuccess = function (responseData) {
  // tell the user it was successful
  $('#success-message').text('Successfully signed out!')

  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('#success-message').fadeOut(10000)

  $('#peak-display').html('')

  $('form').trigger('reset')

  $('#after-sign-in').hide()

  $('#before-sign-in').show()
}
const changePasswordSuccess = function (responseData) {
  $('#success-message').text('Changed Password Successfully!')

  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('#success-message').fadeOut(10000)

  $('form').trigger('reset')

  $('#before-sign-in').hide()

  $('#after-sign-in').show()
}

const signUpFailure = function (error) {
  $('#error-message').text('Sign up failed')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('#error-message').fadeOut(10000)

  console.log('error is', error)
}
const signInFailure = function (error) {
  $('#error-message').text('Sign in failed')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('#error-message').fadeOut(10000)

  console.log('error is', error)
}
const signOutFailure = function (error) {
  $('#error-message').text('Sign out failed')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('#error-message').fadeOut(10000)

  console.log('error is', error)
}
const changePasswordFailure = function (error) {
  $('#error-message').text('Change-password failed!')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('#error-message').fadeOut(10000)

  console.log('error is', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpFailure,
  signInFailure,
  signOutFailure,
  changePasswordFailure
}
