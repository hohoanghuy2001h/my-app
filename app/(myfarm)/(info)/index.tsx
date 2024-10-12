import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image ,Dimensions} from 'react-native';
import {CardInfo} from '@/components/shared/CardInfo/CardInfo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// or any files within the Snack

const screenWidth = Dimensions.get('window').width;

export default function App() {
  return (
  <SafeAreaView style={styles.container}>
      {/* Plant Information */}
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
      <SafeAreaView style = {styles.content}>
        <SafeAreaView style={styles.leftContainer}>
          <SafeAreaView style={styles.cardContainer}>
            <CardInfo label="Temperature" value="24" type="°C" />
            <CardInfo label="Humidity" value="76" type="%" warning={true}/>
            <CardInfo label="Light" value="60" type="%"/> 
            <CardInfo label="Fertilizer" value="87" type="%"/>
          </SafeAreaView>
          {/* Growth Stage Label */}
          <SafeAreaView style={styles.growthStage}>
            <Text style={styles.growthStageText}>Growth Stage of Chilli</Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.rightContainer}>
          {/* Plant Image */}
          <SafeAreaView style={styles.plantImageContainer}>        
            <Image 
              style={styles.plantImage} 
              source={require('@/assets/images/Image154.png')}
            />
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  content: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 20,
  },
  leftContainer: {
    maxWidth: 154,
    gap: 50,
  },
  rightContainer: {
    width: 210,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // badge: {
  //   paddingHorizontal: 10,
  //   height: 30,
  //   borderRadius: 5,
  // },
  // badgeText: {
  //   fontSize: 14,
  // },
  cardContainer: {
    display: 'flex',
    gap: 20,
  },
  plantImageContainer: {
    width: '100%',
  },
  plantImage: {
    width: '100%',
    aspectRatio: 16 / 9, // Tự động tính chiều cao theo tỉ lệ 16:9
    resizeMode: 'contain',
    
  },
  growthStage: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginLeft: -20,
  },
  growthStageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
