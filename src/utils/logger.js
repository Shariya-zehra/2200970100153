
export async function logEvent(stack, level, packageName, message, token) {
    try {
      const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          stack,
          level,
          package: packageName,
          message,
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Failed to log event: ${response.status}`, errorText);
      }
    } catch (err) {
      console.error("Logging failed due to network or other error:", err);
    }
  }