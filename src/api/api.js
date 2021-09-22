import request from 'src/api/request'

const phoneApi = {
    GetAllPhones: '/api/phones/get-all-phones/',
    AddPhone: '/api/phones/add-phone/',
    /* TestPost: '/api/phones/test-post/', */
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

/* export function testPost (parameter) {
  return request({
    url: phoneApi.TestPost,
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json'
    }
  })
} */