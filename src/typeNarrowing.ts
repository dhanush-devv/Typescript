function getChai(kind:string | number) {
    if(typeof kind==='string'){
        return `Making ${kind}...`
    }
    return `Chai order: ${kind}`
    
}

function serveChai(msg?:string) {
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
    
}