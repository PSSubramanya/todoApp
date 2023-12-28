import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTask} from '../../actions/TaskActions';

import {Colors} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const LandingPage = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [inputText, setInputText] = useState('');
  const [tasksArray, setTasksArray] = useState([]);

  const handletext = val => {
    const tempVal = val;
    setInputText(tempVal);
  };

  useEffect(() => {
    dispatch(addTask(tasksArray));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksArray]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          //   backgroundColor: 'red',
          //   flex: 1,
          height: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Text>HELLO WORLD</Text> */}
        <TextInput
          onChangeText={handletext}
          style={{
            borderWidth: 1,
            width: 300,
            textAlign: 'center',
            borderRadius: 5,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            const tempTaskArray = [...tasksArray, inputText];
            setTasksArray(tempTaskArray);
          }}
          style={{
            backgroundColor: 'green',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            marginTop: 10,
            borderRadius: 10,
          }}>
          <Text style={{textTransform: 'uppercase', color: 'white'}}>
            Add task
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TaskDisplay', {
              textValue: 'HI IM FROM PREVIOUS PAGE',
            });
          }}
          style={{marginTop: 10}}>
          <Text>Go To Task Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default LandingPage;
