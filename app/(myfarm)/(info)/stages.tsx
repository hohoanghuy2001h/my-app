import { SafeAreaView, Text, StyleSheet,StatusBar} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { useState,useEffect } from 'react';
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}
const data = [
  {
    label: 'Planting',
    status: '',
    days: '9 days',
    image: '',
  },
  {
    label: 'Germination',
    status: '',
    days: '26 days',
    image: '',
  },  {
    label: 'Sedding',
    status: '',
    days: '6 days',
    image: '',
  },  {
    label: 'Green Anise',
    status: '',
    days: '17 days',
    image: '',
  },
  {
    label: 'Branching',
    status: '',
    days: '20 days',
    image: '',
  },
  {
    label: 'Flowering',
    status: '',
    days: '13 days',
    image: '',
  },
  {
    label: 'Fruit',
    status: '',
    days: '40 days',
    image: '',
  },
  {
    label: 'Rippen & First Havest',
    status: '',
    days: '10 days',
    image: '',
  },
  {
    label: 'Flowering',
    status: '',
    days: '13 days',
    image: '',
  },
  {
    label: 'Fruit',
    status: '',
    days: '40 days',
    image: '',
  },
  {
    label: 'Rippen & Second Havest',
    status: '',
    days: '10 days',
    image: '',
  },
  {
    label: 'End',
    status: '',
    days: '',
    image: '',
  },
]
export default function StageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Stages</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
