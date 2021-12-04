'use strict'

const onCreateSuccess = function (formData) {
  $('#message').text('Peak successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')

  const peak = formData.peak
  console.log(formData)

  // create the html to display a single peak
  const peakHtml = `
    <div>
    <h6>You Successfully added a peak!</h6>
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

  const peaks = formData.peak
  console.log(formData)

  // create the html to display all the peaks created
  let peakHtml = ''
  peaks.forEach(peak => {
    peakHtml += `
    <div>
    <h6>You Successfully added a peak!</h6>
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

const onShowSuccess = function (formData) {
  $('#message').text('One Peak successfully displayed')
  $('#message').removeClass()
  $('#message').addClass('success')

  $('form').trigger('reset')
  console.log('onShowSuccess ran. Data is :', formData)
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting peak')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const onDeleteSuccess = function (formData) {
  $('#message').text('Peak successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')

  const peaks = formData.peak
  const id = peaks.id
  peaks.findById(id)

  $('form').trigger('reset')
  console.log('Peak successfully deleted')
}

const onDeleteFailure = function (error) {
  $('#message').text('Error on deleting peak')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Peak successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')

  $('form').trigger('reset')
  console.log('Peak successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating peak')
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
  onUpdateFailure
}
