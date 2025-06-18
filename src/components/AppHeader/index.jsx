"use client";

import React from "react";
import {
  AppHeaderWrpr,
  AppHeading,
  NavOptions,
  NavOptionWrpr,
  ToggleThemeButton,
} from "./style";
import { useTheme } from "@/utils/themeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useRouter } from "next/router";

function AppHeader() {
  const { theme, toggleTheme } = useTheme();
  // const router = useRouter();

  const navItems = [
    { label: "Home", path: "/", endpoint: "/api/home" },
    { label: "News", path: "/news", endpoint: "/api/news" },
    {
      label: "Publications",
      path: "/publications",
      endpoint: "/api/publications",
    },
    { label: "Talks", path: "/talks", endpoint: "/api/talks" },
    { label: "Teaching", path: "/teaching", endpoint: "/api/teaching" },
    { label: "Blogs", path: "/blogs", endpoint: "/api/blogs" },
    {
      label: "CV",
      path: "/cv",
      endpoint:
        "https://drive.google.com/file/d/1Fnk4RBRE0oa5V7th1Lez7duckDJVpRTm/view",
    },
  ];

  const handleNavigation = (path) => {
    if (path === "/cv") {
      window.open(
        "https://drive.google.com/file/d/1Fnk4RBRE0oa5V7th1Lez7duckDJVpRTm/view",
        "_blank"
      );
    } else if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      router.push(path);
    }
  };

  return (
    <AppHeaderWrpr>
      <AppHeading>Sparsh Jain</AppHeading>
      <NavOptionWrpr>
        {navItems.map((item, key) => (
          <NavOptions key={key} onClick={() => handleNavigation(item.path)}>
            {item.label}
          </NavOptions>
        ))}
        <ToggleThemeButton onClick={toggleTheme}>
          {theme === "light" ? (
            <MdOutlineDarkMode size={24} />
          ) : (
            <MdOutlineLightMode size={24} color="#fff" />
          )}
        </ToggleThemeButton>
      </NavOptionWrpr>
    </AppHeaderWrpr>
  );
}

export default AppHeader;
