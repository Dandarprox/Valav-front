import { Vue } from 'vue-property-decorator';

export interface options {
  label: string;
  value: string | number;
}

export interface formField extends options {
  type?: string;
}

export interface product {
  value: number;
  title: string;
}

export interface historyList {
  name: string;
  points: number;
  state: 'received' | 'given';
}

// Modal properties
export interface Modal extends Vue {
  hide(): void,
  show(): void,
}