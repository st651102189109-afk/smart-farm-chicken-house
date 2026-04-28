// SENSOR
db.ref("farm").on("value", (snap) => {
  const d = snap.val();

  document.getElementById("temp").innerText = d.temp;
  document.getElementById("hum").innerText = d.humidity;
  document.getElementById("water").innerText = d.water;
  document.getElementById("feed").innerText = d.feed;
});

// LIGHT CONTROL
function setLight(val){
  db.ref("control/light").set(val);
}
