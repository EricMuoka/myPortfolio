import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /** backgroundColor: '#000033',**/
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
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  textHeaderSmall: {
    fontSize: 16,
    color: 'gray',
    marginRight: 100,
  },
  inputField: {
    borderColor: '#ccc',
    fontSize: 26,
    color: '#333',
    marginBottom: 5,
  },
  forgotPasswordLink: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#568746',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#568746',
    paddingVertical: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 5,
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
    marginTop: 30,
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
  reg: {
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal layout
    justifyContent: 'center', // Optional: Align items horizontally in the center
    alignItems: 'center',
    marginTop: 40,
  },
  registerLink: {
    color: '#568746',
    fontWeight: 'bold',
    paddingLeft: 10
  },
});

export default styles;