/* eslint-disable semi */
'use strict'

// require the getFormFields function to get data from our forms STEP 7
const getFormFields = require('../../lib/get-form-fields')
// const store = require('../store')

// require our api auth function STEP 5
const api = require('./api')
// require our ui functions to update the page STEP 6
const ui = require('./ui')

const onSignUp = (event) => {
  // prevent the default action of browser refreshing STEP 8
  event.preventDefault()

  // event.target is the form that casued the 'submit' event STEP 9
  const form = event.target
  // get the data from our form element STEP 10
  const formData = getFormFields(form)

  // make up POST / sign-up request, pass it the email/password/pw confirmation STEP 11
  api
    .signUp(formData)
  // if our sign-up request is successful, run the signUpSuccess function STEP 12
    .then(ui.signUpSuccess)
  // otherwise run a signUpFailure function STEP 13
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target

  const formData = getFormFields(form)
  console.log(formData)

  api
    .signIn(formData)

    .then(ui.signInSuccess)

    .catch(ui.signInFailure)
}

const onSignOut = (event) => {
  event.preventDefault()

  const form = event.target

  const formData = getFormFields(form)

  api
    .signOut(formData)

    .then(ui.signOutSuccess)

    .catch(ui.signOutFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()

  const form = event.target

  const formData = getFormFields(form)

  api
    .changePassword(formData)

    .then(ui.changePasswordSuccess)

    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
