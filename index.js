// TODO: import files from includes
const pack_file = require("./includes/includeindex");
// const file_two = require("./includes/file_two");

module.exports = (params) => {

    params = {
      // TODO: set default params

      ...params
    };

    // Publish and return datasets.
    let result = {
    // TODO: update files to call with params
         pack_file: pack_file(params)
    //   file_two: file_two(params)
    };

    return result;
}