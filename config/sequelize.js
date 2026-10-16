const { Sequelize } = require('sequelize');

//Conexion a mysql
const sequelize = new Sequelize(
    //nombnre de la bd
    'stride-co',
    //usuario de la bd
    'root',
    //password de la bd

    'abdc1234',
    {
        //define la direccion del servidor de la bd
        host: 'localhost',
        //port: puerto en el que atiende nuestro servidor de bd
        port: 3306,
        //dialect: es la porpiedad donde definimos la bd especificamente que vamos a usar
        dialect: 'mysql',
        //login: 
        logging: false,
        define: {
            //permite definir si queremos agregar automaticamente a nuestros modelos las propiedades creaded_at, role_id
            underscored:
        }
    }
);
