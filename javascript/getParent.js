function getParent(childState){
        //"""return parent of state, if it exists"""
        try{ return seen[childState]; }
        catch(e){ return; }
};

