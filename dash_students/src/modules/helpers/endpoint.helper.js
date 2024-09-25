
//onst host = `http://localhost:3333/mongodb/dash`;
const host = `https://my-mongodb-617s.onrender.com/mongodb/dash`;

const endpoint = {
    register: `${host}/register`,
    login: `${host}/login`,
    otpEmail: `${host}/otp`,
    verifyOtp: `${host}/verify`,
    activeCount: `${host}/update/status/otp`,
    verifyToken: `${host}/token`,
}

export default endpoint;