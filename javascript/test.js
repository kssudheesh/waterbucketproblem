function test(oldstate, newstate){
        var newA = newstate[0];
	var newB = newstate[1];
        var won = (newA == goal || newB == goal);
        addState(oldstate, newstate);
        return won;
};

