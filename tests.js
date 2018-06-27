
// Include all tests that you want to run here.
function runTests() {
	console.log('----------------------------------------');
	queryAndHashTests();
	console.log('----------------------------------------');
	queryTests();
	console.log('----------------------------------------');
	hashTests();
	console.log('----------------------------------------');
	wellformedTests();
	console.log('----------------------------------------');
	malformedTests();
	console.log('----------------------------------------');
}

// Test Format:
// - Use two separate console logs so that the object is inspectable in the browser dev-tools console.

function queryAndHashTests() {
	console.log('queryAndHashTests');
	console.log(parseUrl('http://lsa.umich.edu/?first=charlie&last=brown#team=lions&city=detroit'));
}

function queryTests() {
	console.log('queryTests');
	console.log(parseUrl('http://lsa.umich.edu/?first=charlie&last=brown'));
}

function hashTests() {
	console.log('hashTests');
	console.log(parseUrl('http://lsa.umich.edu/#first=charlie&last=brown'));
}

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
	console.log('malformedTests');

	console.log('bad protocol');
	console.log(parseUrl('httaps://lsa.umich.edu/#first=charlie&last=brown'));

	console.log('misplaced protocol');
	console.log(parseUrl('lsa.umich.edu/http://#first=charlie&last=brown'));
}


// Execute tets.
runTests();
