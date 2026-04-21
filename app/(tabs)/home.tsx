import AppButton from '@/src/components/ui/app-button';
import { FunctionButton } from '@/src/components/ui/app-button';
import { Colors } from '@/src/constants/theme';
import { useAuthContext } from '@/src/hooks/use-auth-context';
import * as expo from 'expo-router';
import { useWindowDimensions, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];
    const { profile } = useAuthContext();

    const insets = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();
    const isPortrait = height > width;

    if (isPortrait) {
        return (
            <View style={[styles.container, {backgroundColor: themeColors.background}]}>
                <AppButton label='Ny ordre' onPress={() => expo.router.push('/screens/new-order')} />
                <AppButton label='Registrer kunde' onPress={() => expo.router.push('/screens/register-customer')} />
                <AppButton label='Profil' onPress={() => expo.router.push('/screens/user-profile')} />
            </View>
        )
    }

    return (
        <View style={[styles.container, {backgroundColor: themeColors.background}]}>
            <Text style={[styles.sectionTitle, { color: themeColors.text }]}>Dashboard</Text>

            <View style={[{flexDirection: 'row', gap: 15, marginBottom: 15}]}>
                <FunctionButton label='Ny ordre' icon='app-registration' onPress={() => expo.router.push('/screens/new-order')} />
                <FunctionButton label='Registrer kunde' icon='person-add-alt-1' onPress={() => expo.router.push('/screens/register-customer')} />
                <FunctionButton label='Profil' icon='settings' onPress={() => expo.router.push('/screens/user-profile')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    sectionSubtitle: {
        fontSize: 16,
        marginBottom: 28,
    }
});