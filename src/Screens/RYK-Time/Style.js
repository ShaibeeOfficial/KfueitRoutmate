import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: 'blue', // Set your header background color
  },
  backButton: {
    fontSize: 18,
    color: 'white',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
  },
});

export default Style;
