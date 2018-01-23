import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostListComponent } from './host-list/host-list.component';
import { NewHostComponent } from './new-host/new-host.component';

const routes: Routes = [{
	path: "", 
	component: HostListComponent
}, {
	path: "new", 
	component: NewHostComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
