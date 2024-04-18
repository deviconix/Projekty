const mongoose = require('mongoose');

function connectToDatabase(path) {
    mongoose.connect(path);
    const db = mongoose.connection;
    db.on('error', function (err) {
        console.error('Error connecting to database:', err);
    });
    db.once('open', () => {
        console.log(`Connect to ${process.env.MONGO_DB_URL}`);
        // Здесь можно добавить дополнительные действия после успешного подключения
    });
    return db;
}

module.exports = connectToDatabase;