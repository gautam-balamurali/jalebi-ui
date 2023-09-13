import { useState } from "react";
import { Header } from "../components/layouts/header/Header";
import { SideBar } from "../components/layouts/sidebar/SideBar";
import { Documentation } from "../documentation/Documentation";

export default function DocumentationPage() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <div className="main-area container">
        <Documentation />
        <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </div>
  );
}
