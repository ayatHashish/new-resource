import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLanguage: string = 'ar';
  textDirection = 'rtl';
   constructor(private translate: TranslateService) {
    translate.setDefaultLang('ar');
    translate.use(this.currentLanguage);
    if (this.currentLanguage === 'ar') {
            document.documentElement.dir = "rtl";
      this.textDirection = 'rtl';
    }
  }
  switchLanguage(language: string) {
    this.translate.use(language);

    if (language === 'en') {
      document.documentElement.dir = "ltr";
      // this.textDirection = 'ltr';
    } else {
      document.documentElement.dir = "rtl";
      // this.textDirection = 'rtl';
    }

  }
}
