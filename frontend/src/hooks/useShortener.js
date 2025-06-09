import { useState } from "react";
import { validateUrl } from "../utils/validateUrl";
import { shortenUrl } from "../services/urlService";

export const useShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isUrlValid = validateUrl(url);

  const handleShorten = async () => {
    if (!isUrlValid) return;

    setIsLoading(true);
    try {
      const data = await shortenUrl(url);
      setShortUrl(data.shortUrl);
    } catch (err) {
      setError("Hubo un error al acortar la URL");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setUrl("");
    setShortUrl("");
    setError("");
  };

  return {
    url,
    setUrl,
    shortUrl,
    isUrlValid,
    isLoading,
    error,
    handleShorten,
    reset,
  };
};
