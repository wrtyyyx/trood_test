import { useState } from "react";
import { Link } from "react-router-dom"; // Додаємо Link
import "./Sidebar.scss";

const Sidebar = () => {
  const [active, setActive] = useState("Main page");

  const menuItems = [
    { name: "Main page", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Vacancies", path: "/vacancies" },
    { name: "People", path: "/people" },
    { name: "Tests", path: "/tests" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="sidebar">
      <ul className="menu">
        {menuItems.map(({ name, path }) => (
          <li key={name}>
            <Link to={path}>
              <button
                className={`menu_item ${active === name ? "active" : ""}`}
                onClick={() => setActive(name)}
              >
                {name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <button className="log_out">Log out</button>
    </aside>
  );
};

export default Sidebar;
