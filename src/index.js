//Util functions for ion apps


var conf = require('./config/communicationProtocol.json')
//var configFile = fs.readFileSync('config/communicationProtocol.json', 'utf8')
//console.log(  JSON.stringify(conf)  )
module.exports = {
	resSend: function (res, nomenclature, additionalData, sendDescription) {
		sendDescription = sendDescription || false
		function resObjFac(code, description, additionalData) {
			if (additionalData) return {code: code, description: description, additionalData: additionalData}
			return {code: code, description: description}
		}
		res.statusCode = conf[nomenclature].code
		if (sendDescription) res.statusMessage = conf[nomenclature].description
		res.send(JSON.stringify(additionalData))
	}
}
