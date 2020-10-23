import jwt from 'jsonwebtoken';

export interface IVerified {
  user: string | object | Buffer;
  iat: number;
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

export const sign = (user: string | object | Buffer, secret: string): string => {
  const token: string = jwt.sign(user, secret);
  return token;
};
