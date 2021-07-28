import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = axios.post(baseUrl, newObject, config);
  return request.then((response) => response.data);
};

const plusOneLike = (object) => {
  const config = {
    headers: { Authorization: token },
  };
  // console.log(object.id);
  const request = axios.put(`${baseUrl}/${object.id}`, object, config);
  return request.then((response) => response.data);
};

const deleteBlog = (object) => {
  const config = {
    headers: { Authorization: token },
  };
  // console.log(object.id);
  const request = axios.delete(`${baseUrl}/${object.id}`, config);
  return request.then((response) => {
    console.log('respesta delete', response);
    return response.data;
  });
};

export default { getAll, setToken, create, plusOneLike, deleteBlog };
