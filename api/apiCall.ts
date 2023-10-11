/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import apiToken from './apiToken'

export const postRequest = async ({ url, data } : {url:string, data: any | File | FileList} ) => {
  const response = await apiToken.post(url, data)
  return response.data
}

export const getRequest = async ({ url } : {url: string}) => {
  const response = await apiToken.get(url)
  return response.data
}
export const getSchool = async ({ url } : {url: string}) => {
  const response = await axios.get(url)
  return response.data
}

export const login = async ({ url, data }: { url: string, data: any }) => {
  const response = await axios.post(url, data)
  localStorage.setItem('easysch_token', response.data.access)
  return response.data
}
