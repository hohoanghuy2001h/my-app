import { Stack } from 'expo-router';
import Header from '@/components/shared/Header/Header';
export default function StatisticalLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{
          headerShown: false,
        }}  
      />
    </Stack>
  );
}
