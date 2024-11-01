const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const mainRoute = require('./routes/routes');

require('dotenv').config({ path: './.env' });

app.use(cors());

port = process.env.PORT;
uri = process.env.URI;

const connectDB = async () => {
    try {
        const db = await mongoose.connect(uri);
        console.log("MongoDB Connected:" + db.connection.host)
    } catch(err) {
        console.log(err);
    }
}

connectDB();

app.listen(port, () => {
    console.log("App is listening on port " + port)
});

app.use('/', mainRoute);