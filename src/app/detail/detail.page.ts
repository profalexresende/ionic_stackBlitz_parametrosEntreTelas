import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {

  nome: string;
  telefone: string;
  email: string;
  
  constructor(private router: Router, private activatedRoute:ActivatedRoute) {}

  goBack() {
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    this.nome=this.activatedRoute.snapshot.paramMap.get('nome');
    this.email=this.activatedRoute.snapshot.paramMap.get('email');
    this.telefone=this.activatedRoute.snapshot.paramMap.get('telefone');
  }

  ngOnDestroy() {
    // Likewise, this will may not consistently fire when you navigate away
    // from the component
    console.log("DetailPage - OnDestroy")
  }
    
  // However, Ionic provides lifecycle hooks of its own that
  // will fire consistently during route navigation

  ionViewWillEnter() {
    // This method will be called every time the component is navigated to
    // On initialization, both ngOnInit and this method will be called

    console.log("DetailPage - ViewWillEnter")
  }

  ionViewWillLeave() {
    // This method will be called every time the component is navigated away from
    // It would be a good method to call cleanup code such as unsubscribing from observables

    console.log("DetailPage - ViewWillLeave")
  }

}
