const app = require('./server');
const PORT = 3000;

app.listen(PORT, () => {
    console.log('Escuchando en el puerto ', PORT);
}); // Escuchando en el puerto 3000