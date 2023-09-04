const user = {
  id: 1,
  name: "John",
  age: 25,
};


const userJSON = JSON.stringify(user);

localStorage.setItem('user', userJSON);
