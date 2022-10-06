// eslint-disable-next-line import/no-import-module-exports
import axios from 'axios';

const method = async (URL, Body) => {
    const res = await axios.post(URL, Body);

    return res;
};

export default method;
