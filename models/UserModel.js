import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    tanggalpasang: DataTypes.STRING,
    name: DataTypes.STRING,
    nohp: DataTypes.STRING,
    noid: DataTypes.STRING,
    paket: DataTypes.STRING,
    jumlahtagihan: DataTypes.STRING,
    jatuhtempopembayaran: DataTypes.STRING,
    buktipembayaran: DataTypes.STRING,
    hargapembayaran: DataTypes.STRING,
    tanggalpembayaran: DataTypes.STRING,
    sisapiutang: DataTypes.STRING,
    keterangan: DataTypes.STRING
},{
    freezeTableNama:true
});

export default User;

(async()=>{
    await db.sync();
})();