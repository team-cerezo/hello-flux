import React from 'react';
import ReactDOM from 'react-dom';
import { increment } from './actions';
import { Container } from 'flux/utils';
import { countStore } from './store';

const Counter = ({ count }) => (<h1>{count}</h1>);

const IncButon = () => (
    <div>
        <button onClick={increment}>+1</button>
    </div>
);

const App = ({ count }) => (
    <div>
        <Counter count={count} />
        <IncButon />
    </div>
);

const getStores = () => [countStore];

const calculateState = () => {
    return { count: countStore.getState() };
};

const AppContainer = Container.createFunctional(App, getStores, calculateState)

ReactDOM.render(<AppContainer />, document.getElementById('root'));
