import { Button, Input, Typography } from "../ui";

import styles from "./UrlResult.module.css";

const UrlResult = ({ shortUrl, onReset, onAlert }) => {
  return (
    <div className={styles.container}>
      <Typography as="h2" variant="title" center>
        Your Shortened URL:
      </Typography>
      <Input value={shortUrl} readOnly />
      <div className={styles.buttonsContainer}>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(shortUrl);
            onAlert({
              message: "Short URL copied to clipboard!",
              variant: "success",
            });
          }}
        >
          Copy URL
        </Button>
        <Button onClick={onReset}>Short another URL</Button>
      </div>
    </div>
  );
};

export default UrlResult;
