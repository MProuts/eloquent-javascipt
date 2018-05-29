module.exports = {
  chessBoard: chessBoard,
  row: row
}

function chessBoard(size=8) {
  result = "";
  for(i=1; i<=size; i++) {
    result += row(i, size) + "\n";
  }
  return result;
}

function row(index, size) {
  if (index % 2 == 1) {
    return oddRow(size);
  } else {
    return evenRow(size);
  }
}

function oddRow(size) {
  result = " #".repeat(size/2);
  if (size % 2 == 1) {
    result += " ";
  }
  return result;
}

function evenRow(size) {
  result = "# ".repeat(size/2);
  if (size % 2 == 1) {
    result += "#";
  }
  return result;
}

