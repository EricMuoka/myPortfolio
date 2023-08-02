import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    /** backgroundColor: '#000033',**/
  },
  viewii: {
    padding: 45,
    backgroundColor: '#fff',
  },
  textHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 90
  },
  textHeaderSmall: {
    fontSize: 16,
    color: 'gray',
    marginRight: 100,
    marginBottom: 20,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    width: '100%',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007aff',
    textAlign: 'right',
    marginBottom: 20,
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
  registerText: {
    fontSize: 16,
    color: '#333333',
  },
  registerLink: {
    color: '#568746',
    fontWeight: 'bold',
    paddingLeft: 10
  },
  forgotPasswordLink: {
    color: '#568746',
    fontWeight: 'bold',
    padding: 6
  },
  iconLinki: {
    flexDirection: 'row',
    justifyContent: 'center', // Optional: Align items horizontally in the center
    alignItems: 'center',
    paddingRight: 20,
  },
  iconLinkii: {
    flexDirection: 'row',
    justifyContent: 'center', // Optional: Align items horizontally in the center
    alignItems: 'center',
    paddingLeft: 20,
  },
  icon: {
    
    color: '#1877F2'
  },
  buttonsContainer: {
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal layout
    justifyContent: 'center', // Optional: Align items horizontally in the center
    alignItems: 'center',
    padding: 25,
  },
  title: {
    paddingLeft: 40,
    marginLeft: 40,
  },
  item: {
    paddingLeft: 65,
    marginLeft: 65,
  },
  reg: {
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal layout
    justifyContent: 'center', // Optional: Align items horizontally in the center
    alignItems: 'center',
    padding: 25,
  },
  buttonText: {
    paddingLeft: 20,
    color: '#333333'
  }
});

export default styles;