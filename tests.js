
// Include all tests that you want to run here.
function runTests() {
	wellformedTests();
}


function wellformedTests() {
	console.log("wellformedTests");
	console.log(parseUrl("https://lsa.umich.edu/#q=physics&start=0&hasnext=true&mode=gsa&site=LSA"));
}


// Execute tets.
runTests();
