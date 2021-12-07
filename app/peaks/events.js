'use strict'

const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')

const onCreatePeak = function (event) {
  event.preventDefault()
  console.log('onCreatePeak ran!')

  const data = getFormFields(event.target)
  api.create(data).then(ui.onCreateSuccess).catch(ui.onCreateFailure)
}

const onIndexPeaks = function (event) {
  event.preventDefault()
  console.log('onIndexPeaks ran!')

  api.index().then(ui.onIndexSuccess).catch(ui.onIndexFailure)
}

const onShowPeak = function (event) {
  event.preventDefault()
  console.log('onShowPeak ran!')

  const data = getFormFields(event.target)
  const peak = data.peak

  if (peak.id.length !== 0) {
    api.show(peak).then(ui.onShowSuccess).catch(ui.onShowFailure)
  } else {
    $('#message').html('<p>Please provide a valid peak id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please enter a peak id!')
  }
}

const onDeletePeak = function (event) {
  event.preventDefault()
  console.log('onDeletePeak ran!')

  const data = getFormFields(event.target)
  const peak = data.peak

  if (peak.id.length !== 0) {
    api.destroy(peak.id).then(ui.onDeleteSuccess).catch(ui.onDeleteFailure)
  } else {
    $('#message').html('<p>Please provide a valid peak id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide a valid peak id!')
  }
}

const onUpdatePeak = function (event) {
  event.preventDefault()
  console.log('onUpdatePeak ran!')

  const data = getFormFields(event.target)
  const peak = data.peak

  if (peak.text === '') {
    $('#message').html('<p>Text is required</p>')
    $('#message').css('background-color', 'red')
    console.log('Text is required!')
    return false
  }
  if (peak.id.length !== 0) {
    api.update(data).then(ui.onUpdateSuccess).catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide a valid peak id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide a valid peak id!')
  }
}

const addHandlers = () => {
  $('#peak-create').on('submit', onCreatePeak)
  $('#peak-index').on('submit', onIndexPeaks)
  $('#peak-show').on('submit', onShowPeak)
  $('#peak-delete').on('submit', onDeletePeak)
  $('#peak-update').on('submit', onUpdatePeak)
}

module.exports = {
  addHandlers
}
