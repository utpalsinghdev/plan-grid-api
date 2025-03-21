import { Router } from "express";
import healthCheckRoute from "./app/module/test/test.routes";


const router = Router();


router.use("/test", healthCheckRoute);

export default router;