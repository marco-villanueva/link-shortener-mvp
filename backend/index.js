import app from './src/app.js';
import { PORT } from "./src/config/env.js";

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
