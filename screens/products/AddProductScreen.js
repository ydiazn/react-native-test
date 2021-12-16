import React from 'react';
import { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../config/firebase/";


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label('Name')
    .required('Please enter a name'),
  price: Yup.number()
    .label('Price')
    .required('Please enter a price')
});

const ErrorMessage = ({ errorValue }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{errorValue}</Text>
  </View>
);

export default function AddProductScreen({navigation}) {
  const [ error, setError ] = useState('');
  const [ isSubmiting, setIssubmiting ] = useState(false);
  const ref = collection(db, "products");

  async function onCreateHandler(values) {
    setIssubmiting(true);

    try {
      await addDoc(ref, {...values});
      setIssubmiting(false);
      navigation.navigate("ProductHome")
    } catch(e) {
      console.log(e.message);
    }
  }

  return (
    <>
    <View style={styles.container}>
      <ErrorMessage errorValue={error} />
      <Formik
        initialValues={{ name: '', price: '' }}
        onSubmit={(values, actions) => {
          onCreateHandler(values, actions);
        }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur
        }) => (
          <>
            <TextInput
              style={styles.input}
              numberOfLines={1}
              value={values.name}
              placeholder="Enter a name"
              onChangeText={handleChange('name')}
              autoCapitalize="none"
              onBlur={handleBlur('name')}
            />
            <ErrorMessage errorValue={touched.name && errors.name} />
            <TextInput
              style={styles.input}
              numberOfLines={1}
              value={values.price}
              placeholder="Enter a price"
              onChangeText={handleChange('price')}
              autoCapitalize="none"
              onBlur={handleBlur('price')}
            />
            <ErrorMessage errorValue={touched.price && errors.price} />
            <View style={styles.buttonContainer}> 
              <Button
              title="Submit"
              onPress={handleSubmit}
            />
    </View>
          </>
        )}
      </Formik>
      {isSubmiting && <ActivityIndicator size="large" /> }
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    marginVertical: 5
  },
  errorText: {
    color: 'red'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    backgroundColor: "white",
  },
  input: {
    marginVertical: 10,
    width: "100%",

    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  buttonContainer: {
    backgroundColor: "white",
    width: "100%",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  },
  loading: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
