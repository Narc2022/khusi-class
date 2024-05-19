let obj = {
  name: "khushi",
  age: 21,
  gender: "female",
};

function Person(name, age, gender) {
  (this.name = name), (this.age = age), (this.gender = gender);
}

// const MyFriend = new Person("Khushi", 21, "Female");

const dear = new Person("Sachin", "25", "Male");
// console.log("Object.key(dear)", Object.keys(dear));
// console.log("dear", dear); // { name: 'Sachin', age: '25', gender: 'Male' }

console.log("Object.key(dear)", Object.keys(dear));

Object.keys(dear).forEach((key) => {
  console.log(dear[key]);
});

// console.log("obj", obj);
// console.log(dear);
// console.log(MyFriend);
