import React,{ useState } from "react"
import { emptyUser, User } from "./common/types"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingStackNavigator from './navigation/OnBoardingStack';
import MainStackNavigator from './navigation/MainStack';

const UserContext = React.createContext<
    [User, React.Dispatch<React.SetStateAction<User>> | null]
>([emptyUser, null])

const UserProvider = () => {
    const [state, setState] = useState(emptyUser)

    return (
        <UserContext.Provider value={[state, setState]}>
            <SafeAreaProvider>
                <NavigationContainer>
                    {state.isLoggedIn ? <MainStackNavigator/> : <OnboardingStackNavigator/>}
            </NavigationContainer>
                </SafeAreaProvider>
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}