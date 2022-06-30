export function getRandom(number) {
  return Math.floor(Math.random() * number);
}

export function getRandomMinMax(min = 0, max = 100) {
  if (min >= max) throw new Error('min 값이 max 값과 같거나, 큽니다.');
  return getRandom(max - min) + min;
}
