function willYou(young, beautiful, loved) {
  if (young && beautiful && !loved) return true;
  if (
    (young && beautiful && loved) ||
    (!young && !beautiful && !loved) ||
    !loved
  )
    return false;
  return true;
}
