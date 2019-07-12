import axios from 'axios'

const connect = async (url, method, data, headers,) => {
    const options = {
        method: method,
        headers: headers || {'Content-Type': 'application/json'},
        data: data,
        url: url,
    };
    console.log("AXIOS LOG");
    console.log(options);
    try {
        let data = await axios(options);
        return data;
    } catch (e) {
        throw e;
    }
};

export default connect;