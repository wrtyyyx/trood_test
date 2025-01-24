import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Project from "./components/Project/Project.jsx";

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", gap: "34px" }}>
        <Sidebar />
        <Project />
      </div>
    </div>
  );
}

export default App;
