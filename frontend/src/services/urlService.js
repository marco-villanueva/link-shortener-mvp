export const shortenUrl = async (originalUrl) => {
  const response = await fetch("http://localhost:3001/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ originalUrl }),
  });

  if (!response.ok) {
    throw new Error("Failed to shorten URL");
  }

  return await response.json();
};
