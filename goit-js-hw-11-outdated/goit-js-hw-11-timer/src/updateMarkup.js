const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

function updateMarkup(timeObj) {
  daysRef.textContent = `${timeObj.days}`;
  hoursRef.textContent = `${timeObj.hours}`;
  minsRef.textContent = `${timeObj.mins}`;
  secsRef.textContent = `${timeObj.secs}`;
}
export default updateMarkup;
