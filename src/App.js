import "./App.css";
import Date from "./Components/Date/Date";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import Task from "./Components/Task/Task";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Date></Date>
      <Task></Task>
      <Modal></Modal>
    </div>
  );
}

export default App;
