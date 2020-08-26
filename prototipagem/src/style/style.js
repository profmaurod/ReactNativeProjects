import {StyleSheet, Dimensons} from 'react-native';
//var width = Dimensons.get('window').width;


const card = StyleSheet.create(
    {
        super:{
            display: 'flex', 
            top: -150,
        },
        image:{
            width:200,
            height:200,
            alignSelf: 'center',
        },
        center:{
            flex:1,
            justifyContent: "center",
            alignItems: "center",
        }
    }
  );

  export {card,};