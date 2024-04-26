import userModel from "../models/user.model.js"

export const getUsers = async (req, res) => {
    try{
        let users = await userModel.find();
        return res.send(users);
    }catch(error){
        return res.json({ error: "Error displaying data" + error });
    }
}
export const getUser = async (req, res) => {
  try{
      let id = req.params._id;
      let users = await userModel.find(id);
      return res.send(users);
  }catch(error){
      return res.json({ error: "Error getting user data" + error });
  }
}
export const postUser = async (req, res) => {
    try {
        let userData = req.body;
        let newUser = await userModel.create(userData);
        return res.json(newUser);
    } catch(error) {
        return res.status(500).json({ error: "Error creating user", message: error.message });
    }
}

export const putUser = async (req, res) => {
    try {
        let dataToModify = req.body;
        let idToModify = req.params._id;
        await userModel.findByIdAndUpdate(idToModify, dataToModify);
        return res.json({ msg: "Successfully updated" });
    } catch(e) {
        return res.json({ error: e });
    }
}
export const deleteUser = async (req, res) => {
    try {
        let idToDelete = req.params._id
        let userToDelete = await userModel.findByIdAndDelete(idToDelete)
        if (userToDelete) {
            return res.json({ msg: "Successfully deleted" })
        } else {
            return res.json({ msg: "Nothing was deleted" })
        }

    } catch(e) {
        return res.json({ error: e })
    }
}