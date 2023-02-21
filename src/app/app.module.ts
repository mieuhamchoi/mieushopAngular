import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // dùng để các thứ liên quan tới form
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from './modules/carousel/carousel.module';
import { HeaderComponent } from './components/home/header/header.component';
import { BodyComponent } from './components/home/body/body.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
