export default function debouncingFn (cb, time){
    let timeout;
    return function(){
        let functionCall = ()=> cb.apply(this, arguments)
        clearTimeout(timeout)
        timeout= setTimeout(functionCall, time)
    } 
} 