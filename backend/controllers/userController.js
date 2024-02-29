import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {

        const currentUser = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: currentUser } }).select("-password")

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error getting users in sidebar");
        res.status(500).json({ error: "Internal Server Error\n" + error })
    }
}