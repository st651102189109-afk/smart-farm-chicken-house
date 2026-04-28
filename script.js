// READ SENSOR
db.ref("sensor").on("value", (snap) => {
  const data = snap.val();
  document.getElementById("temp").innerText = data.temp;
  document.getElementById("hum").innerText = data.hum;
});

// READ MODE
db.ref("mode").on("value", (snap) => {
  document.getElementById("mode").innerText = snap.val();
});

// SET MODE
function setMode(mode) {
  db.ref("mode").set(mode);
}

// CONTROL FAN
function toggleFan(state) {
  db.ref("control/fan").set(state);
}

// CONTROL LIGHT
function toggleLight(state) {
  db.ref("control/light").set(state);
}
