// 1) li get 메서드
let title = document.getElementById('title');
console.log(title);
title.textContent = '헬스 3대 운동';

let items = document.getElementsByClassName('item');
console.log(items);
console.log('스쿼트:', items[0]);
console.log('벤치프레스:', items[1]);
console.log('데드리프트:', items[2]);

let lilist = document.getElementsByTagName('li');
console.log(lilist);
// 2) HTML 요소 쿼리
let h2 = document.querySelector('#title');
console.log('h2:', h2);

let item = document.querySelector('.item');
console.log('query item:', item);

let itemAll = document.querySelectorAll('.item');
console.log('query item all:', itemAll);
console.log('query item all[0]:', itemAll[0]);
console.log('query item all[1]:', itemAll[1]);
console.log('query item all[2]:', itemAll[2]);

h2.textContent = '<span>운동!!!</span>';

// h2.innerHTML = '<span>운동@@</span>';

// document.querySelector('body').innerHTML = '운동!!';

let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요!');
input.setAttribute('required', '');
input.removeAttribute('placeholder');
input.removeAttribute('required');

let helloItem = document.querySelector('.hello');
console.log('helloItem:', helloItem);
// helloItem.style.color = 'blue';
// helloItem.style.backgroundColor = 'black';

helloItem.classList.add('dark', 'one');
helloItem.classList.remove('dark');
