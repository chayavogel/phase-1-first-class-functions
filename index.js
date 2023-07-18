function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    return function namedfunction() {
        console.log("I am a named function!")
    }
};

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function!")
    }
}
