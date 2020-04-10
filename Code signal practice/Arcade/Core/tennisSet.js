function tennisSet(score1, score2) {
  let valid_scores = [1, 2, 3, 4];
  let valid_scores2 = [5, 6];
  //console.log(score1 === 7 && valid_scores2.indexOf(score2) > -1);

  if (Math.max(score1, score2) < 6) return false;
  else if (score1 > 7 || score2 > 7) return false;
  else if (
    (score1 === 6 && valid_scores.indexOf(score2) > -1) ||
    (score2 === 6 && valid_scores.indexOf(score1) > -1)
  )
    return true;
  else if (
    (score1 === 7 && valid_scores2.indexOf(score2) > -1) ||
    (score2 === 7 && valid_scores2.indexOf(score1) > -1)
  )
    return true;
  return false;
}
