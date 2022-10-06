// eslint-disable-next-line import/no-import-module-exports
import axios from 'axios';

const method = async (URL) => {
    const res = await axios.get(URL);

    return res;
};

export default method;
