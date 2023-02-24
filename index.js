function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    return function name() {
        return 'Hello, Andrew'
    }
}

function returnsAnAnonymousFunction(){
    return () => 'Hello, anonymous'
}