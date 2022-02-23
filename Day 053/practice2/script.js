const nums = [1,2,3,4,5]
const squared=nums.map(function(x){
    return(
        x*x
    )
} );
console.log(squared)



const names = ["alice","bob","charlie","danielle"]
const uppercase = names.map((name)=>{
    return name[0].toUpperCase() + name.slice(1)
})
console.log(uppercase)


