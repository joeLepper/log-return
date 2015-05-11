module.exports = function log() {
	console.log("") // Provide space between the log and return
	var args = Array.prototype.slice.call(arguments)
	console.log.apply(console, args)
	return args
}
