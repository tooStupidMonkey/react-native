import {StyleSheet} from 'react-native'; 
import { Dimensions } from 'react-native';

const MainBlockStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      height: Dimensions.get('window').height
    },
    containerFullHeight: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: Dimensions.get('window').height,
      padding: 20
    },
    inputStyles: {
        width: Dimensions.get('window').width - 40,
        height: 34,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#222',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    width100: {
      width: Dimensions.get('window').width 
    },
    centerText: {
        textAlign: 'center'
    },  
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    resetBackground: {
      backgroundColor: 'transparent',
    },
    flexRow: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    flexRowSpaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    marginRight10: {
      marginRight: 10
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 10
    }
  });

  export default MainBlockStyles;