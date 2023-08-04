import "./App.css";
// import SocketIO from "socket.io-client";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";

// const ENDPOINT = "http://localhost:4000";
// const socket = SocketIO(ENDPOINT, { transports: ["websocket"] });

// socket.on("connect", () => {});

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
