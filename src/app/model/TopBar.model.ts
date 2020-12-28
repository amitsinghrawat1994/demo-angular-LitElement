export type StatusTap = 'visited' | 'active' | 'inactive';

export interface ITopNavbarStep {
  id?: string;
  href?: string;
  tabindex?: number;
  value: string;
}

export interface ITopNavBar {
  disabled: boolean;
  steps: ITopNavbarStep[];
  selectIndex: number;
}
