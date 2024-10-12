import { Stack } from 'expo-router';
import Header from '@/components/shared/Header/Header';
export default function InformationLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{
          headerShown: false,
          title: 'Information'
        }}  
      />
      <Stack.Screen 
        name="stages"
        options={{
          title: 'Stages',
          header: () => <Header title="Stages" />, // Use the custom header
        }} 
      />
    </Stack>
  );
}
