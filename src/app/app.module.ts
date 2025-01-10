import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ProductComponent } from './components/product/product.component';
import { BtnHoverEffectDirective } from './directives/btn-hover-effect.directive';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ShortAdvantagesPipe } from './pipes/short-advantages.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import {ProductService} from "./services/product.service";

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BenefitsComponent,
    ProductComponent,
    BtnHoverEffectDirective,
    ShortAdvantagesPipe,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
      ProductService
  ],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
