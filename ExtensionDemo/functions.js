var obj = {hooks:{
    preSaveFunction : function(options,callback){
        return callback(error, {
            data: options.data,
            errors: options.errors,
            abort: false,
            newErrorsAndRetryData: []
          })
    }
}}

module.exports = obj;