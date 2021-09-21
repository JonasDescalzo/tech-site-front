import request from 'src/api/request'

const transactionApi = {
    GetAllPhones: '/api/phones/get-all-phones/',
}
  
export function getAllPhones (parameter) {
  return request({
    url: transactionApi.GetAllPhones,
    method: 'get',
    data: parameter,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}