'use strict'

const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api
    .signUp(formData)

    .then(() => api.autoSignIn(formData))

    .then(ui.signUpSuccess)

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
