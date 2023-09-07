import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  nav: {
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workflow: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EDEDED',
  },
  workflowItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  circle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 100,
  },
});

export default styles;
