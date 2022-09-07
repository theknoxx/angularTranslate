import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTranslate';
  name: any = "Abhishek";
  langName: any;
  constructor(public translate:TranslateService){
    translate.addLangs(['en','hi']);
    translate.setDefaultLang('en');
  }
  ngOnInit():void{
  }
  switchLang(lang: string){    
    this.translate.use(lang);
  }
  simpleLang(lang:string){
    if(lang === 'en'){
      this.langName = 'English'
    }else if(lang === 'hi'){
      this.langName = 'हिन्दी'
    }
    return this.langName
  }
}
