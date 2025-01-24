import { useState } from "react";
import { Link } from "react-router-dom"; // Додаємо Link
import "./Sidebar.scss";

const Sidebar = () => {
    const [active, setActive] = useState('Projects');

    const menuItems = ["Main page", "Projects", "Vacancies", "People", "Tests", "Settings"];

    return (
        <aside className="sidebar">
            <ul className="menu">
                {menuItems.map((item) => (
                    <li key={item}>
                        {item === "Projects" ? (
                            <Link to="/projects">
                                <button
                                    className={`menu_item ${active === item ? "active" : ""}`}
                                    onClick={() => setActive(item)}
                                >
                                    {item}
                                </button>
                            </Link>
                        ) : (
                            <button
                                className={`menu_item ${active === item ? "active" : ""}`}
                                onClick={() => setActive(item)}
                            >
                                {item}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            <button className="log_out">Log out</button>
        </aside>
    );
};

export default Sidebar;
