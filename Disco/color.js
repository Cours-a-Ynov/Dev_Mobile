function randomInRange(min,max){
  return min + Math.floor (Math.random()*(max-min));
}

export function getRandomHslColor(){
  const hue = randomInRange(0, 360);
  const saturation = randomInRange(80, 95);
  const litghness = randomInRange(50, 70);
  return `hsl(${hue}, ${saturation}%, ${litghness}%)`;
}