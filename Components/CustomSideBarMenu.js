import * as React from 'react';
import {Text,View, StyleSheet} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component{
render(){
    return(
        <View style={styles.container}>
            <View style={styles.DrawerItemsContainer}>
                <DrawerItems {...this.props}/>
            </View>
            <View style={styles.logOutContainer}>
                <TouchableOpacity style={styles.logOutButton}
                onPress={()=>{
                    this.props.navigation.navigate('WelcomeScreen')
                    firebase.auth().signOut()
                }}
                >
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
} 