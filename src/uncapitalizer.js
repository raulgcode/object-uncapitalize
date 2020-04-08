const isPlainObject = require('lodash.isplainobject');
const transform = require('lodash.transform');

function uncapitalizer(object){
  return transform(object, (result, value, key = '')=>{
    
    if(isNaN(key)){
      key = key.charAt(0).toLowerCase() + key.slice(1); 
    }

    if (Array.isArray(value) || isPlainObject(value)) {
      value = uncapitalizer(value);
    }

    result[key] = value;
  });
}

module.exports = uncapitalizer

