document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-mode");
    const body = document.body;

    // 初始化：检查本地存储中的用户偏好
    const savedMode = localStorage.getItem("theme") || "light-mode"; // 默认是 light-mode
    body.classList.add(savedMode); // 应用存储的模式

    // 切换模式逻辑
    toggleButton.addEventListener("click", () => {
      const isLightMode = body.classList.contains("light-mode");
      const newMode = isLightMode ? "dark-mode" : "light-mode";

      // 更新类名和本地存储
      body.classList.remove("light-mode", "dark-mode");
      body.classList.add(newMode);
      localStorage.setItem("theme", newMode);
    });
});