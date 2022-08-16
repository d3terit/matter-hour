import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OauthGuard } from '@core/guard/oauth.guard';
import { UnloginGuard } from '@core/guard/unlogin.guard';
import { HomeComponent } from './pages/home/home.component';
import { MatterComponent } from './pages/matter/matter.component';
import { MemberComponent } from './pages/member/member.component';
import { OauthlinkComponent } from './pages/oauthlink/oauthlink.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'oauthlink',
    component: OauthlinkComponent,
    canActivate: [OauthGuard],
  },
  { path: 'member', component: MemberComponent },
  { path: 'matter/:matter', component: MatterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
