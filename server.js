const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("."));

io.on("connection", (socket) => {
  socket.on("handData", (data) => {
    socket.broadcast.emit("handData", data);
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
  console.log("To make it accessible from different networks, use ngrok:");
  console.log("1. Install ngrok from https://ngrok.com/download");
  console.log("2. Run: ngrok http " + PORT);
  console.log("3. Use the ngrok URL in the QR code instead of localhost");
});
