function add(){
    // console.log(arguments.length) ;
    var sum = 0 ;
    for(var i = 0 ; i < arguments.length ; i++){
        if(arguments[i] instanceof Array){
            for(var j = 0 ; j < arguments[i] ; j++){
                sum += (isNaN(parseInt(arguments[i][j])) ? 0 : parseInt(arguments[i][j])) 
            }
        }
        else if(typeof arguments[i] === 'function'){
            arguments[i] = arguments[j]() ;
            sum += (isNaN(parseInt[i]) ? 0 : parseInt[i]) ;
        }
        else{
            sum += (isNaN(parseInt(arguments[i])) ? 0 : parseInt(arguments[i])) ;
        }
    }

    return sum ;
}

function one(){
    return 1 ;
}

function two(){
    return 2 ;
}

add(1 , "2" , ["3" , 4 , "ram"] , one ,two)