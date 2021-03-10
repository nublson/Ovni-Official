import {RefObject} from 'react';
import {FormHandles} from '@unform/core';

import {ERRORS} from './typeErrors';

type refType = RefObject<FormHandles>;

interface IErrorProps {
  code: string;
  message: string;
  field: string;
}

export const setError = (formRef: refType, error: IErrorProps) => {
  const key = error.code;

  const errorObj: any = ERRORS.find((err) => err.code === key);

  formRef.current?.setErrors({[errorObj.field]: errorObj.message});
};
