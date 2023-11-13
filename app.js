const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const homeRoutes = require('./routes/homeRoutes');
const ibmRoutes = require('./routes/ibmRoutes')

const PORT_NUMBER = 3001
try {
    app.listen(PORT_NUMBER)
    console.log(`Listening on port: ${PORT_NUMBER}`)
} catch (err) {
    console.error(`Failed to start the server due to ${err}`)
}

app.use("/", homeRoutes);
app.use("/ibm", ibmRoutes)
