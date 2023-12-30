//Kết nối MQTT
// PUBLISH BROKER
var client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");

//lấy vị trị cần điền data, tìm hiểu về DOM trong js
var temp = document.getElementById("ESP32_01_Temp");
var Humd = document.getElementById("ESP32_01_Humd");
var gas = document.getElementById("gas_valua");

console.log(temp);
console.log(Humd);
console.log(gas);

//sub vào topic
client.on("connect", function () {
  console.log("Connected to shiftr.io broker");
  client.subscribe("public/temperature");
  client.subscribe("public/humidity")
  client.subscribe("public/gas")
});

//lấy tin nhắn từ topic, điền vào vị trí tương ướng
client.on("message", function (topic, message) {
  temp.innerHTML = message.toString();
  Humd.innerHTML = message.toString();
  gas.innerHTML = message.toString();
});
