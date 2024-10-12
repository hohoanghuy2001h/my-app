import { Link } from 'expo-router';
import { SafeAreaView, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CardName from '@/components/shared/CardName/CardName';
import Carousel from 'react-native-reanimated-carousel';
import Chart from '@/components/shared/Chart/Line';
import { useState } from 'react';
import { Description } from '@/constants/API';
import Line from '@/components/shared/Chart/Line';
import Bar from '@/components/shared/Chart/Bar';
const screenWidth = Dimensions.get('window').width;
const data = {
  'Light': {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
      },
    ],
  },
  'Tempurature': {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [90, 45, 28, 80, 99, 43, 50],
      },
    ],
  },
  'Humidity': {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [80, 45, 28, 80, 99, 43, 50],
      },
    ],
  },
  'Soil': {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [100, 45, 28, 80, 99, 43, 50],
      },
    ],
  },
}
export default function StatisticalScreen() {
  const [activeItem, setActiveItem] = useState(0); // State để lưu vị trí của item active
  return (
    <SafeAreaView style={styles.container}>
        <Line data={data['Soil']} title='Biểu đồ lượng nước tiêu thụ mỗi ngày'></Line>
        <Bar data={data['Soil']} title='Biểu đồ lượng nước tiêu thụ mỗi ngày' ></Bar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    gap: 30,
    alignItems: 'center',
  },
});