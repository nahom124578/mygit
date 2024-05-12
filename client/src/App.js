import Routes from './Routes';
import axios from 'axios';

axios.defaults.baseURL = `https://mygit-xi.vercel.app`;
axios.defaults.withCredentials = true;

 const App = () => {
    return (
        <Routes/>
    );
}

export default App;
