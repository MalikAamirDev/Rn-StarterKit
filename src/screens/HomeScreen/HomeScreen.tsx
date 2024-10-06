import {Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import {useDogs} from '../../store/userSlice/userApiServices';

const HomeScreen = () => {
  const {data, isPending, error} = useDogs();
  console.log('🚀 ~ HomeScreen ~ data:', data);
  console.log('🚀 ~ HomeScreen ~ error:', error);
  console.log('🚀 ~ HomeScreen ~ isPending:', isPending);
  /*
   ** Lifecycle methods
   */
  if (isPending) return <Text>'Loading...'</Text>;

  if (error) return <Text>An error has occurred: ' + error.message</Text>;

  return (
    <View style={styles.mainView}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
