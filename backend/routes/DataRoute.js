import express from "express";
import {
    getDatas,
    getDataById,
    saveData,
    updateData,
    deleteData
}
 from "../controllers/DataController.js"
const router=express.Router();

router.get("/datas",getDatas)
router.get("/data/:id",getDataById)
router.post("/datas",saveData)
router.patch("/datas/:id",updateData)
router.delete("/datas/:id",deleteData)


export default router