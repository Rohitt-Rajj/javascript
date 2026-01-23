// Immediately Invoked Function Expressions (IIFE)


//  Both are the way 


(function chai(){
    console.log(`Db connected`);
    
})();



( (name) => {
        console.log(`Db connected ${name}`);

})("Rohit");

