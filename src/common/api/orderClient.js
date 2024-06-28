import axiosClient from "./axiosClient";

const BASE_PATH = '/mall/api/v1/orders'

const getHeaderWithToken = () => {
  const token = localStorage.getItem("token")
  return {
    "Authorization": token
  }
}

export const order = (username) => {
  return axiosClient.post(
      BASE_PATH,
      {
        username: username
      },
      {
        headers: getHeaderWithToken()
      }
  )
}
