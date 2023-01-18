import { Observable, timer } from 'rxjs';

console.log('App Started');

const timer$ = new Observable<number>((subscriber) => {
  const timeOutId = setTimeout(() => {
    console.log('Timeout!');
    subscriber.next(0);
    subscriber.complete();
  }, 2000);

  return () => clearTimeout(timeOutId);
});

const subscription = timer$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!'),
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribe');
});
