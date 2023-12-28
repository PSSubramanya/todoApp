import React from 'react';
import {View, Text, FlatList, Image, ImageBackground} from 'react-native';
import {useSelector} from 'react-redux';
import imagePaths from '../../constants/imagePaths';

const TaskDisplay = props => {
  const {route} = props;
  const {params} = route;
  const listData = useSelector(state => state?.taskReducer?.fetchTasks);

  console.log('FETCHED TASKS', listData);
  console.log('FETCHED PARAMS', params);
  return (
    <ImageBackground
      source={imagePaths?.gadgetImage}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black',
      }}>
      {/* <<View> */}
      <Text>The Tasks</Text>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'lightgrey',
          borderRadius: 10,
          backgroundColor: 'rgba(256,256,256,0.5)',
        }}>
        <Image
          source={imagePaths?.headPhoneImage}
          style={{
            height: 200,
            width: 200,
            alignSelf: 'center',
          }}
        />
        <View style={{width: 300, margin: 20}}>
          <Text style={{marginTop: 10}}>Product name</Text>
          <Text style={{marginTop: 10}}>Product rough descrition</Text>
          <Text style={{marginTop: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
      <FlatList
        data={listData?.data}
        keyExtractor={item => item}
        renderItem={({item, ind}) => {
          return <Text>{item}</Text>;
        }}
      />
    </ImageBackground>
  );
};

export default TaskDisplay;
