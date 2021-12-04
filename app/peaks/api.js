'use strict'

const config = require('../config')

const store = require('../store')

const create = function (formData) {
  console.log('formData: ', formData)
  return $.ajax({
    url: config.apiUrl + '/peaks',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
    // data: data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/peaks',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = function (peak) {
  return $.ajax({
    url: config.apiUrl + '/peaks/' + peak.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/peaks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/peaks/' + formData.peak.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
    // data: data
  })
}

module.exports = {
  create,
  index,
  show,
  destroy,
  update
}
