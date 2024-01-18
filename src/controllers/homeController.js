import db from "../models/index";
import CRUDService from "../services/CRUDService";

//find all data from database of table user
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }

}

//render crud.ejs 
let getCRUD = (req, res) => {

    return res.render('crud.ejs');
}

//take information of user submit
let postCRUD = async (req, res) => {
    //transfer information of client to CRUDService.createNewUser
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("post crud from server");
}

// display information of use using CRUDService.getAllUser
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('display-crud.ejs', {
        dataTable: data
    });
}

//Edit data of user 
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        //check user data not found

        return res.render('editCRUD.ejs', {
            user: userData
        });
    } else {
        return res.send("User not found!");
    }
}

//take all infomation user input to update
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDService.updateUserData(data);
    return res.render('display-crud.ejs', {
        dataTable: allUser
    });
}

// delete user by id
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send("Delete User Success!");
    } else {
        return res.send("User not found!");
    }


}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,

}