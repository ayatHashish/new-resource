import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Person {
  name: string;
  surname: string;
  age: number;
  days: any[];
}
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private Person: Person = {
    name: 'John',
    surname: 'Doe',
    age: 25,
   days: [
     {
        day: 'السبت',
        times: []
     },
      {
        day: 'الأحد',
        times: []
      },
      {
        day: 'الاثنين',
        times: []
      },
      {
        day: 'الثلاثاء',
        times: []
      },
      {
        day: 'الأربعاء',
        times: []
      },
      {
        day: 'الخميس',
        times: []
      },
      {
        day: 'الجمعة',
        times: []
      }
     ]
 }

 private stateManger = new BehaviorSubject(this.Person);

 public getDays() {
    return this.stateManger.value.days;
 }
 public setDayTimes(day: string, times: any[]) {
  const person = this.stateManger.getValue();
  const days = person.days.map(x => {
    if (x.day === day) {
      x.times = times;
    }
    return x;
  });
  this.stateManger.next({...person, days});
}

}
