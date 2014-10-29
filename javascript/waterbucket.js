var seen = {};
var queue = [];
var goal = 0;
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
playGame(7,11,6);

function addState(parentState, newState){
        //"add state if it's new. Remember its parent"
        if(newState in seen){ return; }
        seen[newState] = parentState;
        queue.push(newState);
        //console.log("--- Adding ", newState);
};

function getState(){
        //"return next state and pop it off the queue"
        
        if(queue.length == 0){ return; }
        state = queue[0];
        queue = queue.slice(1);
        return state;
};

function test(oldstate, newstate){
        var newA = newstate[0];
	var newB = newstate[1];
        var won = (newA == goal || newB == goal);
        addState(oldstate, newstate);
        return won;
};

function getSolution (){
        //"Return solution from latest state added"
        var solution = [];
        var state = queue[queue.length - 1];
        while(state){
            solution.push(state);
            state = getParent(state);
	}        
	solution.reverse();
        return solution;
};

function getParent(childState){
        //"""return parent of state, if it exists"""
        try{ return seen[childState]; }
        catch(e){ return; }
};


