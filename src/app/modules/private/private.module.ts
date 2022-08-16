import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EditComponent } from './pages/edit/edit.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderModule } from '@shared/components/header/header.module';
import { MattersModule } from '@shared/components/matters/matters.module';


@NgModule({
  declarations: [
    HomeComponent,
    EditComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HeaderModule,
    MattersModule
  ]
})
export class PrivateModule { }
