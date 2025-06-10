export const shortenUrl = async (originalUrl) => {
  const apiUrl = import.meta.env.VITE_API_URL || '';

  const response = await fetch(`${apiUrl}/shorten`, {
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
