function bishopAndPawn(bishop, pawn) {
  if (
    Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) ==
    Math.abs(parseInt(bishop[1]) - parseInt(pawn[1]))
  )
    return true;
  else return false;
}
