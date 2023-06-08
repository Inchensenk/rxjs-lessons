import {Observable} from "rxjs";


const search$ = new Observable(observer => {
  const search = document.querySelector('#search');

  if (!search){
    observer.error('Element does not exist on the page');
    return;
  }

  search!.addEventListener('input', event => {
    observer.next(event);
    observer.complete();
  });
});


search$.subscribe({

  next: value => {
    console.log(value);
  },

  complete: () => {
    console.log('event end');
  }

});


