'use strict'

const store = require('../store')

const onCreateSuccess = function (formData) {
  $('#message').text('Peak successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').fadeOut(5000)

  const peak = formData.peak
  console.log(formData)

  // create the html to display a single peak
  const peakHtml = `
    <div>
      <h4>Name: ${peak.name}</h4>
      <p>Elevation: ${peak.elevation}</p>
      <p>Length: ${peak.length}</p>
      <p>Hike-Time: ${peak.hike_time}</p>
      <p>Difficulty: ${peak.difficulty}</p>
      <p>ID: ${peak._id}</p>
    </div>
  `

  $('#peak-display').html(peakHtml)
  $('form').trigger('reset')

  console.log('onCreateSuccess ran. Data is :', formData)
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating peak')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (formData) {
  $('#message').text('All Peaks successfully displayed')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').fadeOut(5000)

  const peaks = formData.peak
  console.log(formData)

  // create the html to display all the peaks created
  let peakHtml = ''
  peaks.forEach(peak => {
    peakHtml += `
    <div>
      <h4>Name: ${peak.name}</h4>
      <p>Elevation: ${peak.elevation}</p>
      <p>Length: ${peak.length}</p>
      <p>Hike-Time: ${peak.hike_time}</p>
      <p>Difficulty: ${peak.difficulty}</p>
      <p>ID: ${peak._id}</p>
    </div>
  `
  })
  $('#peak-display').html(peakHtml)

  $('form').trigger('reset')
  console.log('onIndexSuccess ran. Data is :', formData.peaks)
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting peaks')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onUserIndexSuccess = function (responseData) {
  const peaks = responseData.peaks
  const user = store.user._id
  let counter = 1
  let peaksHtml = ''

  for (let i = 0; i < peaks.length; i++) {
    if (peaks[i].owner === user) {
      let peak = []
      peak = `<div>
        <h4>ID: ${peaks[i]._id}</h4>
        <p>Peak: ${counter}</p>
        <p>Name: ${peaks[i].name}</p>
        <p>Elevation: ${peaks[i].elevation}</p>
        <p>Length: ${peaks[i].length}</p>
        <p>Hike-Time: ${peaks[i].hike_time}</p>
        <p>Difficulty: ${peaks[i].difficulty}</p>
      </div>
      `

      peaksHtml += peak
      counter++
    }
  }
  $('#peak-display').html(peaksHtml)
}

const onUserIndexFailure = function (error) {
  $('#message').text('Failed to find posts!!')
  $('#message').removeClass()
  $('#message').addClass('text-danger')

  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('text-danger')
  }, 5000)

  console.error(error)
}

const onShowSuccess = function (formData) {
  $('#message').text('One Peak successfully displayed')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').fadeOut(5000)

  const peak = formData.peak
  console.log(formData)

  // create the html to display a single peak
  const peakHtml = `
    <div>
      <h4>Name: ${peak.name}</h4>
      <p>Elevation: ${peak.elevation}</p>
      <p>Length: ${peak.length}</p>
      <p>Hike-Time: ${peak.hike_time}</p>
      <p>Difficulty: ${peak.difficulty}</p>
      <p>ID: ${peak._id}</p>
    </div>
  `

  // for the div with the id peaks-display,
  // set its html to be our peak's html
  $('#peak-display').html(peakHtml)

  $('form').trigger('reset')

  console.log('onShowSuccess ran. Data is :', formData)
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting peak. Please enter a valid id')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const onDeleteSuccess = function (title = 'Peak') {
  $('#peak-display').text(`${title} was deleted successfully`)
  $('#peak-display').addClass('text-success')

  setTimeout(() => {
    $('#peak-display').html('')

    $('#peak-display').removeClass('text-success')
  }, 5000)

  $('form').trigger('reset')
  console.log('Peak successfully deleted')
}

const onDeleteFailure = function (error) {
  $('#message').text('Error on deleting peak. Please enter a valid id')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Peak successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')

  $('#peak-display').text('Peak was updated successfully')
  $('#peak-display').addClass('text-success')

  // after 5 seconds (5000 milliseconds), run our callback function
  setTimeout(() => {
    // remove the message from peaks-display
    $('#peak-display').html('')
    // remove the green color caused by `text-success`
    $('#peak-display').removeClass('text-success')
  }, 5000)

  $('form').trigger('reset')
  console.log('Peak successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating peak. Please try again')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDeleteSuccess,
  onDeleteFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onUserIndexSuccess,
  onUserIndexFailure
}
