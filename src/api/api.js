import request from 'src/api/request'

const phoneApi = {
    GetAllPhones: '/api/phones/get-all-phones/',
    AddPhone: '/api/phones/add-phone/',
    DeletePhone: '/api/phones/delete-phone/',
}
  
export function getAllPhones (parameter) {
  return request({
    url: phoneApi.GetAllPhones,
    method: 'get',
    data: parameter,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function addPhone (parameter) {
  return request({
    url: phoneApi.AddPhone,
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function deletePhoneById (parameter) {
  return request({
    url: phoneApi.DeletePhone + parameter,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}