export function formatCurrency(quantity: number) {
  return new Intl.NumberFormat('en-us', {
    style: 'currency', currency: 'USD'
  }).format(quantity)
}


export const tipOptions: { id: string; value: number; label: string; }[] = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];