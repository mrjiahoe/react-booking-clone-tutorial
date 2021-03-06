import express from "express";
import {
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
// 	res.send("hello user, you are logged in");
// });
// inside .env, need MONGO and JWT, jwt is from "openssl rand -base64 32" in console

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
// 	res.send("hello user, you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
// 	res.send("hello admin, you are logged in and you can delete any account");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
