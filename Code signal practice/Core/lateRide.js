function lateRide(n) {
  let hours = 0;
  let minutes = 0;
  hours = Math.floor(n / 60);
  minutes = n - hours * 60;
  // console.log(`${hours}:${minutes}`);
  hours = Math.floor(hours / 10) + (hours % 10);
  minutes = Math.floor(minutes / 10) + (minutes % 10);
  return hours + minutes;
}
