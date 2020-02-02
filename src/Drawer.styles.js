import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fullWidthContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  masafeAreaViewin: {
    position: 'absolute',
    left: 0,
    top: 5,
    zIndex: 0,
  },
  container: {
    position: 'absolute',
    left: 0,
    zIndex: 0,
  },
  drawerLeft: {
    position: 'absolute',
    zIndex: 100,
    borderRightWidth: 1,
    borderRightColor: 'rgba(0,0,0,.12)',
    borderStyle: 'solid',
    backgroundColor: 'white',
  },
  drawerRight: {
    position: 'absolute',
    zIndex: 100,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(0,0,0,.12)',
    borderStyle: 'solid',
    backgroundColor: 'white',
  },
});

export default styles;
