export function calculateTipPerPerson(
  totalPrice: number,
  tipPercentage: number,
  peopleQty: number
): number {
  // Handles infinity valiue
  if (peopleQty <= 0) {
    return 0;
  }

  const result = (totalPrice / peopleQty) * (tipPercentage / 100);
  if (!result) {
    return 0;
  }
  return result;
}

export function calculateTotalPricePerPerson(
  tipPerPerson: number,
  totalPrice: number,
  peopleQty: number
): number {
  // Handles infinity valiue
  if (peopleQty <= 0) {
    return 0;
  }

  const result = totalPrice / peopleQty + tipPerPerson;
  if (!result) {
    return 0;
  }
  return result;
}
