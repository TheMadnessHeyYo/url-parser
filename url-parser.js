
function parseUrl(url) {

	// Create return object with default key-value pairs.
	var urlData = {
		url: url,			// Stash the entire url string.
		urlObject: null,	// Will contain pointer to built-in URL object.
		malformed: false,	// true indicates the url is malformed.
		queryParams: {},	// Holds the query params key-values if present.
		hashParams: {}		// Holds the hash params key-values if present.
	}

	// Store a flag to indicate if the url is malformed.
	// Examples include a missing protocol.
	urlData.malformed = false;


	// Stash the entire url.
	urlData.url = url;

	
	// Determine protocol.
	var regex = /(^https?|^file):\/\//;
	if (regex.test(url)) {
		urlData.protocol = RegExp.lastMatch;
	} else {
		urlData.malformed = true;
		return urlData;
	}

	
	// Use URL object to parse query and hash parameters if present.
	var urlObject = new URL(url);

	if (urlObject.search.length) {
		var paramsString = urlObject.search.slice(1); // Slice to remove "?" from start.
		var keyValueStrings = paramsString.split('&'); // Turn into an array of key=value strings.
		for (var i=0; i < keyValueStrings.length; i++) {
			var keyValue = keyValueStrings[i].split('='); // Turn string into array [key, value].
			urlData.queryParams[keyValue[0]] = keyValue[1]; // Assign key and value to urlData object.
		}
	}

	if (urlObject.hash.length) {
		var paramsString = urlObject.hash.slice(1); // Slice to remove "#" from start.
		var keyValueStrings = paramsString.split('&'); // Turn into an array of key=value strings.
		for (var i=0; i < keyValueStrings.length; i++) {
			var keyValue = keyValueStrings[i].split('='); // Turn string into array [key, value].
			urlData.hashParams[keyValue[0]] = keyValue[1]; // Assign key and value to urlData object.
		}
	}

	return urlData;
}
