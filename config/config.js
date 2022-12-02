
require('dotenv').config();

module.exports = {
    "ATLASDB": process.env.ATLASDB,
    "LOCALDB": "mondodb://localhost:27017/dbapp",
    "SECRETKEY": process.env.SECRETKEY
}

