import { Router } from "express";
import { createUser } from "../controllers/user/createUser";
import { errorHanddle } from "../middewares/errorHandle";
import { createProviderController } from "../controllers/provider/createProvider";





const router = Router();

router

.post('/user', createUser, errorHanddle)
.post('/provider', createProviderController, errorHanddle)





export default router;