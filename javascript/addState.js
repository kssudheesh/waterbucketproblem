function addState(parentState, newState){
        //"add state if it's new. Remember its parent"
        if(newState in seen){ return; }
        seen[newState] = parentState;
        queue.push(newState);
        //console.log("--- Adding ", newState);
};

