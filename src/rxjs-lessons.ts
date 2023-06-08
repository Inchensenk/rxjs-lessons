import {Observable} from "rxjs";
import {debounce, debounceTime} from "rxjs/operators";
import {map} from "rxjs/operators"

const search$ = new Observable<Event>(observer => {
  const search = document.querySelector('#search');

  if (!search){
    observer.error('Element does not exist on the page');
    return;
  }

  search!.addEventListener('input', event => {
    observer.next(event);
  });
});


search$.pipe(
  map(event => {
    return (event.target as HTMLInputElement).value;
  }),
  debounceTime(500))
  .subscribe(  value => {
  console.log(value);

});


