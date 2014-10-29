function getState(){
        //"return next state and pop it off the queue"
        
        if(queue.length == 0){ return; }
        state = queue[0];
        queue = queue.slice(1);
        return state;
};

