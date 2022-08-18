function receivesAFunction(cb){
return cb();
};

function returnsANamedFunction(){
    let fn = something => `${something}`;
    return fn;
};
function returnsAnAnonymousFunction(){
    return function(){console.log("this says something")}
}
