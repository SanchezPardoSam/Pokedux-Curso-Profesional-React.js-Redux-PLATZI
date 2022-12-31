import { Input } from 'antd'
import { useDispatch } from 'react-redux';
import { setFind } from '../slices/dataSlice';

const Searcher = () => {
    const dispatch = useDispatch()
    const handleOnChange = (e) => {
        dispatch(setFind(e.target.value));
    }
    return <Input.Search 
    placeholder='Buscar' 
    onChange={handleOnChange} 
    style={{ marginBotton: '10px' }} />
}

export default Searcher;