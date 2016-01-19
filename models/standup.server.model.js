var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({

	memberName: String,
	project: String,
	workYesterday: String,
	workToday: String,
	impediment: String,
	createdOn : {type : Date, default: Date.now}

});

// var includeMiddleName = true;
// var exampleSchema = new Schema;

// if (includeMiddleName) {

// 	exampleSchema.add({

// 		memberName : {

// 			first : String,
// 			middle : String,
// 			last : String
// 		}

// 	});

// } else {

// 	exampleSchema.add({

// 		memberName : {

// 			first : String,
// 			last : String
// 		}

// 	})

// }

// exampleSchema.add({

// 	project : String,
// 	workToday : String,
// 	workYesterday : String,
// 	impediment : String,
// 	createdOn : {

// 		type : Date,
// 		default : Date.now
// 	}

// })
//3rd optional argument specifies the name of the MongoDB collection to save document instances to
module.exports = mongoose.model('Standup', standupSchema);