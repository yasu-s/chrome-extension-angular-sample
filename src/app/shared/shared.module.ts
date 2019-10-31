import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCardModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTabsModule],
  exports: [CommonModule, MatButtonModule, MatCardModule, MatTabsModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
