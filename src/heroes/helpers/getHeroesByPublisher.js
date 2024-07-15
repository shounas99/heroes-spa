import { heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) => {
    const validPublisher = [ 'DC Comics', 'Marvel Comics' ]
    if( !validPublisher.includes( publisher )){
        throw new Error(`${ publisher } isn't a valid publisher! :C`)
    }
    return heroes.filter( heroes => heroes.publisher === publisher);
}