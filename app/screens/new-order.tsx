import AppButton from '@/components/app-button';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, KeyboardAvoidingView, Platform, StyleSheet, TextInput, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterCustomerScreen() {
    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];
    const [customername, setCustomerName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [phoneModel, setPhoneModel] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={100}>
                <ThemedView style={styles.container}>
                    <TextInput placeholder='Navn' style={[styles.inputBox, { borderColor: themeColors.border, color: themeColors.text }]} value={customername} onChangeText={setCustomerName} />
                    <TextInput placeholder='Telefonnummer' style={[styles.inputBox, { borderColor: themeColors.border, color: themeColors.text }]} value={phonenumber} onChangeText={setPhonenumber} keyboardType="numeric" />
                    <TextInput placeholder='Telefon modell' style={[styles.inputBox, { borderColor: themeColors.border, color: themeColors.text }]} value={phoneModel} onChangeText={setPhoneModel} />
                    <AppButton label='Legg til deler' onPress={() => router.push('/screens/add-parts')} />
                </ThemedView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: width * 0.6,
        height: height * 0.06,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        maxWidth: 400,
    },
    inputBoxMultiline: {
        width: width * 0.6,
        height: height * 0.15,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        maxWidth: 400,
    },
});