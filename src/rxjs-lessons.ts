import {Observable} from "rxjs";


const search$ = new Observable(observer => {
  const search = document.querySelector('#search');

  search!.addEventListener('input', event => {
    observer.next(event);
  });
});


search$.subscribe(value =>{
  console.log(value);
});

search$.subscribe(value =>{
  console.log(value);
});

