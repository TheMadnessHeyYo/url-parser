
function parseUrl(url) {

	// Create return object with default key-value pairs.
	var urlData = {
		url: url,			// Stash the entire url string.
		urlObject: null,	// Will contain pointer to built-in URL object.
		malformed: false,	// true indicates the url is malformed.
		queryParams: {},	// Holds the query params key-values if present.
		hashParams: {}		// Holds the hash params key-values if present.
	}

	// Use built-in URL object to preprocess url. This will obtain the protocol, hash, and query params + more.
	// Use try-catch because the URL object will fail at creation if the url is malformed.
	try {
		urlData.urlObject = new URL(url)

		// Use regex to determine if a valid protocol is specified since 
		// the URL object does not capture everything such as "httaps".
		var regex = /(^https?|^file):\/\//;
		if (!regex.test(url)) {
			urlData.malformed = true;
			return urlData;
		}
	} catch(error) {
		urlData.malformed = true;
		return urlData;
	}
		
	// Parse query and hash parameters if present into easy to access objects.
	if (urlData.urlObject.search.length) {
		var paramsString = urlData.urlObject.search.slice(1); // Slice to remove "?" from start.
		var keyValueStrings = paramsString.split('&'); // Turn into an array of key=value strings.
		for (var i=0; i < keyValueStrings.length; i++) {
			var keyValue = keyValueStrings[i].split('='); // Turn string into array [key, value].
			urlData.queryParams[keyValue[0]] = keyValue[1]; // Assign key and value to urlData object.
		}
	}

	if (urlData.urlObject.hash.length) {
		var paramsString = urlData.urlObject.hash.slice(1); // Slice to remove "#" from start.
		var keyValueStrings = paramsString.split('&'); // Turn into an array of key=value strings.
		for (var i=0; i < keyValueStrings.length; i++) {
			var keyValue = keyValueStrings[i].split('='); // Turn string into array [key, value].
			urlData.hashParams[keyValue[0]] = keyValue[1]; // Assign key and value to urlData object.
		}
	}

	return urlData;
}
