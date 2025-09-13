const size = process.argv[2];

if (!size || isNaN(parseInt(size))) {
  console.log("Missing size");
} else {
  const n = parseInt(size);
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      line += "X";
    }
    console.log(line);
  }
}
