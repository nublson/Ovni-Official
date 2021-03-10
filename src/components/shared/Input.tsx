import {useField} from '@unform/core';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, TextInput, TextInputProps, View, Text} from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
  code?: boolean;
  field?: string;
}

interface InputValueReference {
  value: string;
}

const TextField: React.FC<InputProps> = ({name, code, field, ...rest}) => {
  const inputElementRef = useRef<any>(null);

  const {fieldName, registerField, defaultValue, error, clearError} = useField(
    name,
  );

  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <View style={[styles.container, code && {marginBottom: 40}]}>
      <TextInput
        ref={inputElementRef}
        onFocus={clearError}
        style={
          !error
            ? !code
              ? styles.input
              : [styles.input, {textAlign: 'center'}]
            : [
                !code
                  ? [styles.input, styles.fail]
                  : [styles.input, styles.fail, {textAlign: 'center'}],
              ]
        }
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
      {error && <Text style={styles.failText}>{error}</Text>}
      {code && (
        <Text style={styles.codeText}>
          Enter the OTP sent to{'\n'}
          <Text style={[styles.codeText, styles.codeSpam]}>{field}</Text>
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginTop: 30,
  },
  input: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 16,
  },
  fail: {
    borderColor: '#FF5E5B',
  },
  failText: {
    fontSize: 10,
    fontFamily: 'Poppins-Light',
    fontWeight: '300',
    color: '#FF5E5B',
    marginTop: 2,
  },
  codeText: {
    width: '100%',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#8d8d8d',
    textAlign: 'center',
    marginTop: 5,
  },
  codeSpam: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
});

export default {
  TextField,
};
