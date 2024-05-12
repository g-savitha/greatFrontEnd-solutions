//using Set

export default function difference(array,values){
    const result = [];

    const valueSet = new Set(values);
    for(let i = 0; i < array.length; i++){
        const val = array[i];
        //also handles the case of sparse arrays
        if(!valueSet.has(val) && !(val === undefined && !(i in array))){
            result.push(val)
        }
    }
    return result;
}

//using filter method

export default function difference(array,values){
    const valueSet = new Set(values);
    return array.filter(a=>!valueSet.has(a))
}

// Using includes method

export default function difference(array,values){
    return array.filter(a => !values.includes(a));
}
