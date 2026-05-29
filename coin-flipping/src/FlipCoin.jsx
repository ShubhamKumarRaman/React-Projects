import { useState } from 'react';
import Coin from './Coin';

const DEFAULT_COINS = [
    {
        side: 'head',
        imgSrc:
            'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg',
    },
    {
        side: 'tail',
        imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg',
    },
];

const FlipCoin = ({ coin = DEFAULT_COINS }) => {
    const [currentFace, setCurrentFace] = useState(null);
    const [totalFlips, setTotalFlips] = useState(0);
    const [heads, setHeads] = useState(0);

    const flipCoin = () => {
        const randomIdx = Math.floor(Math.random() * coin.length);
        const result = coin[randomIdx];

        setCurrentFace(result);
        setTotalFlips(prev => prev + 1);

        if (result.side === 'head') {
            setHeads(prev => prev + 1);
        }
    };

    return (
        <div className="FlipCoin">
            <h2 className="FlipCoin-title">Coin Flipping App</h2>

            <div className="FlipCoin-coinArea">
                {currentFace ? (
                    <Coin info={currentFace} />
                ) : (
                    <div className="FlipCoin-placeholder">Click “Flip Me!” to start</div>
                )}
            </div>

            <button className="FlipCoin-button" onClick={flipCoin}>
                Flip Me!
            </button>

            <p className="FlipCoin-stats">
                Out of {totalFlips} flips, there have been {heads} heads and{' '}
                {totalFlips - heads} tails.
            </p>
        </div>
    );
};

export default FlipCoin;