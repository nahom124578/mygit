import Routes from './Routes';
import axios from 'axios';

axios.defaults.baseURL = `http://localhost:3001`;
axios.defaults.withCredentials = true;

 const App = () => {
    return (
        <Routes/>
    );
}

export default App;
