import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
 @Input() articles: Article[];

  constructor() { 
       this.articles =[
         new Article('Angular 2','https://angular.io',3),
         new Article('Fullstack','https://fullstack.io',2),
         new Article('Angular Homepage','https://angular.io',1),
       ];
         }
       
  ngOnInit(): void {
  }
sortedArticles():Article[]{
  return this.articles.sort((a:Article,b:Article)=> b.votes -a.votes);
}
}
