module.exports = logTriangle;

function logTriangle(height) {
  for (n=0; n<height; n++) {
    console.log("#".repeat(n+1));
  }
}

// logTriangle(5);
