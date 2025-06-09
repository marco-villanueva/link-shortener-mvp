import { useAlert } from "./components/Alert/useAlert";
import UrlForm from "./components/UrlForm/UrlForm";
import UrlResult from "./components/UrlResult/UrlResult";
import { useShortener } from "./hooks/useShortener";

import styles from "./App.module.css";

const App = () => {
  const { url, setUrl, shortUrl, isUrlValid, isLoading, handleShorten, reset } =
    useShortener();

  const { Alert, showAlert } = useAlert();

  const handleAlert = ({ message, variant }) => {
    showAlert({
      message,
      variant,
    });
  };

  return (
    <div className={styles.mainContainer}>
      {shortUrl ? (
        <UrlResult shortUrl={shortUrl} onReset={reset} onAlert={handleAlert} />
      ) : (
        <UrlForm
          url={url}
          onChange={setUrl}
          onSubmit={handleShorten}
          isValid={isUrlValid}
          isLoading={isLoading}
        />
      )}
      {Alert}
    </div>
  );
};

export default App;
