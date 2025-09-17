export interface QRScanResult {
  text: string;
  format?: string;
}

export interface GaugeState {
  value: number;
  maxValue: number;
  color: string;
}

export type PageType = 'scanner' | 'gauge' | 'landing';

export interface RouteParams {
  type?: PageType;
}