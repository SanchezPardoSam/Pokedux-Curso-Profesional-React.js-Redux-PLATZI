import { Card } from 'antd'
import { useDispatch } from 'react-redux'

import Meta from 'antd/es/card/Meta'
import StarButton from './StarButton'
import { setFavorite } from '../slices/dataSlice'



const PokeCard = ({ name, image, skill, id, favorite }) => {

    const dispatch = useDispatch();

    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }

    return <Card title={name}
        cover={<img src={image} alt={name}></img>}
        extra={<StarButton infavorite={favorite} onClick={handleOnFavorite} />}
    >
        <Meta description={skill} />
    </Card>
}

export default PokeCard