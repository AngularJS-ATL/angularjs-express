/*
 * modify values in these methods to set
 * environment specific info
 */
function setDevelopmentConfig(){
    // These are just examples, insert you info here
    DatabaseConfig.port = 1000;
    DatabaseConfig.host = '';
    DatabaseConfig.name = '';
    DatabaseConfig.user = '';
    DatabaseConfig.pass = '';

    EnvConfig.port = 3502;
}

function setProductionConfig(){
    DatabaseConfig.port = 1000;
    DatabaseConfig.host = '';
    DatabaseConfig.name = '';
    DatabaseConfig.user = '';
    DatabaseConfig.pass = '';

    EnvConfig.port = 80;
}

/* --- no need to modify below this line -- */


var DatabaseConfig = {
    port        : Number,
    host        : String,
    name        : String,
    user        : String,
    pass        : String
};

var EnvConfig = {
    port        : Number
};

module.exports.DatabaseConfig = DatabaseConfig;
module.exports.EnvConfig = EnvConfig;
module.exports.setDevelopmentConfig = setDevelopmentConfig;
module.exports.setProductionConfig = setProductionConfig;