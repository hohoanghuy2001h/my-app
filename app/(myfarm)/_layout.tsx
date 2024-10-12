import { Tabs } from 'expo-router';
import BottomTab from '@/components/shared/BottomTab/BottomTab';
export default function MyfarmLayout() {
  return (
    <Tabs screenOptions={{headerShown: false,}} tabBar={props => <BottomTab {...props}/>}>
      <Tabs.Screen name="(info)" options={{title: 'Information'}}/>
      <Tabs.Screen name="(statis)" options={{title: 'Statistical'}}/>
    </Tabs>
  );
}
