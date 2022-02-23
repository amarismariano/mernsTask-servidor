const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

//Conectamos a la base de datos
const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); // En caso de tener un error en la conexión
  }
};

module.exports = conectarDB;
