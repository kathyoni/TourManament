const UserService = require('../services/UserService');


// Register  
const createAccount = async (req, res) => {
    try {
        const {name, email, password, confirmPassword, phone} = req.body;
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const checkEmail = reg.test(email);

        if(!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Vui lòng nhập dữ liệu'
            })
        } else if(!checkEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Vui lòng nhập lại email'
            })
        } else if(password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Vui lòng nhập đúng password'
            })
        }

        const respond = await UserService.createAccount(req.body);
        
        return res.status(200).json(respond);
    } catch(error) {
        return res.status(404).json({
            message: error
        });
    }
}
// Login 
const loginAccount = async (req, res) => {
    try {
        const {email, password} = req.body; 
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const checkEmail = reg.test(email);

        if(!checkEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Vui lòng nhập đúng password'
            })
        }

        const respond = await UserService.loginAccount(req.body); 
        return res.status(200).json(respond);

    }catch(error) {
        return res.status(404).json({
            message: error
        });
    }
}

// Facebook Login
// Google Login
// ForgetPassword 


module.exports = {
    createAccount,
    loginAccount
}