import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { DetailsComponent } from './components/details/details.component';
import { HoursComponent } from './components/hours/hours.component';
import { DayComponent } from './components/hours/day/day.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NewResourceComponent } from './components/new-resource/new-resource.component';
import { NameResourceComponent } from './components/details/name-resource/name-resource.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HoursComponent,
    DayComponent,
    NewResourceComponent,
    NameResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimeNgModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'ar',
      useDefaultLang: true,
      isolate: true,
      extend: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
