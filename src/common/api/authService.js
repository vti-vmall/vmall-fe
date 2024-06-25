import axiosClient from "./axiosClient";

const BASE_PATH = '/user/api/v1/auth'

export const register = ({username, password, email}) => {
  return axiosClient.post(
      BASE_PATH + '/register',
      {
        username,
        password,
        email
      }
  )
}


export const login = (data) => {
  return axiosClient.post(
      BASE_PATH + '/login',
      data
  )
}
