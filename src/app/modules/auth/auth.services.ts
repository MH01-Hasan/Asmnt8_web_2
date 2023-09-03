import { User } from "@prisma/client";
import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
import config from "../../../config";
import ApiError from "../../../errors/ApiError";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import prisma from "../../../shared/prisma";
import { ILoginResponse, ILoginUser } from "./auth.interface";


const signup = async (payload: User): Promise<User| null> => {
    const result = await prisma.user.create({data:payload})
    return result;
  };

//..............................................................................

const loginUser = async (payload: ILoginUser): Promise<ILoginResponse> => {
    //........... check user...................
  const userData = await prisma.user.findFirst({
    where: {
        email:payload?.email
    },
  })
   
    if (!userData) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found!');
    }
  
  
    // compare password
    const isMatchedPassword = userData?.password === payload?.password;


    if (!isMatchedPassword) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Password doesn't match !");
    }
  
    // generate access and refresh token
    const { id, role } = userData;
    const accessToken = jwtHelpers.createToken(
      {
        userId: id,
        role: role,
      },
      config.jwt.secret as string,
      config.jwt.expires_in as string
    );
    const refreshToken = jwtHelpers.createToken(
      {
        userId: id,
        role: role,
      },
      config.jwt.refresh_secret as string,
      config.jwt.refresh_expires_in as string
    );
  
    return {
      accessToken,
      refreshToken,
    };
  };
  
  const refreshToken = async (
    payload: string
  ): Promise<ILoginResponse | null> => {
    // Verify token
    let verifyToken = null;
    try {
      verifyToken = jwtHelpers.verifyToken(
        payload,
        config.jwt.refresh_secret as string
      );
    } catch (error) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Invalid refresh token!');
    }
  
    const { userId } = verifyToken as JwtPayload;
  
    // Check user exit's
    const user = await prisma.user.findFirst({
        where:{
            id:userId
        }
    })

    if (!user) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'User Not Found!');
    }
  
    // generate a new access token
    const newAccessToken = jwtHelpers.createToken(
      {
        userId: user.id,
        role: user.role,
      },
      config.jwt.secret as string,
      config.jwt.expires_in as string
    );
  
    return {
      accessToken: newAccessToken,
    };
  };
  
  export const AuthService = {
    signup,
    loginUser,
    refreshToken,
  };
  