class Usr {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  function(name, age) {
    //   this.name = name;
    //   this.age = age;
    console.log(this.name);
  }
}
const newUsr = new Usr("John", 30);
// const newUsr = new Usr("John", 30);
console.log(newUsr.__proto__);
