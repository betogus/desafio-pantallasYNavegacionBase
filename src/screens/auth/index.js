import React, { useEffect, useReducer, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Button, TouchableOpacity, Platform, ScrollView, Image } from 'react-native';
import colors from '../../constants/colors';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../components';
import { onInputChange, UPDATED_FORM } from '../../utils';
import { loguearse, registrarse } from '../../store/thunk';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
 


  const formReducer = (state, action) => {
    switch (action.type) {
      case UPDATED_FORM: 
        const {name, value, hasError, error, touched, isFormValid} = action.data
        return {
          ...state, 
          [name]: {
            ...state[name],
            value,
            hasError,
            error,
            touched
          },
          isFormValid
        };
      default: 
        return state;
    }
  }
const Auth = ({ navigation }) => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)



  const initialState = {
    email: {value: auth.email? auth.email : "", error: '', touched: false, hasError: true},
    password: {value: auth.password? auth.password : "", error: '', touched: false, hasError: true},
    isFormValid: false,
  }
  
 
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [isLogin, setIsLogin] = useState(true);
  const [submit, setSubmit] = useState(false)

  const title = isLogin ? 'Login' : 'Register';
  const message = isLogin ? "Don't you have an account?" : 'Do you have an account?'
  const messageAction = isLogin ? 'Login' : 'Register';
  
  useEffect(() => {
    isLogin && submit ?
      dispatch(loguearse(formState.email.value, formState.password.value))
      : !isLogin && submit ?
      dispatch(registrarse(formState.email.value, formState.password.value))
      : null
  }, [submit])

  
  
  const onHandleChangeInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState)
  }

  
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/adaptive-icon.png')} style={styles.logo}/>
        <Text style={styles.titleLogo}>Llantén Almacén</Text> 
      </View>
        <KeyboardAwareScrollView style={styles.keyboardContainer} behavior='padding' >
          <ScrollView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Input 
              label='Email'
              placeholder='enter your email'
              placeholderTextColor={colors.title}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(text)=>onHandleChangeInput(text, 'email')}
              value={formState.email.value}
              hasError={formState.email.hasError}
              error={formState.email.error}
              touched={formState.email.touched}
            />
            <Input 
              label="Password"
              placeholder='enter your password'
              placeholderTextColor={colors.title}
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(text)=>onHandleChangeInput(text, 'password')}
              value={formState.password.value}
              hasError={formState.password.hasError}
              error={formState.password.error}
              touched={formState.email.touched}
            />
            <Button 
              color={colors.primary}
              title={messageAction}
              disabled={!formState.isFormValid}
              onPress={() => setSubmit(!submit)}
            />
            <View style={styles.prompt}>
              <TouchableOpacity style={styles.promptButton} onPress={()=>setIsLogin(!isLogin)}>
                <Text style={styles.promptMessage}>{message}</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>


  );
};

export default Auth;
