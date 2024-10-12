import { Link } from 'expo-router';
import { SafeAreaView, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CardName from '@/components/shared/CardName/CardName';
import Carousel from 'react-native-reanimated-carousel';
import Line from '@/components/shared/Chart/Line';
import { useState } from 'react';
import { Description } from '@/constants/API';
const screenWidth = Dimensions.get('window').width;
//FAKE API
const cardNameArray = [
  {
    iconType: 'Feather',
    iconName: 'sun',
    cardName: "Light",
    warning: 0,
  },
  {
    iconName: 'temperature-half',
    iconType: 'FontAwesome6',
    cardName: "Temperature",
    warning: 0,
  },
  {
    iconName: 'water',
    iconType: 'Entypo',
    cardName: "Humidity",
    warning: 1,
  },
  {
    iconName: 'earth',
    iconType: 'AntDesign',
    cardName: "Soil",
    warning: 2,
  },
]
//Data chart
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
      <SafeAreaView style={styles.header}>
        <SafeAreaView>
          <SafeAreaView style={styles.headerName}>
            <Text style={styles.plantName}>Capsicum</Text>
            <Text style={styles.statusPlan}>Good Health</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.headerTime}>
            <Text style={styles.weeks}>22 weeks</Text>
            <FontAwesome name="pencil" size={20} color="gray" />          
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.graphContainer}>
        <Line data={data['Light']}></Line>
      </SafeAreaView>
    
      <Carousel
                loop
                width= {screenWidth / 3}  // đây là kích thước của item
                height={screenWidth * 0.4} // đây là kích thước của item
                data={cardNameArray}
                style = {styles.cardNameContainer}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => {
                      setActiveItem(index)
                    }}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            width: (screenWidth - 40) / 3, // Chia đều cho 3 item
                            margin: 'auto',
                            
                        }}
                        key={index}
                    >
                        <CardName iconName={item.iconName} iconType={item.iconType} key={index} warning={item.warning} onclick={index == activeItem? true : false}></CardName>
                    </TouchableOpacity>
                )}
      />
      <ScrollView>
        <SafeAreaView style={styles.desContainer}>
          <Text style={styles.desTitle}>Best Conditions:</Text>
          <SafeAreaView style={styles.desTextContainer}>
              <Text style={styles.desText}>
                Hãy duy trì các thông số này để cây phát triển tốt nhất:
                <Text style={styles.textLine}>Nhiệt độ: {Description['Cây non'].temp}</Text>
                <Text style={styles.textLine}>Độ ẩm: {Description['Cây non'].humd}</Text>
                <Text style={styles.textLine}>Ánh sáng: {Description['Cây non'].light}</Text>
                <Text style={styles.textLine}>Độ ẩm đất: {Description['Cây non'].soil}</Text>
              </Text>
          </SafeAreaView>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20,
  },
  headerName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  headerTime: {
    flexDirection: 'row',
    gap: 10,
  },
  statusPlan: {
    backgroundColor: '#59C36A',
    borderRadius: 20,
    padding: 7,
    fontWeight: 500,
    color: 'white',
  },
  plantName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weeks: {
    fontSize: 16,
    color: 'gray',
  },
  cardNameContainer: {
    width: screenWidth - 20,
    marginHorizontal: 'auto',
    height: 200,
    alignItems: 'center',
  },
  graphContainer: {
    width: screenWidth - 40,
    margin: 'auto',
  },
  desContainer: {
    marginHorizontal: 40,
    width: screenWidth - 40,
    margin: 'auto',
    gap: 20,
    flexDirection: 'column',
  },
  desTitle: {
    color: '#2E5A1C',
    fontSize: 20,
    fontWeight: 'bold',
  },
  desTextContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#21963A',
    borderRadius: 20,
  },
  desText: {

  },
  textLine: {
    marginLeft: 10,
  }
});