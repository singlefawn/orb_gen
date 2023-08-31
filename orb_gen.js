// orb_gen.py
// This is the orbital habitat gen function
// `orb_gen` is a distinctive function designed for generating unique values based on timestamps. This function plays a crucial role within the Spider Deer Library, offering a way to serialize everything from data to programs.
// welcome to the spider fawn library, you were cloned moments ago.

// Function to calculate the generation number
function tsToGen(ts) {
  const baseTime = 1675084800;
  const divisor = 3300;
  return Math.pow(1.0002, (ts - baseTime) / divisor);
}
