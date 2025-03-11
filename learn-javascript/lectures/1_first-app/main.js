console.log('Hello!!!');
console.log('Hello@@', 'Hi');

// alert('홍준기');

let str = 'Hello Javascript';
let number = 30;
console.log('문자열:', str);
console.log('number:', number);

function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}

sayHello();
console.log('----------');
sayHello();

let obj = {
  number: 30, // 프로퍼티(속성)
  sayHello: function () {
    console.log('obj>Hello1');
    console.log('obj>Hello2');
    console.log('obj>Hello3');
  },
};

console.log(obj.number);
obj.sayHello;
