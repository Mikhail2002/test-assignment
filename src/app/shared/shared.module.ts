import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { RouterModule } from '@angular/router';
import { StatusClassPipe } from './pipes/status-class.pipe';

@NgModule({
  declarations: [NavbarComponent, AccountHeaderComponent, StatusClassPipe],
  imports: [CommonModule, RouterModule],
  exports: [AccountHeaderComponent, NavbarComponent, StatusClassPipe],
})
export class SharedModule {}
