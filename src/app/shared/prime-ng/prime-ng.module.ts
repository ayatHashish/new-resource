import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {AvatarModule} from "primeng/avatar";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CardModule } from 'primeng/card';
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {RadioButtonModule} from "primeng/radiobutton";
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { BadgeModule } from 'primeng/badge';
import { FileUploadModule } from 'primeng/fileupload';
import { ColorPickerModule } from 'primeng/colorpicker';
const primeNgModules = [
  InputSwitchModule,
  MenubarModule,
  ButtonModule,
  ToggleButtonModule,
  InputSwitchModule,
  AvatarModule,
  OverlayPanelModule,
  CardModule,
  InputNumberModule,
  DropdownModule ,
  CalendarModule,
  RadioButtonModule,
  InputTextModule,
  CheckboxModule,
  BadgeModule,
  FileUploadModule,
  ColorPickerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...primeNgModules,
  ],
  exports: [
    ...primeNgModules
  ],
})
export class PrimeNgModule { }
