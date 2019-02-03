import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthcheckRoutingModule } from './healthcheck-routing.module';
import { HealthComponent } from './health/health.component';

@NgModule({
  declarations: [HealthComponent],
  imports: [
    CommonModule,
    HealthcheckRoutingModule
  ],exports:[HealthComponent]
})
export class HealthcheckModule { }
