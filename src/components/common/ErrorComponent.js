import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import MainBlockStyles from '@/styles';
import * as RootNavigation from '#/RootNavigation';

export default function () {

    return (
        <View>
            <SafeAreaView style={MainBlockStyles.container}>
                <FontAwesome name="snapchat-ghost" size={25} style={{ color: 'red' }} />
                <Text style={MainBlockStyles.centerText}>Something went wrong :(</Text>
                <Button
                    title={'Go to home ->'}
                    onPress={() => RootNavigation.navigate('Notes')}
                />
            </SafeAreaView>
        </View>
    );
}