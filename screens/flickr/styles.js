import { StatusBar, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    headerTitle: {
      color: 'white',
      fontSize: 20,
      padding: '2%',
      textAlign: 'left',
      fontWeight: 'bold'
    },
    header: {
      backgroundColor: 'black',
      height: 70,
    }
  });


export default  styles;
