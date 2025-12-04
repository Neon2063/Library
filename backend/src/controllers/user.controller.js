import { asyncHandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"

const registerUser = asyncHandler(async (req, res) => {
    //Handle user inputs from frontend
    const { Username, Name, Password, Kuid } = req.body;
    // validating user
    if (
        [Username, Name, Password, Kuid].some((userinfo) => userinfo?.trim() == "")
    ) {
        console.log('Error in data sending format')
    }

    // recheck user existance
    const userCreated = await User.findOne({
        Kuid
    })

    if (userCreated) {
        console.log('Already user with same id')
    }
    // data entry in database as object

    const user = await User.create({
        Username,
        Name,
        Kuid,
        Password
    })


    return res.status(200).json({
        message:"User Created sucessfully"
    })





});

const loginUser = asyncHandler(
     async (req, res) => {
    // get login data
    const {kuid, password } = req.body;

   // match ku id
    const findUser = await User.findOne({
        kuid:findUserKuid
    })
    if(findUser){
        console.log("okey")
    }
    if(!findUser){
        res.status(400).json({
            message:"no user found"
        })
    }

    const Ismatched = await bcrypt.compare(password,findUser.Password)


    if(!Ismatched){
        return res.status(500).json({
        message:"incorrect password"
       })
    }
    
    if(Ismatched){
       res.status(100).json({
        message:" password correct "
       })
    } 



    
});
export {registerUser,
    loginUser

}














































export default registerUser;
