import {Observable} from "rxjs";


const search$ = new Observable(observer => {
  const search = document.querySelector('#search1');

  if (!search){
    observer.error('Element does not exist on the page');
    return;
  }

  search!.addEventListener('input', event => {
    observer.next(event);
  });
});



search$.subscribe({

  next: value => {
    console.log(value);
  },
  error: err => console.log(err),

  complete: () => {
    console.log('event end');
  }

});


