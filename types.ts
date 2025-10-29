
export enum RiskProfile {
  Prudent = 'Prudent',
  Equilibre = 'Équilibré',
  Dynamique = 'Dynamique',
}

export interface SimulationParams {
  initialInvestment: number;
  monthlyContribution: number;
  duration: number;
  annualReturn: number;
  riskProfile: RiskProfile;
}

export interface ChartDataPoint {
  year: number;
  totalInvested: number;
  totalGains: number;
  totalCapital: number;
}
