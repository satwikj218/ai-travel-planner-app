import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from './../../../configs/FirebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    const OnSignIn = () => {

        if (!email && !password) {
            ToastAndroid.show('Please enter all details', ToastAndroid.LONG);
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.replace('/mytrip');
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
                if (errorCode === "auth/invalid-credential") {
                    ToastAndroid.show('Invalid credentials', ToastAndroid.LONG);
                }
            });
    }

    return (
        <View style={{
            padding: 25,
            paddingTop: 50,
            backgroundColor: Colors.WHITE,
            height: '100%',
        }}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30,
                marginTop: 30,
            }}>
                Let's Sign You In
            </Text>

            <Text style={{
                fontFamily: 'outfit',
                fontSize: 30,
                color: Colors.GRAY,
                marginTop: 20,
            }}>
                Welcome Back
            </Text>

            <Text style={{
                fontFamily: 'outfit',
                fontSize: 30,
                color: Colors.GRAY,
                marginTop: 10,
            }}>
                You've been missed!
            </Text>

            {/* Email */}
            <View style={{
                marginTop: 50,
            }}>
                <Text style={{
                    fontFamily: 'outfit',
                }}>
                    Email
                </Text>
                <TextInput
                    placeholder="Enter your Email"
                    style={styles.input}
                    onChangeText={(value) => setEmail(value)}
                />
            </View>

            {/* Password */}
            <View style={{
                marginTop: 20,
            }}>
                <Text style={{
                    fontFamily: 'outfit',
                }}>
                    Password
                </Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Enter your Password"
                    style={styles.input}
                    onChangeText={(value) => setPassword(value)}
                />
            </View>

            {/* Sign In Button */}
            <TouchableOpacity onPress={OnSignIn} style={{
                padding: 20,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                marginTop: 50,
            }}>
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: 'center',
                }}>
                    Sign In
                </Text>
            </TouchableOpacity>

            {/* Create Account Button */}
            <TouchableOpacity
                onPress={() => router.replace('auth/sign-up')}
                style={{
                    padding: 20,
                    backgroundColor: Colors.WHITE,
                    borderRadius: 15,
                    marginTop: 20,
                    borderWidth: 1,
                }}
            >
                <Text style={{
                    color: Colors.PRIMARY,
                    textAlign: 'center',
                }}>
                    Create Account
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: 'outfit',
    }
})