import {Observable} from "rxjs";


const search$ = new Observable(observer => {
  console.log('Start in observable');
  const search = document.querySelector('#search');
  search!.addEventListener('input', event => {
    observer.next(event);
  })
  console.log('End in observable');
});

console.log('Start subscribe');
search$.subscribe(value =>{
  console.log(1);
  console.log(value);
});

search$.subscribe(value =>{
  console.log(2);
  console.log(value);
});
console.log('End subscribe');
