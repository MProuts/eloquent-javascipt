module.exports = logTriangle;

function logTriangle(height) {
  result = "";
  for (n=0; n<height; n++) {
    result += `${"#".repeat(n+1)}\n`;
  }
  return result;
}
