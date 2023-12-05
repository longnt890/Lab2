import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchRandomContact } from '../utility/api';
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';
import color from '../utility/color';

const Profile = ({route}) => {

    // const [contact, setContact] = useState([]);

    // useEffect(()=>{
    //     fetchRandomContact().then(
    //         contact=>setContact(contact)
    //     )
    // }, []);
    const {contact} = route.params;
    const {avatar, name, phone,email, cell} = contact;
  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} phone={phone}/>
      </View>
      <View style={styles.detailSection}>
        <DetailListItem icon="mail" title="Email" subtitle={email}/>
        <DetailListItem icon="phone" title="Work" subtitle={phone}/>
        <DetailListItem icon="smartphone" title="Personal" subtitle={cell}/>
      </View>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    avatarSection:{
        flex:1, alignItems:'center', justifyContent: 'center', backgroundColor: color.blue,
    },
    detailSection:{
        flex: 1, backgroundColor: 'white',
    }
})