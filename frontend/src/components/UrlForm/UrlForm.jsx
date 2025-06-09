import { Button, Input, Typography } from "../ui";
import sytles from "./UrlForm.module.css";

const UrlForm = ({ url, onChange, onSubmit, isValid, isLoading }) => (
  <div className={sytles.container}>
    <Typography as="h1" variant="title" center>
      Shorten Your URL:
    </Typography>
    <Input value={url} onChange={(e) => onChange(e.target.value)} />
    <Button disabled={!isValid || isLoading} onClick={onSubmit}>
      {isLoading ? "Loading..." : "Shorten URL"}
    </Button>
  </div>
);

export default UrlForm;
