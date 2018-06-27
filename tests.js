
// Include all tests that you want to run here.
function runTests() {
	console.log('----------------------------------------');
	wellformedTests();
	console.log('----------------------------------------');
	malformedTests();
	console.log('----------------------------------------');
}

// Test Format:
// - Use two separate console logs so that the object is inspectable in the browser dev-tools console.

function wellformedTests() {
	console.log('wellformedTests');

	console.log('http');
	console.log(parseUrl('http://lsa.umich.edu/#first=charlie&last=brown'));

	console.log('https');
	console.log(parseUrl('https://lsa.umich.edu/#first=charlie&last=brown'));

	console.log('file');
	console.log(parseUrl('file://lsa.umich.edu/#first=charlie&last=brown'));
}

function malformedTests() {
	console.log("malformedTests");

	console.log("bad protocol");
	console.log(parseUrl("httaps://lsa.umich.edu/#q=physics&start=0&hasnext=true&mode=gsa&site=LSA"));

	console.log("misplaced protocol");
	console.log(parseUrl("lsa.umich.edu/http://#q=physics&start=0&hasnext=true&mode=gsa&site=LSA"));
}


// Execute tets.
runTests();
