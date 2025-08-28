import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date)
}

export function calculateMonthlyRevenue(gyms: number, avgMembers: number): number {
  const basePrice = 149; // per gym
  const memberPrice = 3; // per member
  return (gyms * basePrice) + (gyms * avgMembers * memberPrice);
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}