// bind method in javascript

const customer = {
  name: "sumanta das",
  age: 400,
  detail: function () {
    console.log(`my name is ${this.name} and my age ${this.age}`);
  },
};

//binding detail function to new function for future use

let mynewfun = customer.detail.bind(customer);

mynewfun();

//separetly use bind

const customer1 = {
  name: "sumanta das",
  age: 400,
};
const customer2 = {
  name: "ranjan das",
  age: 400,
};
const customer3 = {
  name: "akash das",
  age: 400,
};

function commonfun() {
  console.log(`my name is ${this.name} and my age ${this.age}`);
}

const newfun = commonfun.bind(customer1);
const newfun1 = commonfun.bind(customer2);
const newfun2 = commonfun.bind(customer3);

newfun();
newfun1();
newfun2();