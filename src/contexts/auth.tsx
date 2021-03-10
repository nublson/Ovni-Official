import React, {createContext, useEffect, useMemo} from 'react';

export interface ISignData {
  email: string;
  password: string;
}

export interface ISignUpData extends ISignData {
  fullName: string;
}

export interface IConfirmSignUpData {
  email: string;
  code: string;
}

export interface IResetPasswordData {
  email: string;
}

export interface INewPasswordData {
  email: string;
  code: string;
  password: string;
}

interface IAuthContextData {
  signed: boolean;
  loading: boolean;
  user: {} | null;
  signIn(data: ISignData): Promise<void>;
  signUp(data: ISignUpData): Promise<void>;
  confirmSignUp(data: IConfirmSignUpData): Promise<void>;
  resendCode(email: string): Promise<void>;
  resetPassword(data: IResetPasswordData): Promise<void>;
  newPassword(data: INewPasswordData): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export const AuthProvider: React.FC = ({children}) => {
  const signIn = async () => {
    try {
      console.log('Sign In');
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const signUp = async () => {
    try {
      console.log('Sign Up');
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const confirmSignUp = async () => {
    try {
      console.log('Confirm');
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const resendCode = async () => {
    try {
      console.log('Resend code');
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const resetPassword = async () => {
    try {
      console.log('reset password');
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const newPassword = async () => {
    try {
      console.log('new password');
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const signOut = async () => {
    try {
      console.log('Sign out');
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  useEffect(() => {
    console.log('login');
  }, []);

  const values = useMemo(
    () => ({
      signed: false,
      user: null,
      loading: false,
      signIn,
      signUp,
      confirmSignUp,
      resendCode,
      resetPassword,
      newPassword,
      signOut,
    }),
    [],
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
