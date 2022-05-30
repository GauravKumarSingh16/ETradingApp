import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from 'src/app/components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRegistrationComponent } from './components/registration/registration/registration.component';
import { BusinessOwnersRegistrationComponent } from './components/business-owners-registration/business-owners-registration.component';
import { SharesComponent } from './components/shares/shares.component';
import { ShowsharesComponent } from './components/showshares/showshares.component';
// import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerRegistrationComponent,
    BusinessOwnersRegistrationComponent,
    SharesComponent,
    ShowsharesComponent,
    // PaymentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
