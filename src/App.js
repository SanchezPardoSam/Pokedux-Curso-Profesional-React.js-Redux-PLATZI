import Search from './components/Searcher';
import PokeList from './components/PokeList';

import logo from './statics/logo.svg'
import './App.css';

import { Col, Spin } from 'antd'
import { useEffect } from 'react';

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchPokemonsWithDetails } from './slices/dataSlice';


function App() {
  const loading = useSelector(state => state.ui.loading);
  
  const data = useSelector(state => state.data.pokemons, shallowEqual);

  const dataFilter = useSelector(state => state.data.pokemonsFiltered, shallowEqual);

  const pokemons = loading ? dataFilter : data;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
    
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='logo'></img>
      </Col>

      <Col span={8} offset={8}> <Search /></Col>
      {
        loading ? <Col offset={12}>
          <Spin spinning size='large'></Spin>
        </Col> : <PokeList pokemons={pokemons}></PokeList>
      }

    </div>
  );
}


export default App;
