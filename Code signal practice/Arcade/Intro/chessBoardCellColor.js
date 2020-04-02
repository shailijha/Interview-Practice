function chessBoardCellColor(cell1, cell2) {
  //console.log(cell1, cell2);
  let cell1color =
    (cell1.charCodeAt(0) + parseInt(cell1.charCodeAt(1))) % 2 == 0
      ? 'black'
      : 'white';
  let cell2color =
    (cell2.charCodeAt(0) + parseInt(cell2.charCodeAt(1))) % 2 == 0
      ? 'black'
      : 'white';
  return cell1color == cell2color ? true : false;
}
