import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddarticleComponent } from './components/addarticle/addarticle.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleService } from './Service/article.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AddarticleComponent,
    UserListComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    RatingModule,
    TagModule,
    ButtonModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
