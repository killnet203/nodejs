// when use access it will run here first\
import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";



let router = express.Router();

let initWebRoutes = (app) => {
    //route of homepage
    router.get("/", homeController.getHomePage);

    //route of about
    router.get("/about", (req, res) => {
        return
    });
    //router call getCRUD
    router.get("/crud", homeController.getCRUD);

    //router call post-crud when user click button
    router.post("/post-crud", homeController.postCRUD);

    //router to display all 
    router.get('/get-crud', homeController.displayGetCRUD);

    //router to edit crud
    router.get('/edit-crud', homeController.getEditCRUD);

    //router to update information of user
    router.post('/put-crud', homeController.putCRUD);

    //router to delete user from database
    router.get('/delete-crud', homeController.deleteCRUD);

    //router to call api
    router.post('/api/login', userController.handleLogin);

    return app.use("/", router);
}

module.exports = initWebRoutes;