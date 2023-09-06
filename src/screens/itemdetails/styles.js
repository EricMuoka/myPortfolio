import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 25,
  },
  top: {
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#e9f1f5',
  },
  bottom: {
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttons: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
