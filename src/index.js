//Util functions for ion apps

console.log("runned")

var fs = require('fs')
var configFile = fs.readFileSync('/config/communicationProtocol.json', 'utf8')

module.exports = {
	resSend: function (res, code, additionalData) {
		function resObjFac(code, description, additionalData){
			if (additionalData) return {code: code, description: description, additionalData: additionalData}
			return {code: code, description: description}
		}

		var description
		res.statusCode = code
		switch (code) {
			case 201:
				res.statusMessage = 'CREATED. The request has been fulfilled, resulting in the creation of a new resource.'
				break
			case 401:
				res.statusMessage = 'UNAUTHORIZED. The request has not been applied because it lacks valid authentication credentials for the target resource.'
				break
			case 402:
				res.statusMessage = 'PAYMENT REQUIRED. The request has not been applied because it has not been authorized by payment.'
				break
			case 404:
				res.statusMessage = 'NOT FOUND. The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.'
				break
			case 409:
				res.statusMessage = 'CONFLICT. The request could not be completed due to a conflict with the current state of the target resource.'
				break
		}
		res.send(additionalData)
	}
}
