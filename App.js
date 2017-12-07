import React from 'react';
import {Text , View} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

const HomeScreen = () => (
  <View style={{ alignItems : 'center' }} >
    <Text>
    This is the Home Display
      </Text>
    </View>
);
const UnderScreen = () => (
  <View style={{alignItems:'center'}} >
    <Text>
    This is the Under Display  
      </Text>
    </View>
);
const SubUnderScreen = () => (
  <View style={{alignItems:'center'}}  >
    <Text>
    This is the Sub Under Display
      </Text>
    </View>
);
const ForTab = () => (
  <View>
    <Text>
    This is the For Tab Display
      </Text>
    </View>
);
const Root = DrawerNavigator ({
  Home : {
    screen : HomeScreen ,
    navigationOptoins :{
      headerTitle: 'Homy'
    },
  },
  Under :{
    screen : UnderScreen ,
    navigationOptoins : {
      headerTitle : 'Undery'
    },
  },
  Sub : {
    screen : SubUnderScreen ,
    navigationOptoins : {
      headerTitle : 'Suby'
    },
  },
});
export default Root ;
