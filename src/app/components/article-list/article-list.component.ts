import { Component, OnInit } from '@angular/core';
import { Article } from '../../Model/Article';
import { ArticleService } from 'src/app/Service/article.service';
import { Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';import { DomSanitizer } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles!: Article[];
  constructor(private articleService: ArticleService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.articleService.findAll().subscribe(data => {
      
      this.articles = data;
    });
  }

  getArticleImageUrl(articleId: number): Observable<SafeUrl> {
    return this.articleService.getArticleImageUrl(articleId);
  }


  getData(baseImage:any){
    console.log(baseImage)

    let objectURL = 'data:image/jpeg;base64,' + baseImage;

  return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
