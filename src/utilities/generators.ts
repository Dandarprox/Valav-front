import { options } from '@/types/general';

export function generateOptions(array: string[]) {
  const options: options[] = [];
  array.forEach(option => options.push({ label: option, value: option}));

  return options;
}