import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddarticleComponent } from './components/addarticle/addarticle.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

const routes: Routes = [
  { path: 'User/retrieveAllArticles', component: ArticleListComponent },
  { path: '', component: HomeComponent }, 
  { path: 'addarticle', component:AddarticleComponent } 
  //{ path: 'articles', component: ArticleListComponent }
 //404 { path: '**', component: }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
