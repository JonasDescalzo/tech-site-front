import request from 'src/api/request'

const phoneApi = {
    GetAllPhones: '/api/phones/get-all-phones/',
    GetPhone: '/api/phones/get-phone-by-id/',
    AddPhone: '/api/phones/add-phone/',
    DeletePhone: '/api/phones/delete-phone/',
    UpdatePhone: '/api/phones/update-phone-by-id/',
}

const brandApi = {
  GetBrands: '/api/brands/get-brands/'
}
  
//Phone endpoints
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

export function getPhoneById (parameter) {
  return request({
    url: phoneApi.GetPhone + parameter,
    method: 'get',
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

export function updatePhoneById (phoneData, id) {
  return request({
    url: phoneApi.UpdatePhone + id,
    method: 'post',
    data: phoneData,
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

//Brand endpoints
export function getBrands (parameter) {
  return request({
    url: brandApi.GetBrands,
    method: 'get',
    data: parameter,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
