const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!
/*
Notice how we assign announceThatIAmDoingImportantWork without parentheses 
as the value to the busy variable. We want to assign the value of the function 
itself, not the value it returns when invoked.
*/

/*
We call functions that get passed in as parameters callback functions. 
Callback functions get invoked during the execution of the higher-order function.
*/