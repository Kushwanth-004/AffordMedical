export const logError = async (message, pkg = "frontend") => {
  try {
    const response = await fetch("https://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack: "frontend",
        level: "error",
        package: "component",
        message,
      }),
    });

    const data = await response.json();
    console.log("Log response:", data);
  } catch (err) {
    console.error("Failed to send log:", err);
  }
};
