
function parseUrl(url) {

	var urlData = {}

	// Store a flag to indicate if the url is malformed.
	// Examples include a missing protocol.
	urlData["malformed"] = false;


	// Stash the entire url.
	urlData["url"] = url;


	return urlData;
}
