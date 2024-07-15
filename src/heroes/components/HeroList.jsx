import { PropTypes } from 'prop-types'
import { HeroCard } from './index' 
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from 'react'

export const HeroList = ({ publisher }) => {
    // const heroes = getHeroesByPublisher( publisher )
     //Each time when his dependencies changed, throw the callback
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ])

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    heroes.map( itemHeroe => (
                        // <li  key={itemHeroe.id}>{itemHeroe.characters}</li>
                        <HeroCard 
                            key={itemHeroe.id}
                            { ...itemHeroe }
                        />
                    ))
                    
                }
        </div>
    )
}

HeroList.propTypes = {
    publisher: PropTypes.string.IsRequired
}