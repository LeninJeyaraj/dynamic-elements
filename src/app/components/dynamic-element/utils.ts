export function setClass(element) {
  if (!element) {
    element = 'input';
  }
  if (element === 'input') {
    return 'curosr: pointer';
  } else if (element === 'multi-select') {
    return {};
  } else if (element === 'text-area') {
    return {};
  } else if (element === 'date') {
    return {};
  }
  return {};
}
