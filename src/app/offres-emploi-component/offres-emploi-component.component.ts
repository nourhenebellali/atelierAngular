import { Component, NgModule, OnInit } from '@angular/core';
import { Emploi } from '../Models/Emploi';
import { ActivatedRoute, Route, Router, RouterModule, Routes } from '@angular/router';
import { NgControlStatusGroup } from '@angular/forms';


const routes: Routes =[];

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  listeEmploi!:Emploi[];
 

  
constructor(private router : Router){}
  ngOnInit()
  { 
    this.listeEmploi =[
  { reference: '123', titre: 'Développeur web', entreprise:'Focus', etat:true },
    { reference: '1023', titre: 'Analyste financier', entreprise:'Consultim-it', etat:false},
    {  reference: '185', titre: 'Ingénieur logiciel', entreprise:'Proxym', etat: false},
  {  reference: '185', titre: 'Ingenieur Cloud', entreprise:'Proxym', etat: true},
  {  reference: '185', titre: 'HR', entreprise:'Proxym', etat: true}];
}
entrepriseRecherchee: string = '';

  chercherEmploiParEntreprise() {}

calculerBilan() {
  let nbOffresNonCloturees = 0;
  for (let listeEmploi of this.listeEmploi) {
    if (listeEmploi.etat) {
      nbOffresNonCloturees++;
    }
  }
  alert("Nombre d'offres d'emploi non clôturées : " + nbOffresNonCloturees);


}




}


