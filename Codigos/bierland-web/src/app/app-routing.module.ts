import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPubsComponent } from './pubs/list-pubs/list-pubs.component';
import { NewPubComponent } from './pubs/new-pub/new-pub.component';
import { ListBeersComponent } from './beers/list-beers/list-beers.component';
import { DetailBeerComponent } from './beers/detail-beer/detail-beer.component';
import { BeerNotExistGuard } from './beers/guards/beer-not-exist.guard';

const routes: Routes = [
  { path: 'pubs', component: ListPubsComponent },
  { path: 'new-pub', component: NewPubComponent },
  { path: 'beers', component: ListBeersComponent },
  { path: 'detail-beer/:id', component: DetailBeerComponent, canActivate: [BeerNotExistGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
