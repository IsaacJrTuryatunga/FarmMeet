import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the arrow icon
import { router } from 'expo-router';
import DropdownMenu, { MenuOption } from '../../components/DropdownMenu'; 
import { AntDesign } from '@expo/vector-icons';


export default function FarmOperationsPage() {
  const [farmSize, setFarmSize] = useState<string[]>([]);
  const [maxOrders, setMaxOrders] = useState('');
  const [deliveryDays, setDeliveryDays] = useState<string[]>([]);
  const [farmSizeModalVisible, setFarmSizeModalVisible] = useState(false);
  const [deliveryDaysModalVisible, setDeliveryDaysModalVisible] = useState(false);
  //-----dropdowns
  const [dropdown1Selection, setDropdown1Selection] = useState<string[]>([]);
  const [dropdown2Selection, setDropdown2Selection] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);
  // const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [statusvisible, setstatusVisible] = useState(false);
  // const [selectedstatusItems, setSelectedstatusItems] = useState<string[]>([]);


  const farmSizeOptions = ['Small', 'Medium', 'Large', 'Enterprise'];
  const deliveryDaysOptions = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const farmoptions = [
    { value: 'Small', label: 'Small' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Large', label: 'Large' },
    { value: 'Enterprise', label: 'Enterprise' },
  ];

  const dayoptions = [
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' },
  ];

  const toggleSelection = (item: string, setSelected: React.Dispatch<React.SetStateAction<string[]>>, selected: string[]) => {
    setSelected(selected.includes(item) ? selected.filter((i) => i !== item) : [...selected, item]);
  };

  const handleSaveAndContinue = () => {
    if (!farmSize.length || !maxOrders || !deliveryDays.length) {
      alert('Please fill out all fields.');
      return;
    }
  
    // Save details successfully
    alert('Details saved successfully!');
    console.log('Farm Operations:', { farmSize, maxOrders, deliveryDays });
    
    // Redirect to the next page
    router.push('/profile/farmProduce');
  };
  
  
  return (
    <View style={styles.container}>

      {/* Farm Size Dropdown */}
      <Text style={styles.label}>Farm Size</Text>

      <View>
        <DropdownMenu
          visible={visible}
          handleClose={() => setVisible(false)}
          handleOpen={() => setVisible(true)}
          options={farmoptions}
          selectedValues={dropdown1Selection}
          onSelectionChange={(newSelection) => setDropdown1Selection(newSelection)}
          trigger={
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.row}>


              <Text style={[styles.dropTriggerStyle, { color: dropdown1Selection.length > 0 ? '#000' : '#A1A1A1',},]}>
                {dropdown1Selection.length > 0 ? dropdown1Selection.join(',  ') : 'Select Farm category'}
              </Text>


              <AntDesign style={[styles.icon1, { transform: [{ scaleX: 1.0 }, { scaleY: 0.8 }] }]} name="down" size={15} color="#696969" />
            </TouchableOpacity>
          }
          multiple={false}
          isSingleSelect={true}
        />
      </View>

      {/* <TouchableOpacity style={styles.input} onPress={() => setFarmSizeModalVisible(true)}>
        <Text style={styles.text}>
          {farmSize.length ? farmSize.join(', ') : 'Select Farm Size'}
        </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={farmSizeModalVisible}
        onRequestClose={() => setFarmSizeModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Farm Size</Text>
            <FlatList
              data={farmSizeOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => toggleSelection(item, setFarmSize, farmSize)}
                  style={styles.checkboxContainer}
                >
                  <Ionicons
                    name={farmSize.includes(item) ? 'checkbox' : 'square-outline'}
                    size={24}
                    color="#042D1F"
                  />
                  <Text style={styles.checkboxLabel}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <Pressable
              style={styles.saveButton}
              onPress={() => setFarmSizeModalVisible(false)}
            >
              <Text style={styles.saveButtonText}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}

      {/* Maximum Orders */}
       <Text style={styles.label}>Maximum Orders</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Maximum Orders"
        placeholderTextColor="#a1a1a1"
        keyboardType="numeric"
        value={maxOrders}
        onChangeText={setMaxOrders}
      />

      {/* Delivery Days Dropdown */}
      <Text style={styles.label}>Delivery days</Text>

      <View>
        <DropdownMenu
          // style={styles.dropContainer}
          visible={statusvisible}
          handleClose={() => setstatusVisible(false)}
          handleOpen={() => setstatusVisible(true)}
          options={dayoptions}
          selectedValues={dropdown2Selection}
          onSelectionChange={(newSelection) => setDropdown2Selection(newSelection)}
          trigger={
            <TouchableOpacity onPress={() => setstatusVisible(true)} style={styles.row}>


              <Text style={[styles.dropTriggerStyle, { color: dropdown2Selection.length > 0 ? '#000' : '#A1A1A1',},]}>
                {dropdown2Selection.length > 0 ? dropdown2Selection.join(',  ') : 'Select Status'}
              </Text>


              <AntDesign style={[styles.icon1, { transform: [{ scaleX: 1.0 }, { scaleY: 0.8 }] }]} name="down" size={15} color="#696969" />
            </TouchableOpacity>
          }
          multiple={true}
        />
      </View>
      {/* <TouchableOpacity style={styles.input} onPress={() => setDeliveryDaysModalVisible(true)}>
        <Text style={styles.text}>
          {deliveryDays.length ? deliveryDays.join(', ') : 'Select Delivery Days'}
        </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={deliveryDaysModalVisible}
        onRequestClose={() => setDeliveryDaysModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Delivery Days</Text>
            <FlatList
              data={deliveryDaysOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => toggleSelection(item, setDeliveryDays, deliveryDays)}
                  style={styles.checkboxContainer}
                >
                  <Ionicons
                    name={deliveryDays.includes(item) ? 'checkbox' : 'square-outline'}
                    size={24}
                    color="#042D1F"
                  />
                  <Text style={styles.checkboxLabel}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <Pressable
              style={styles.saveButton}
              onPress={() => setDeliveryDaysModalVisible(false)}
            >
              <Text style={styles.saveButtonText}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}

      {/* Save and Continue Button */}
      <View style={styles.footer}> 

      <TouchableOpacity style={styles.saveButton} 
    //   onPress={handleSaveAndContinue}
      onPress={() => router.push('/profile/farmProduce')}>
        <Text style={styles.saveButtonText}>Save And Continue</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.DButton} onPress={()=>router.push('/profile/farmProduce')}>
        <Text style={styles.DButtonText}>Dev Check</Text>
      </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  label: {
    fontFamily: "SchibstedGrotesk-SemiBold",
    fontSize: 15,
    marginBottom: 10,
    color:"#000"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#042D1F',
    marginLeft: 10,
  },
  input: {
    fontFamily: "SchibstedGrotesk-Regular",
    borderWidth: 1,
    borderColor: '#f4f4f4',
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 14,
    height:40,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: '#042D1F',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 80,
  },
  saveButtonText: {
    fontFamily: 'SchibstedGroteskBold',
    color: 'white',
    fontSize: 16,
  },

  // --------------------------dropdown
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
    justifyContent: 'space-between', // Ensure space between the text and the icon
    height: 40,
    borderColor: '#F4F4F4',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  dropContainer: {
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#f5f5f5',
  },
  dropTriggerStyle: {
    fontFamily: 'SchibstedGrotesk-Regular',
    // backgroundColor: '#ccc',
    // padding: 10,
    color: '#a1a1a1',
    borderRadius: 5,
    width: '85%',
  },
  dropTriggerText: { //nothing much here
    color: '#ff8f',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuOptionText: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 5,
  },
  icon1: {
    paddingRight: 10,
  },

  DButton: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding:15,
    alignItems: 'center',
    width: 150,
    marginBottom:50,
  },
  DButtonText: {
    fontFamily: "SchibstedGrotesk-Bold",
    color: '#a1a1a1',
    fontSize: 12,
  },

  footer: {
    paddingTop: '70%', // Space between button and other elements
    paddingBottom: 30, // Avoid sticking to the very bottom
    width: '100%',
  },

});


