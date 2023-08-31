// Function to calculate the generation number
function tsToGen(ts) {
  const baseTime = 1675084800;
  const divisor = 3300;
  return Math.pow(1.0002, (ts - baseTime) / divisor);
}
