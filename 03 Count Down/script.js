const endDate = "12 June 2026 00:00";

document.getElementById("heading").innerText = endDate;

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const different = (end - now) / 1000;

  if (different > 0) {
    // covert to days
    const days = Math.floor(different / 3600 / 24);
    document.getElementById("day").innerText = days;

    //  convet hours
    const hours = Math.floor((different / 3600) % 24);
    document.getElementById("hour").innerText = hours;

    //  convet to minutes
    const minutes = Math.floor((different / 60) % 60);
    document.getElementById("minute").innerText = minutes;

    // convert to seconds
    const seconds = Math.floor(different % 60);
    document.getElementById("second").innerText = seconds;
  }
}
clock();

setInterval(function refesh() {
  clock();
}, 1000);
