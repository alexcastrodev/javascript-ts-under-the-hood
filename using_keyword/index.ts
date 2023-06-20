const getResource = () => {
    return {
        [Symbol.dispose]: () => {
            console.log('uhu, vai brasil')
        }
    }
}

using resource = getResource()