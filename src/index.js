const express = require('express');
const app = express();
const {connectDB} = require('./config')
const {ENV_Variables} = require('./config')
const apiRoutes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ENV_Variables.PORT, async () => {
    console.log("Server listening on port: ", ENV_Variables.PORT);
    connectDB();
})