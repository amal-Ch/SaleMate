import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../Model/Article';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  //const myMap = Map();

  private usersUrl: string;
 
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.usersUrl = 'http://localhost:8099/User';
  }
  

  
  getArticleImage(articleId: number): Observable<Blob> {
    return this.http.get(this.usersUrl + `/article/${articleId}/image`, { responseType: 'blob' });
  }

  // getArticleImageUrl(articleId: number): Observable<SafeUrl> {
  //   return this.getArticleImage(articleId).pipe(Map(Blob => URL.createObjectURL(blob)));
  // }
  getArticleImageUrl(articleId: number): Observable<SafeUrl> {
    const myMap = new Map<number, string>(); // Declare and initialize the Map
  
    if (myMap.has(articleId)) {
      return of(myMap.get(articleId)!);
    } else {
      return this.getArticleImage(articleId).pipe(
        map((blob: Blob) => {
          const url = URL.createObjectURL(blob);
          myMap.set(articleId, url); // Store the URL in the Map
          return url;
        })
      );
    }
  }

  public findAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.usersUrl+"/retrieveAllArticles");
  }

  public save(article: Article) {
    return this.http.post<Article>(this.usersUrl+"/addArticle", article);
  }
}
