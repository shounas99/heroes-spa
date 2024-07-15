import { PropTypes } from 'prop-types'
import { HeroCard } from './index' 
import { getHeroesByPublisher } from "../helpers"

export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher( publisher )

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