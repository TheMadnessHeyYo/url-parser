class Tests {

	constructor() {

	}

	printSpacer() {
		console.log('----------------------------------------');
	}

	// Include all tests that you want to run here.
	runTests() {
		this.printSpacer();
		this.queryAndHashTests();
		this.printSpacer();
		this.queryTests();
		this.printSpacer();
		this.hashTests();
		this.printSpacer();
		this.wellformedTests();
		this.printSpacer();
		this.malformedTests();
		this.printSpacer();
	}

	// Test Format:
	// - Use two separate console logs so that the object is inspectable in the browser dev-tools console.

	queryAndHashTests() {
		console.log('queryAndHashTests');
		console.log(UrlParser.parseUrl('http://lsa.umich.edu/?first=charlie&last=brown#team=lions&city=detroit'));
	}

	queryTests() {
		console.log('queryTests');
		console.log(UrlParser.parseUrl('http://lsa.umich.edu/?first=charlie&last=brown'));
	}

	hashTests() {
		console.log('hashTests');
		console.log(UrlParser.parseUrl('http://lsa.umich.edu/#first=charlie&last=brown'));
	}

	wellformedTests() {
		console.log('wellformedTests');

		console.log('http');
		console.log(UrlParser.parseUrl('http://lsa.umich.edu/#first=charlie&last=brown'));

		console.log('https');
		console.log(UrlParser.parseUrl('https://lsa.umich.edu/#first=charlie&last=brown'));

		console.log('file');
		console.log(UrlParser.parseUrl('file://lsa.umich.edu/#first=charlie&last=brown'));
	}

	malformedTests() {
		console.log('malformedTests');

		console.log('bad protocol');
		console.log(UrlParser.parseUrl('httaps://lsa.umich.edu/#first=charlie&last=brown'));

		console.log('misplaced protocol');
		console.log(UrlParser.parseUrl('lsa.umich.edu/http://#first=charlie&last=brown'));
	}


}


// Execute tets.
const tests = new Tests();
tests.runTests();
	
