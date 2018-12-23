import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

export default class MainPage extends React.Component
{
    render()
    {
        return (
            <SafeAreaView style={styles.container}>

                {/* ============HEADER============== */}
            
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Mortgage Calculator
                    </Text>
                </View>

                {/* ================================ */}
                {/* ==============BODY============== */}
                
                <View style={styles.body}>

                </View>

                {/* ================================ */}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 70,
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    body: {

    },
});
