
import { RiskProfile } from './types';

export const RISK_PROFILE_CONFIG = {
  [RiskProfile.Prudent]: {
    return: 2.5,
    description: 'Sécurité avant tout. Majoritairement en fonds euros.',
    color: 'bg-sky-500',
  },
  [RiskProfile.Equilibre]: {
    return: 5.0,
    description: 'Un équilibre entre sécurité et performance.',
    color: 'bg-emerald-500',
  },
  [RiskProfile.Dynamique]: {
    return: 8.0,
    description: 'Recherche de performance, avec un risque plus élevé.',
    color: 'bg-amber-500',
  },
};

export const PFU_RATE = 0.30; // Prélèvement Forfaitaire Unique (30%)
export const PFL_AFTER_8_YEARS_RATE = 0.075 + 0.172; // 7.5% + 17.2% contributions sociales
export const TAX_ALLOWANCE_SINGLE = 4600;
export const TAX_ALLOWANCE_COUPLE = 9200;
