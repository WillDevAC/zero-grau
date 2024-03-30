import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (value: string) => {
  const numberValue = parseFloat(value);
  return numberValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};