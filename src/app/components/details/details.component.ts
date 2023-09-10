import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  resourceName: string = "ايات حشيش";

  value1: number = 20;
  value2: number = 10.5;
  value3: number = 25;
  resourceType: number = 1;
  resourceTime: number = 1;
  availableTime: number = 20;
  timeUnit: any = 'يوم';
  selectedUnit: string = "يوم";
  fixedTimeValue: number = 1;
  showFixedTime: boolean = false;
  bookingType: number = 1;
  showMultiBooking: boolean = false;
  ngOnInit() {
    this.timeUnit = [
      "يوم",
      "أسبوع",
      "شهر",
      "سنة"
    ];
  }
  onResourceTypeChange(number: number) {
    this.resourceType = number;
  }
  onResourceTimeChange(number: number) {
    this.resourceTime = number;
    this.showFixedTime = this.resourceTime == 2;
  }
  onBookingTypeChange(number: number) {
    this.bookingType = number;
    this.showMultiBooking = this.bookingType == 2;
  }

}
