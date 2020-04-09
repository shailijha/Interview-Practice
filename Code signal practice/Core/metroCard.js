function metroCard(lastNumberOfDays) {
  if (lastNumberOfDays === 30) return [31];
  else if (lastNumberOfDays === 28) return [31];
  else return Array.of(28, 30, 31);
}
