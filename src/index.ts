import jwt from 'jsonwebtoken';

export interface IVerified {
  username: string;
  iat: number;
}

export interface ITokenData {
  username: string;
}

export const verify = (token: string | undefined, secret: string): IVerified | undefined => {
  if (token === undefined) return undefined;

  try {
    const verified = jwt.verify(token, secret);
    return verified as IVerified;
  } catch (error) {
    return undefined;
  }
};

export const sign = (user: ITokenData, secret: string): string => {
  const token: string = jwt.sign({ username: user.username }, secret);
  return token;
};
