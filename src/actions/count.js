export const increment = ()=>{
    return {
        type:'INCREMENT'
    }
}
//export is not like export default here all gets exported as a single object and we can do object destructuring whereever we are using it.

export const decrement = ()=>{
    return {
        type:'DECREMENT'
    }
}