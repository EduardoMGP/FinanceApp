import React from 'react';
import { 
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity 
} from 'react-native';

import { Feather } from '@expo/vector-icons'

import colors from '../../theme/colors'

const statusBarHeight = StatusBar.currentHeight 
  ? StatusBar.currentHeight + 22 
  : 64;

  export default function Header({name}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonUser}
        >
          <Feather name="user" size={27} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark_purple,
    paddingTop: statusBarHeight,
  },
})