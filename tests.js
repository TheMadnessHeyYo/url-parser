
// Include all tests that you want to run here.
function runTests() {
	wellformedTests();
}

// Test Format:
// - Use two separate console logs so that the object is inspectable in the browser dev-tools console.

function wellformedTests() {
	console.log("wellformedTests");

	console.log('http');
	console.log(parseUrl("http://lsa.umich.edu/#q=physics&start=0&hasnext=true&mode=gsa&site=LSA"));

	console.log('https');
	console.log(parseUrl("https://lsa.umich.edu/#q=physics&start=0&hasnext=true&mode=gsa&site=LSA"));

	console.log('file');
	console.log(parseUrl("file://lsa.umich.edu/#q=physics&start=0&hasnext=true&mode=gsa&site=LSA"));
}


// Execute tets.
runTests();
