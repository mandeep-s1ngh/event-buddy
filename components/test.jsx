import { FlatList, Text, View } from 'react-native';
import EventCard from './EventCard';

const data = [
  { key: '1', text: 'Text 1' },
  { key: '2', text: 'Text 2' },
  { key: '3', text: 'Text 3' },
  { key: '4', text: 'Text 4' },
  { key: '5', text: 'Text 5' },
];

const renderItem = ({ item }) => {
  return (
    <View>
      <EventCard />
    </View>
  );
};

const TextList = () => <FlatList data={data} renderItem={renderItem} />;

export default TextList;
