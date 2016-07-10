var fs = require('fs');
var path = require('path');

// fs.readdir(process.argv[2], function(err, files){
	
// 	files.forEach(function(file){
// 		if(path.extname(file).slice(1) === process.argv[3]){
// 			console.log(file);
// 		}
// 	});
// })


var filter = function(dirName, ext, callback){
	fs.readdir(dirName, function(err, files){
		if (err){
			return callback(err);
		}

		var filteredFiles = files.filter(function(file) {
			return path.extname(file).slice(1) === ext;
		});

		callback(null, filteredFiles);
	});

};

module.exports = filter;