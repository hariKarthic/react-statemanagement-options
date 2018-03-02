const increment = (data) =>{

    return {
        type:"INCREMENT",
        data
    }

}

const decrement = (data) =>{

    return {
        type:"DECREMENT",
        data
    }

};

export {increment,decrement};
