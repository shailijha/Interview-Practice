function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (
    yourRight == yourLeft &&
    friendsLeft == friendsRight &&
    yourLeft == friendsLeft
  )
    return true;
  let strongest_bool =
    (yourLeft > yourRight ? yourLeft : yourRight) ==
    (friendsLeft > friendsRight ? friendsLeft : friendsRight);
  let weakest_bool =
    (yourLeft > yourRight ? yourRight : yourLeft) ==
    (friendsLeft > friendsRight ? friendsRight : friendsLeft);
  return strongest_bool && weakest_bool;
}
