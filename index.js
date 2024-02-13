let mcs = "00";
let s = "00";
let m = "00";
let time;
function starttime() {
  time = setInterval(() => {
    document.getElementById("showtime").innerHTML = `${m}:${s}.${mcs}`;
    if (mcs == 100) {
      mcs = 0;
      s++;
      if (s == 60) {
        s = 0;
        m++;
      }
    }
    mcs++;
  }, 10);
}
function stoptime() {
  clearTimeout(time);
}
function reset() {
  mcs = "00";
  s = "00";
  m = "00";
  document.getElementById("showtime").innerHTML = `${m}:${s}.${mcs}`;
}
