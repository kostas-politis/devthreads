import { Router } from "express";
import { validateRequest } from "../middleware/validation.ts";
import { UserCreate, UserParams, UserUpdate } from "../schema/user-schema.ts";
import { createUser, updateUser } from "../service/user-service.ts";

const router = Router();

router.post("/", validateRequest({ body: UserCreate }), async (req, res) => {
  const body = req.body as UserCreate;
  const user = await createUser(body);
  res.status(201).send(user);
});

router.put(
  "/:id",
  validateRequest({ body: UserUpdate, params: UserParams }),
  async (req, res) => {
    const body = req.body as UserUpdate;
    const { id } = req.params as UserParams;
    const user = await updateUser(id, body);
    res.status(200).send(user);
  },
);

export { router as userRouter };
