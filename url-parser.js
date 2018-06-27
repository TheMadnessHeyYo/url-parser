
function parseUrl(url) {

	// Create return object with default key-value pairs.
	var urlData = {
		malformed: false,
		url: "",
		protocol: "",
		queryParams: {},
		hashParams: {}
	}

	// Store a flag to indicate if the url is malformed.
	// Examples include a missing protocol.
	urlData["malformed"] = false;


	// Stash the entire url.
	urlData["url"] = url;

	
	// Determine protocol.
	var regex = /(^https?|^file):\/\//;
	if (regex.test(url)) {
		urlData["protocol"] = RegExp.lastMatch;
	} else {
		urlData.malformed = true;
		return urlData;
	}

	return urlData;
}
