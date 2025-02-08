const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const SALT = 10;
const jwt=require("jsonwebtoken")
const SECRET_KEY="test"

exports.store = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findedUser = await User.findOne({ email: email })
        if (findedUser) {
            return res.json({ success: false, status: 400, message: "Email already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, SALT);
        req.body.password = hashedPassword;
        const user = await User.create(req.body);
        return res.json({ success: true, status: 200, message: "User created successfully", user })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findeduser = await User.findOne({ email: email });
        if (findeduser) {
            const isMatch = await bcrypt.compare(password, findeduser.password)
            if (isMatch) {
                const token = jwt.sign({ id: findeduser._id }, SECRET_KEY, { expiresIn: '1h' });
                return res.json({ success: true, status: 200, message: "User logged in",token })
            }
            else{
                return res.json({ success: false, status: 401, message: "Incorrect password" })
            }
        }
        else {
            return res.json({ success: false, status: 401, message: "User not found" })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.index = async (req, res) => {
    try {
        const users = await User.find();
        return res.json({ success: true, status: 200, message: "Users Fetched successfully", users })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ _id: id });
        if (!user) {
            return res.json({ success: false, status: 404, message: "Üser not found" })
        }
        return res.json({ success: true, status: 200, message: "User Fetched successfully", user })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndDelete({ _id: id });
        if (!user) {
            return res.json({ success: false, status: 404, message: "Üser not found" })
        }
        return res.json({ success: true, status: 200, message: "User Deleted successfully" })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });
        if (!user) {
            return res.json({ success: false, status: 404, message: "Üser not found" })
        }
        return res.json({ success: true, status: 200, message: "User Updated successfully", user })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}