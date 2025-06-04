
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.json({ message: "Hola desde el backend!" });
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
