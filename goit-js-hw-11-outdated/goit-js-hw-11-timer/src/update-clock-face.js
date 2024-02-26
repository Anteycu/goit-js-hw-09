function pad(value) {
  return String(value).padStart(2, '0');
}
let days;
let hours;
let mins;
let secs;
function updateClockface(time) {
  const updatedTime = {
    days: (days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))),
    hours: (hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    )),
    mins: (mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))),
    secs: (secs = pad(Math.floor((time % (1000 * 60)) / 1000))),
  };
  return updatedTime;
}

export default updateClockface;
