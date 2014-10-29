function playGame (aMax, bMax, goal1) {
	goal = goal1;
        //"grab a state and generate 8 more to submit to the manager"
        addState("",[0,0]);   // start with 2 empty buckets
        while(true){
            var oldstate = getState();
            var aHas = oldstate[0];
	    var bHas = oldstate[1];
            if(test(oldstate, [aMax,bHas])){ break; }// fill A from well
            if(test(oldstate, [0,bHas])){ break; }// empty A to well
            if(test(oldstate, [aHas,bMax])){ break; }// fill B from well
            if(test(oldstate, [aHas,0])){ break; }// empty B to well
            howmuch = Math.min(aHas, bMax-bHas);
            if(test(oldstate, [aHas-howmuch,bHas+howmuch])){ break; }// pour A to B
            howmuch = Math.min(bHas, aMax-aHas);
            if(test(oldstate, [aHas+howmuch,bHas-howmuch])){ break; }// pour B to A
	}        
	var solution = getSolution(); 
	console.log("Solution is ");
        console.log(solution.join ("\n"));
};
