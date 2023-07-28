import { Router } from "express";
import { createUser } from "../controllers/user/createUser";
import { createProviderController } from "../controllers/provider/createProvider";
import { clientInputValidation } from "../middewares";
import { userSchema } from "../lib/zodSchema/userSchema";





const router = Router();

router

.post('/user', clientInputValidation(userSchema) ,createUser)
.post('/provider', createProviderController)





export default router;