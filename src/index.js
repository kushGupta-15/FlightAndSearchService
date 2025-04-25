const express = require("express")
const bodyParser = require("body-parser")

const {PORT} = require('./config/serverConfig')

const setupAndStartServer = async () => {

    //create an express object
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        console.log(process.env)
    });

}

setupAndStartServer(); 