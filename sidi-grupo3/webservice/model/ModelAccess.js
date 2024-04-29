const fs = require("fs");
const HandleDBMSMySQL = require("../config/database/HandleDBMSMySQL");

class ModelAccess {
  constructor() {
    this._HandleDBMSMySQL = new HandleDBMSMySQL();
    this.envFile = JSON.parse(
      fs.readFileSync("./config/server/env.json", "utf8", "r")
    );
  }

  destroy(param = null) {
    var varToString = (varObj) => Object.keys(varObj)[0];
    throw new Error(
      `Parâmetros incorretos para a classe: ${
        this.constructor.name
      }, parâmetro ${varToString({ param })}`
    );
  }

  postAccess(timestamp = null, hostname = null, ip = null) {
    this._timestamp =
      typeof timestamp !== "string" || timestamp === null
        ? this.destroy(timestamp)
        : timestamp;
    this._hostname =
      typeof hostname !== "string" || hostname === null
        ? this.destroy(hostname)
        : hostname;
    this._ip = typeof ip !== "string" || ip === null ? this.destroy(ip) : ip;

    var table = "access";
    var sqlInsert = `insert into ${this.envFile.database}.${table} values (null, ${this._timestamp}, ${this._hostname}, ${this._ip})`;

    return this._HandleDBMSMySQL.query(sqlInsert);
  }
}

module.exports = ModelAccess;
