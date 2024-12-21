import React from 'react';
import PopularProducts from '../PopularProducts/PopularProducts';
import Board from '../Board/Board';

const Home = () => {
    return (
        <div>
            <PopularProducts></PopularProducts>
            <Board></Board>
        </div>
    );
};

export default Home;