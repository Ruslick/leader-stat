const email =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const username = /^[a-z0-9_-]{3,16}$/;
const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default {
  email,
  username,
  password,
};
