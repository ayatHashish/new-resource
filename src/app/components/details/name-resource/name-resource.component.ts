import { Component } from '@angular/core';

@Component({
  selector: 'app-name-resource',
  templateUrl: './name-resource.component.html',
  styleUrls: ['./name-resource.component.scss']
})
export class NameResourceComponent {
  resourceName: string = "ايات حشيش";
  resourceType: number = 1;
  resourceTime: number = 1;
  showFixedTime: boolean = false;

  onResourceTypeChange(number: number) {
    this.resourceType = number;
  }
  onResourceTimeChange(number: number) {
    this.resourceTime = number;
    this.showFixedTime = this.resourceTime == 2;
  }
}
