import axios from 'axios'


const baseURL = process.env.domain || '';



const client = axios.create({
  baseURL,
});

export default function request({ url, options }:any) {

  return client.request({
    ...options,
    url,
  }).then(({ data }) => data);
}