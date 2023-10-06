/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/*
RANDOM BLIND ATTEMPT TO SOLVE A PROBLEM WITH NODES 
I DEF HAVE TO COME BACK TO THIS AND DO THIS BETTER AFTER I GET WHAT I AM DOING
*/
var mergeKLists = function(lists) {
        let output = [];
    lists.forEach(element => {
        
        output = output.concat(allVars(element));
    });
    output.sort(function(a, b) {
        return a - b;
      });
    return arrayToListNodes(output);
};

var allVars = function(vars){
    if(vars == null) return null;
    if(vars.next != null) return [vars.val,...(allVars(vars.next))];
    return [vars.val];
}

var arrayToListNodes = function (listOfVals){
    if(listOfVals.length == 0) return null;
    let finalNode = null;
    for (let i = listOfVals.length-1; i >= 0; i--) {
        if(listOfVals[i] == null) continue;
        if(i==listOfVals.length-1) finalNode = valnextToNode(listOfVals[i], null)
        else finalNode = valnextToNode(listOfVals[i], finalNode);
    }
    return finalNode;
}

var valnextToNode = function (value, nextValue){
    return {"val": value, "next": nextValue};
}