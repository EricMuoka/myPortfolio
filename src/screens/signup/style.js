import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewi: {
    paddingTop: 70,
    padding: 30,
    backgroundColor: '#000033',
  },
  viewii: {
    backgroundColor: '#fff',
    padding: 30,
    flex: 1,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  textHeaderSmall: {
    fontSize: 16,
    color: 'gray',
    marginRight: 100,
  },
  button: {
    backgroundColor: '#568746',
    paddingVertical: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  greyLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal layout
    justifyContent: 'center', // Optional: Align items horizontally in the center
    alignItems: 'center',
    padding: 25,
  },
  buttonText: {
    paddingLeft: 20,
    color: '#333333'
  },
  iconLinki: {
    flexDirection: 'row',
    justifyContent: 'center', // Optional: Align items horizontally in the center
    alignItems: 'center',
    paddingRight: 40,
  },
  iconLinkii: {
    flexDirection: 'row',
    justifyContent: 'center', // Optional: Align items horizontally in the center
    alignItems: 'center',
    paddingLeft: 40,
  },
  icon: {
    color: '#1877F2'
  },
  log: {
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal layout
    justifyContent: 'center', // Optional: Align items horizontally in the center
    alignItems: 'center',
    marginTop: 10,
  },
  logText: {
    fontSize: 16,
    color: '#fff',
    // Add more default text styles here if needed
  },
  logLink: {
    color: '#568746',
    fontWeight: 'bold',
    paddingLeft: 10
  },
});

export default styles;