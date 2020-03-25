import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import baseStyle from "../../styles/base";
import Button from "../../components/Button";
import colors, {theme} from "../../styles/colors";
import onboardingStyle from './onboarding-screen-style';
import {cleanUsername, focusTextInput} from "../../util";

export default function LoginScreen({navigation}) {
    const [username, setUsername] = useState("");
    const submit = () => {
        if (username.length > 0) {
            navigation.navigate('OauthWebView', {username});
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>Welcome</Text>
                <Text style={styles.subTitleText}>Let's start by entering your NetID</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <UsernameInput username={username} onChange={setUsername}/>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Button label="Cancel"
                        onPress={() => navigation.goBack()}
                        style={styles.negativeButton}
                        labelStyle={styles.negativeButtonLabel}
                />
                <Button label="Continue"
                        onPress={submit}
                        showShadow={true}
                        style={styles.positiveButton}
                        labelStyle={styles.positiveButtonLabel}>
                    <FontAwesome name="arrow-right" size={18}/>
                </Button>
            </View>
        </View>
    );
}

function UsernameInput({username, onChange}) {
    const usernameInputRef = useRef(null);
    return (
        <TouchableWithoutFeedback onPress={() => focusTextInput(usernameInputRef)}>
            <View style={styles.inputContainer}>
                <TextInput value={username}
                           onChangeText={text => onChange(cleanUsername(text))}
                           ref={usernameInputRef}
                           style={styles.input}
                           accessibilityHint="NetID Username"
                           autoFocus={true}
                           autoCorrect={false}
                           autoCapitalize="none"
                />
                <Text style={styles.inputStaticText}>@emich.edu</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    ...onboardingStyle,
    inputContainer: {
        ...onboardingStyle.inputContainer,
        flexDirection: 'row',
    },
});