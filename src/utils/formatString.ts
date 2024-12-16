export function formatPathname(category: string) {
    return category.toLowerCase().replace(/\s/g, '-')
}

// Turn pathname into capitalized words. 
// e.g. capital-cities -> Capital Cities
export function capitalize(pathname: string) {

    const arr = pathname.split('-').map(word => {
        if (word === 'tv') {
            return 'TV'
        } else {
            return word[0].toUpperCase() + word.slice(1)
        }
    })

    return arr.join(' ')
}