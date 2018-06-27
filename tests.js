
// Include all tests that you want to run here.
function runTests() {
	test1();
}


// Basic test.
function test1() {
	console.log("Test1"); // Doing two separate console logs so that the object is inspectable in the browser dev-tools console.
	console.log(parseUrl("https://lsa.umich.edu/#q=physics&start=0&hasnext=true&mode=gsa&site=LSA"));
}


// Execute tets.
runTests();
