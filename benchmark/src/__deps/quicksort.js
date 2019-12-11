function partition(items, left, right) {
  const pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (items[i] < pivot) i++;
    while (items[j] > pivot) j--;

    if (i <= j) {
      const tmp = items[i];
      items[i] = items[j];
      items[j] = tmp;
      i++;
      j--;
    }
  }

  return i;
}

export default function quickSort(items, left, right) {
  if (items.length > 1) {
    let index;
    
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;

    index = partition(items, left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      quickSort(items, index, right);
    }
  }

  return items;
}