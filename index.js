function receivesAFunction(callBack){
    callBack();
}

function returnsANamedFunction(){
    
    return function fnc() {"test"};
}

function returnsAnAnonymousFunction(){

    return function() {'test'};
}