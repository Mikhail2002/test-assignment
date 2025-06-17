import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';

@NgModule({
  declarations: [NavbarComponent, AccountHeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
