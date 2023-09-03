// import requestValidationHandler from '../../middlewares/requestValidationHandler'
// import { AuthController } from './auth.controller'
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { user_login_zod_schema, user_refresh_token_zod_schema, user_signup_zod_schema } from './auth.validation';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(user_signup_zod_schema),
  AuthController.signup
);

router.post(
  '/login',
  validateRequest(user_login_zod_schema),
  AuthController.loginUser
);

router.post(
  '/refresh-token',
  validateRequest(user_refresh_token_zod_schema),
  AuthController.refreshToken
);

export const AuthRoute = router