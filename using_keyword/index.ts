const getResource = () => {
    console.log('Xumbrela')
    return {
        [Symbol.dispose]: () => {
            console.log('No Breu')
        }
    }
}

using resource = getResource()