// Firebase config
const firebaseConfig = {
  apiKey: "Iewz0nqBvGXqpdNASY6aDlory3McE3CkdPjofBIT",
  authDomain: "",
  databaseURL: "https://smartfarmchicken-798f2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartfarmchicken-798f2",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ===== อ่านค่า realtime =====
db.ref("/coop").on("value", (snap) => {
  const data = snap.val();

  document.getElementById("temp").innerText = data.temperature;
  document.getElementById("hum").innerText = data.humidity;
  document.getElementById("water").innerText = data.waterLevel;
  document.getElementById("food").innerText = data.foodLevel;
});

// ===== ควบคุมไฟ =====
function setLight(state) {
  db.ref("/coop/light").set(state);
}

// ===== เปลี่ยนโหมด =====
function setMode(mode) {
  db.ref("/coop/mode").set(mode);
}
