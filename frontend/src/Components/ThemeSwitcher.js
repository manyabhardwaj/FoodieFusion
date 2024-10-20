const [theme, setTheme] = useState("light");

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
  localStorage.setItem("theme", theme === "light" ? "dark" : "light");
};

// Load theme on initial render
useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
}, []);
