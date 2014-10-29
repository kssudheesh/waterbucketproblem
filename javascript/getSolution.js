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
