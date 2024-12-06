
// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// //   ScrollView,
// // } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import * as ImagePicker from 'expo-image-picker';
// // import { Picker } from '@react-native-picker/picker';

// // export default function PostProduce() {
// //   const [produceName, setProduceName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [produceCategory, setProduceCategory] = useState<string[]>([]);
// //   const [images, setImages] = useState<string[]>([]);
// //   const [produceStatus, setProduceStatus] = useState('');
// //   const [price, setPrice] = useState('');
// //   const [pickupLocation, setPickupLocation] = useState('');

// //   const categories = [
// //     'Fruits And Vegetables',
// //     'Meat And Seafood',
// //     'Dairy And Eggs',
// //     'Root And Tubers',
// //   ];

// //   const pickImages = async () => {
// //     const result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //       allowsMultipleSelection: true,
// //       quality: 1,
// //     });

// //     if (!result.canceled) {
// //       setImages((prev) => [...prev, ...result.assets.map((asset) => asset.uri)]);
// //     }
// //   };

// //   const toggleCategorySelection = (category: string) => {
// //     setProduceCategory((prev) =>
// //       prev.includes(category)
// //         ? prev.filter((item) => item !== category)
// //         : [...prev, category]
// //     );
// //   };

// //   const handleSaveDraft = () => {
// //     alert('Produce saved as a draft.');
// //     console.log('Draft Data:', {
// //       produceName,
// //       description,
// //       produceCategory,
// //       images,
// //       produceStatus,
// //       price,
// //       pickupLocation,
// //     });
// //   };

// //   const handlePublishProduce = () => {
// //     if (!produceName || !produceCategory.length || !produceStatus || !price || !pickupLocation) {
// //       alert('Please fill out all required fields.');
// //       return;
// //     }

// //     alert('Produce published successfully!');
// //     console.log('Published Data:', {
// //       produceName,
// //       description,
// //       produceCategory,
// //       images,
// //       produceStatus,
// //       price,
// //       pickupLocation,
// //     });
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <Ionicons name="arrow-back" size={24} color="#042D1F" />
// //         <Text style={styles.headerTitle}>Post Farm Produce</Text>
// //       </View>

// //       {/* Produce Name */}
// //       <Text style={styles.label}>Produce Name *</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="e.g. Green Lettuce"
// //         value={produceName}
// //         onChangeText={setProduceName}
// //       />

// //       {/* Description */}
// //       <Text style={styles.label}>Description</Text>
// //       <TextInput
// //         style={[styles.input, styles.textarea]}
// //         placeholder="Tell us a little bit about green lettuce vegetable"
// //         value={description}
// //         onChangeText={setDescription}
// //         multiline
// //       />

// //       {/* Produce Category */}
// //       <Text style={styles.label}>Produce Category *</Text>
// //       {categories.map((category) => (
// //         <TouchableOpacity
// //           key={category}
// //           style={styles.checkboxContainer}
// //           onPress={() => toggleCategorySelection(category)}
// //         >
// //           <Ionicons
// //             name={produceCategory.includes(category) ? 'checkbox' : 'square-outline'}
// //             size={24}
// //             color="#042D1F"
// //           />
// //           <Text style={styles.checkboxLabel}>{category}</Text>
// //         </TouchableOpacity>
// //       ))}

// //       {/* Upload Images */}
// //       <Text style={styles.label}>Upload Images of Produce</Text>
// //       <TouchableOpacity style={styles.uploadButton} onPress={pickImages}>
// //         <Ionicons name="cloud-upload-outline" size={24} color="#042D1F" />
// //         <Text style={styles.uploadText}>Upload Images</Text>
// //       </TouchableOpacity>
// //       <View style={styles.imagePreviewContainer}>
// //         {images.map((uri, index) => (
// //           <View key={index} style={styles.imagePreview}>
// //             <Ionicons name="image-outline" size={24} color="#042D1F" />
// //           </View>
// //         ))}
// //       </View>

// //       {/* Produce Status */}
// //       <Text style={styles.label}>Produce Status *</Text>
// //       <Picker
// //         selectedValue={produceStatus}
// //         onValueChange={(itemValue: string) => setProduceStatus(itemValue)}
// //         style={styles.picker}
// //       >
// //         <Picker.Item label="Select Status" value="" />
// //         <Picker.Item label="Available" value="Available" />
// //         <Picker.Item label="Out Of Stock" value="Out Of Stock" />
// //       </Picker>

// //       {/* Produce Price */}
// //       <Text style={styles.label}>Set Produce Price *</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="1000.00"
// //         keyboardType="numeric"
// //         value={price}
// //         onChangeText={setPrice}
// //       />

// //       {/* Pickup Location */}
// //       <Text style={styles.label}>Pickup Location *</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="e.g. FarmMeet Street, Abuja"
// //         value={pickupLocation}
// //         onChangeText={setPickupLocation}
// //       />

// //       {/* Buttons */}
// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity
// //           style={[styles.button, styles.draftButton]}
// //           onPress={handleSaveDraft}
// //         >
// //           <Text style={styles.draftButtonText}>Save As A Draft</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[styles.button, styles.publishButton]}
// //           onPress={handlePublishProduce}
// //         >
// //           <Text style={styles.publishButtonText}>Publish Produce</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f7f7f7',
// //     padding: 16,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   headerTitle: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#042D1F',
// //     marginLeft: 8,
// //   },
// //   label: {
// //     fontSize: 16,
// //     color: '#042D1F',
// //     marginVertical: 8,
// //   },
// //   input: {
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     padding: 10,
// //     borderRadius: 5,
// //     marginBottom: 12,
// //     backgroundColor: '#fff',
// //   },
// //   textarea: {
// //     height: 100,
// //     textAlignVertical: 'top',
// //   },
// //   checkboxContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginVertical: 6,
// //   },
// //   checkboxLabel: {
// //     fontSize: 16,
// //     marginLeft: 8,
// //     color: '#042D1F',
// //   },
// //   uploadButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#E0F7FA',
// //     padding: 12,
// //     borderRadius: 5,
// //     marginBottom: 12,
// //   },
// //   uploadText: {
// //     marginLeft: 8,
// //     fontSize: 16,
// //     color: '#042D1F',
// //   },
// //   imagePreviewContainer: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //   },
// //   imagePreview: {
// //     width: 60,
// //     height: 60,
// //     backgroundColor: '#E0E0E0',
// //     borderRadius: 5,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     margin: 4,
// //   },
// //   picker: {
// //     height: 50,
// //     width: '100%',
// //     marginBottom: 12,
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 20,
// //   },
// //   button: {
// //     paddingVertical: 12,
// //     paddingHorizontal: 20,
// //     borderRadius: 5,
// //     width: '48%',
// //   },
// //   draftButton: {
// //     backgroundColor: '#f0ad4e',
// //   },
// //   publishButton: {
// //     backgroundColor: '#5bc0de',
// //   },
// //   draftButtonText: {
// //     textAlign: 'center',
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   publishButtonText: {
// //     textAlign: 'center',
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// // });
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Modal,
//   FlatList,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// import { Picker } from '@react-native-picker/picker';

// export default function PostProduce() {
//   const [produceName, setProduceName] = useState('');
//   const [description, setDescription] = useState('');
//   const [produceCategory, setProduceCategory] = useState<string[]>([]);
//   const [categoryModalVisible, setCategoryModalVisible] = useState(false);
//   const [images, setImages] = useState<string[]>([]);
//   const [produceStatus, setProduceStatus] = useState('');
//   const [price, setPrice] = useState('');
//   const [pickupLocation, setPickupLocation] = useState('');

//   const categories = [
//     'Fruits And Vegetables',
//     'Meat And Seafood',
//     'Dairy And Eggs',
//     'Root And Tubers',
//   ];

//   const pickImages = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsMultipleSelection: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImages((prev) => [...prev, ...result.assets.map((asset) => asset.uri)]);
//     }
//   };

//   const toggleCategorySelection = (category: string) => {
//     setProduceCategory((prev) =>
//       prev.includes(category)
//         ? prev.filter((item) => item !== category)
//         : [...prev, category]
//     );
//   };

//   const handleSaveDraft = () => {
//     alert('Produce saved as a draft.');
//     console.log('Draft Data:', {
//       produceName,
//       description,
//       produceCategory,
//       images,
//       produceStatus,
//       price,
//       pickupLocation,
//     });
//   };

//   const handlePublishProduce = () => {
//     if (!produceName || !produceCategory.length || !produceStatus || !price || !pickupLocation) {
//       alert('Please fill out all required fields.');
//       return;
//     }

//     alert('Produce published successfully!');
//     console.log('Published Data:', {
//       produceName,
//       description,
//       produceCategory,
//       images,
//       produceStatus,
//       price,
//       pickupLocation,
//     });
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Ionicons name="arrow-back" size={24} color="#042D1F" />
//         <Text style={styles.headerTitle}>Post Farm Produce</Text>
//       </View>

//       {/* Produce Name */}
//       <Text style={styles.label}>Produce Name *</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="e.g. Green Lettuce"
//         value={produceName}
//         onChangeText={setProduceName}
//       />

//       {/* Description */}
//       <Text style={styles.label}>Description</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Tell us a little bit about green lettuce vegetable"
//         value={description}
//         onChangeText={setDescription}
//         multiline
//       />

//       {/* Produce Category */}
//       <Text style={styles.label}>Produce Category *</Text>
//       <TouchableOpacity
//         style={styles.input}
//         onPress={() => setCategoryModalVisible(true)}
//       >
//         <Text style={styles.text}>
//           {produceCategory.length ? produceCategory.join(', ') : 'Select Category'}
//         </Text>
//       </TouchableOpacity>
//       <Modal
//         transparent={true}
//         animationType="slide"
//         visible={categoryModalVisible}
//         onRequestClose={() => setCategoryModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Select Categories</Text>
//             <FlatList
//               data={categories}
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   onPress={() => toggleCategorySelection(item)}
//                   style={styles.checkboxContainer}
//                 >
//                   <Ionicons
//                     name={produceCategory.includes(item) ? 'checkbox' : 'square-outline'}
//                     size={24}
//                     color="#042D1F"
//                   />
//                   <Text style={styles.checkboxLabel}>{item}</Text>
//                 </TouchableOpacity>
//               )}
//             />
//             <TouchableOpacity
//               style={styles.saveButton}
//               onPress={() => setCategoryModalVisible(false)}
//             >
//               <Text style={styles.saveButtonText}>Done</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Upload Images */}
//       <Text style={styles.label}>Upload Images of Produce</Text>
//       <TouchableOpacity style={styles.uploadButton} onPress={pickImages}>
//         <Ionicons name="cloud-upload-outline" size={24} color="#042D1F" />
//         <Text style={styles.uploadText}>Upload Images</Text>
//       </TouchableOpacity>
//       <View style={styles.imagePreviewContainer}>
//         {images.map((uri, index) => (
//           <View key={index} style={styles.imagePreview}>
//             <Ionicons name="image-outline" size={24} color="#042D1F" />
//           </View>
//         ))}
//       </View>

//       {/* Produce Status */}
//       <Text style={styles.label}>Produce Status *</Text>
//       <Picker
//         selectedValue={produceStatus}
//         onValueChange={(itemValue: string) => setProduceStatus(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Select Status" value="" />
//         <Picker.Item label="Available" value="Available" />
//         <Picker.Item label="Out Of Stock" value="Out Of Stock" />
//       </Picker>

//       {/* Produce Price */}
//       <Text style={styles.label}>Set Produce Price *</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="1000.00"
//         keyboardType="numeric"
//         value={price}
//         onChangeText={setPrice}
//       />

//       {/* Pickup Location */}
//       <Text style={styles.label}>Pickup Location *</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="e.g. FarmMeet Street, Abuja"
//         value={pickupLocation}
//         onChangeText={setPickupLocation}
//       />

//       {/* Buttons */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[styles.button, styles.draftButton]}
//           onPress={handleSaveDraft}
//         >
//           <Text style={styles.draftButtonText}>Save As A Draft</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.publishButton]}
//           onPress={handlePublishProduce}
//         >
//           <Text style={styles.publishButtonText}>Publish Produce</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginLeft: 10,
//     color: '#042D1F',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//     color: '#555',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   text: {
//     fontSize: 16,
//     color: '#555',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   checkboxLabel: {
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   saveButton: {
//     backgroundColor: '#042D1F',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   uploadButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 10,
//   },
//   uploadText: {
//     fontSize: 16,
//     color: '#042D1F',
//     marginLeft: 10,
//   },
//   imagePreviewContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   imagePreview: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#f2f2f2',
//     margin: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//   },
//   picker: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   button: {
//     flex: 1,
//     marginHorizontal: 5,
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   draftButton: {
//     backgroundColor: '#ddd',
//   },
//   publishButton: {
//     backgroundColor: '#042D1F',
//   },
//   draftButtonText: {
//     color: '#555',
//     fontSize: 16,
//   },
//   publishButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });




import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

export default function PostProduce() {
  const [produceName, setProduceName] = useState('');
  const [description, setDescription] = useState('');
  const [produceCategory, setProduceCategory] = useState<string[]>([]);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [produceStatus, setProduceStatus] = useState('');
  const [price, setPrice] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');

  const categories = [
    'Fruits And Vegetables',
    'Meat And Seafood',
    'Dairy And Eggs',
    'Root And Tubers',
  ];

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, ...result.assets.map((asset) => asset.uri)]);
    }
  };

  const toggleCategorySelection = (category: string) => {
    setProduceCategory((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleSaveDraft = () => {
    Alert.alert('Draft Saved', 'Produce saved as a draft.');
    console.log('Draft Data:', {
      produceName,
      description,
      produceCategory,
      images,
      produceStatus,
      price,
      pickupLocation,
    });
  };

  const handlePublishProduce = async () => {
    if (!produceName || !produceCategory.length || !produceStatus || !price || !pickupLocation) {
      Alert.alert('Error', 'Please fill out all required fields.');
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('name', produceName);
      formData.append('description', description || '');
      formData.append('produce_status', produceStatus);
      formData.append('price', price);
      formData.append('pickup_location', pickupLocation);
  
      // Add categories
      produceCategory.forEach((category) =>
        formData.append('produce_categories', category)
      );
  
      // Convert images to Blob and append to FormData
      for (const imageUri of images) {
        const response = await fetch(imageUri);
        const blob = await response.blob();
        const fileName = imageUri.split('/').pop() || `image_${Date.now()}.jpg`;
  
        formData.append('images', blob, fileName);
      }
  
      // Make API call
      const response = await fetch('https://farm-meet.onrender.com/farmer/produce/', {
        method: 'POST',
        headers: {
          'X-CSRFToken': 'h3eOpzuD463toQaw4JV0JsvkRVEKXmhtBodbeHOa7jcovg1bsucFMyRzIfXaD9rQ',
        },
        body: formData,
      });
  
      const result = await response.json();
  
      if (response.ok) {
        Alert.alert('Success', 'Produce published successfully!');
        console.log('Published Data:', result);
      } else {
        Alert.alert('Error', 'Failed to publish produce. Please try again.');
        console.error('Error:', result);
      }
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert('Error', 'An error occurred while publishing produce.');
    }
  };
  

  // const handlePublishProduce = async () => {
  //   if (!produceName || !produceCategory.length || !produceStatus || !price || !pickupLocation) {
  //     Alert.alert('Error', 'Please fill out all required fields.');
  //     return;
  //   }

  //   try {
  //     // Create FormData
  //     const formData = new FormData();
  //     formData.append('name', produceName);
  //     formData.append('description', description || '');
  //     formData.append('produce_status', produceStatus);
  //     formData.append('price', price);
  //     formData.append('pickup_location', pickupLocation);

  //     // Add categories
  //     produceCategory.forEach((category) =>
  //       formData.append('produce_categories', category)
  //     );

  //     // Add images
  //     images.forEach((imageUri, index) => {
  //       const fileName = imageUri.split('/').pop() || `image_${index}.jpg`;
  //       formData.append('images', {
  //         uri: imageUri,
  //         type: 'image/jpeg',
  //         name: fileName,
  //       });
  //     });

  //     // Make API call
  //     const response = await fetch('https://farm-meet.onrender.com/farmer/produce/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         'X-CSRFToken': 'h3eOpzuD463toQaw4JV0JsvkRVEKXmhtBodbeHOa7jcovg1bsucFMyRzIfXaD9rQ',
  //       },
  //       body: formData,
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //       Alert.alert('Success', 'Produce published successfully!');
  //       console.log('Published Data:', result);
  //     } else {
  //       Alert.alert('Error', 'Failed to publish produce. Please try again.');
  //       console.error('Error:', result);
  //     }
  //   } catch (error) {
  //     console.error('API Error:', error);
  //     Alert.alert('Error', 'An error occurred while publishing produce.');
  //   }
  // };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#042D1F" />
        <Text style={styles.headerTitle}>Post Farm Produce</Text>
      </View>

      {/* Produce Name */}
      <Text style={styles.label}>Produce Name *</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Green Lettuce"
        value={produceName}
        onChangeText={setProduceName}
      />

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Tell us a little bit about green lettuce vegetable"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Produce Category */}
      <Text style={styles.label}>Produce Category *</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setCategoryModalVisible(true)}
      >
        <Text style={styles.text}>
          {produceCategory.length ? produceCategory.join(', ') : 'Select Category'}
        </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={categoryModalVisible}
        onRequestClose={() => setCategoryModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Categories</Text>
            <FlatList
              data={categories}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => toggleCategorySelection(item)}
                  style={styles.checkboxContainer}
                >
                  <Ionicons
                    name={produceCategory.includes(item) ? 'checkbox' : 'square-outline'}
                    size={24}
                    color="#042D1F"
                  />
                  <Text style={styles.checkboxLabel}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => setCategoryModalVisible(false)}
            >
              <Text style={styles.saveButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Upload Images */}
      <Text style={styles.label}>Upload Images of Produce</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={pickImages}>
        <Ionicons name="cloud-upload-outline" size={24} color="#042D1F" />
        <Text style={styles.uploadText}>Upload Images</Text>
      </TouchableOpacity>
      <View style={styles.imagePreviewContainer}>
        {images.map((uri, index) => (
          <View key={index} style={styles.imagePreview}>
            <Ionicons name="image-outline" size={24} color="#042D1F" />
          </View>
        ))}
      </View>

      {/* Produce Status */}
      <Text style={styles.label}>Produce Status *</Text>
      <Picker
        selectedValue={produceStatus}
        onValueChange={(itemValue: string) => setProduceStatus(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Status" value="" />
        <Picker.Item label="Available" value="Available" />
        <Picker.Item label="Out Of Stock" value="Out Of Stock" />
      </Picker>

      {/* Produce Price */}
      <Text style={styles.label}>Set Produce Price *</Text>
      <TextInput
        style={styles.input}
        placeholder="1000.00"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      {/* Pickup Location */}
      <Text style={styles.label}>Pickup Location *</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. FarmMeet Street, Abuja"
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.draftButton]}
          onPress={handleSaveDraft}
        >
          <Text style={styles.draftButtonText}>Save As A Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.publishButton]}
          onPress={handlePublishProduce}
        >
          <Text style={styles.publishButtonText}>Publish Produce</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#042D1F',
      },
      label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#555',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
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
        fontSize: 18,
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
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
      },
      saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      uploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
      },
      uploadText: {
        fontSize: 16,
        color: '#042D1F',
        marginLeft: 10,
      },
      imagePreviewContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      imagePreview: {
        width: 60,
        height: 60,
        backgroundColor: '#f2f2f2',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
      picker: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      button: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      draftButton: {
        backgroundColor: '#ddd',
      },
      publishButton: {
        backgroundColor: '#042D1F',
      },
      draftButtonText: {
        color: '#555',
        fontSize: 16,
      },
      publishButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});
