var filter = require('./filtered_ls.js');

filter(process.argv[2], process.argv[3], function(err, files){
	if(err) {
		console.log("Informative Error Message");
	} else {
		files.forEach(function(file) {
			console.log(file);
		})
	}
});

// filter(process.argv[2], process.argv[3], function(err, file){
// 	if(err) {
// 		console.log("Informative Error Message");
// 	} else {
// 		console.log(file);
// 	}
// });