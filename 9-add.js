function add(a, b) {
  console.log(a + b);
}

// Example usage with command-line arguments:
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
add(a, b);
