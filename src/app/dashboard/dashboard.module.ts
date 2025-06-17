import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkQueueComponent } from './widgets/work-queue/work-queue.component';
import { PortfolioGoalsComponent } from './widgets/portfolio-goals/portfolio-goals.component';
import { QuickActionsComponent } from './widgets/quick-actions/quick-actions.component';
import { MyAccountsComponent } from './widgets/my-accounts/my-accounts.component';



@NgModule({
  declarations: [
    DashboardComponent,
    WorkQueueComponent,
    PortfolioGoalsComponent,
    QuickActionsComponent,
    MyAccountsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
