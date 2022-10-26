import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {

  produits : Produit[] | undefined; //un tableau de Produit
  supprimerProduit(p: Produit)
  {
  //console.log(p);
  let conf = confirm("Etes-vous sur ?")
  if (conf)
  this.produitService.supprimerProduit(p);
  }
  constructor(private produitService: ProduitService) {{
    this.produits = produitService.listeProduits();}
     

      
 
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

