import { Component, OnInit } from '@angular/core';
import { Article } from '../Models/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})


export class ArticlesComponent implements OnInit{

  titre = 'Les Articles du jour';


  listeArticles!:Article[];
  articleCount!: number;
  filteredList!: Article[];

ngOnInit(){

  
  this.listeArticles=[
    {titre:"le championnat du monde " , 
    contenu : "le champion du monde de cette année est  ", 
    auteur: ' Med Taher ',
     date: '12/12/2005',
     categorie : 'Sport '},

     {titre:"Course " , 
     contenu : " Athlete ", 
     auteur: ' Med Taher ',
      date: '12/12/2005',
      categorie : 'Sport '},
    
   
    {titre: 'les nouveaux parents' ,
     contenu:'Les nouveaux parents' ,
      auteur: 'Ahmed Said', 
      date: '11/11/2018', 
      categorie : 'Education'},
   
   
    {titre: 'Comment ecrire votre CV ' , 
    contenu:'Pour reussire a decroucher un emploi ' ,
     auteur: 'Marie Elsa ', date: '02/04/2017',
      categorie : 'Travail'},
    
    
      {titre: 'Entretien Validée' ,
      contenu:'Comment reussir un entretien' ,
       auteur: 'Inconnu', 
       date: '11/11/2018', 
       categorie : 'Education'}];


    this.articleCount = this.listeArticles.length;

    this.filteredList = this.listeArticles;
  }

  onArticleCountChange() {
    this.filteredList = this.listeArticles.slice(0, this.articleCount);
  }
  }




