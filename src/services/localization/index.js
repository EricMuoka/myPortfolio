import LocalizedStrings from 'react-native-localization';

/**
 * Defined Strings for localization
 */
const Strings = new LocalizedStrings({
    en: {
        live_events: 'Live Events',
        forgot_password: 'Forgot Password',
        sign_in: 'Sign In',
        sign_up: 'Sign Up',
        sign_out: 'Sign Out',
        login: 'Sign in to your Account',
        register: 'Create your account'
    },
});
export default Strings;

/**
 * Available Language and their mappings, label & flag icon svg
 * @type {{en: {code: string, flag: *, label: string}}}
 */
export const languageMappings = {
    en: {
        code: 'en',
        label: 'English',
        flag: require('../../assets/flags/unitedStates.svg')
    },
    bn: {
        code: 'bn',
        label: 'bengali',
        flag: require('../../assets/flags/india.svg')  
    }
};
