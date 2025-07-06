import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { SharedModule } from '../shared/shared.module';
import { NeedsAttentionComponent } from './widgets/needs-attention/needs-attention.component';
import { WinnabilityComponent } from './widgets/performance-metrics/winnability/winnability.component';
import { LossRatioComponent } from './widgets/performance-metrics/loss-ratio/loss-ratio.component';
import { PremiumGrowthComponent } from './widgets/performance-metrics/premium-growth/premium-growth.component';
import { ExposureDistributionComponent } from './widgets/performance-metrics/exposure-distribution/exposure-distribution.component';
import { PoliciesComponent } from './widgets/policies/policies.component';
import { AccountStatusComponent } from './widgets/account-status/account-status.component';
import { ComplianceAndDocumentationComponent } from './widgets/compliance-and-documentation/compliance-and-documentation.component';
import { CommunicationComponent } from './widgets/communication/communication.component';
import { PoliciesTableComponent } from './widgets/policies-table/policies-table.component';
import { AccountDetailsComponent } from './widgets/account-details/account-details.component';
import { OverallScoreComponent } from './widgets/account-details/winnability-tab/overall-score/overall-score.component';
import { HistoricalTrendComponent } from './widgets/account-details/winnability-tab/historical-trend/historical-trend.component';
import { PositionComponent } from './widgets/account-details/winnability-tab/position/position.component';
import { IncreasingWinnabilityComponent } from './widgets/account-details/winnability-tab/increasing-winnability/increasing-winnability.component';
import { DecreasingWinnabilityComponent } from './widgets/account-details/winnability-tab/decreasing-winnability/decreasing-winnability.component';
import { AiPoweredRecommendationsComponent } from './widgets/account-details/winnability-tab/ai-powered-recommendations/ai-powered-recommendations.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AccountsComponent,
    NeedsAttentionComponent,
    WinnabilityComponent,
    LossRatioComponent,
    PremiumGrowthComponent,
    ExposureDistributionComponent,
    PoliciesComponent,
    AccountStatusComponent,
    AccountDetailsComponent,
    ComplianceAndDocumentationComponent,
    CommunicationComponent,
    PoliciesTableComponent,
    OverallScoreComponent,
    HistoricalTrendComponent,
    PositionComponent,
    IncreasingWinnabilityComponent,
    DecreasingWinnabilityComponent,
    AiPoweredRecommendationsComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class AccountsModule {}
