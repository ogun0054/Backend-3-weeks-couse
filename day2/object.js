const user = {
  name: "Aisha Ismail",
  age: "3 Months",
  country: "Canada",
  address: {
    city: "Ottawa",
    province: "Ontario",
    street: "Corley Private",
  },
};

for (let key in user) {
  console.log(key, "=>", user[key]);
}

console.log(Object.keys(user));
console.log(Object.values(user));

// Gwt both keys and the values
console.log(Object.entries(user));

//Cloning an object using assign

const newUser = Object.assign({}, user);
console.log(newUser);

const newUser1 = Object.assign({}, user, { role: "Develpoer" });
console.log(newUser1);
