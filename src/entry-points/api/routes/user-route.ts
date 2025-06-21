import { Router } from "express";
import { validateRequest } from "../middleware/validation";
import { UserCreate, UserParams } from "../schema/user-schema";

const router = Router();

router.put(
  "/:id",
  validateRequest({ body: UserCreate, params: UserParams }),
  (req, res) => {
    res.send("User created");
  },
);

export { router as userRouter };
