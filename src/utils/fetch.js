import fetch from 'isomorphic-unfetch';
import axios from 'axios';

export const get = async url => {
  try {
    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const post = async (url, payload) => {
  try {
    const response = await fetch(url, { 
      method: 'post',
      body: JSON.stringify(payload),
      headers: new Headers({
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${payload._boundary}`,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const axiosPost = async (url, payload) => {
  const response = await axios({
    method: 'POST',
    url: url,
    data: payload,
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data; boundary=${payload._boundary}`,
    },
  })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log('axios error:', e);
    });

  return response;
};

