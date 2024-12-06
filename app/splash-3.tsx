// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useRouter } from 'expo-router';


// export default function Splash3 () {
//     const router = useRouter();

//     // Navigate to the next screen after 3 seconds
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       router.push('/auth/login'); // Update to your target screen's path
//     }, 2000);

//     // Cleanup the timeout if the component unmounts
//     return () => clearTimeout(timeout);
//   }, [router]);

//   return (
//     <View style={styles.container}>
//       {/* New component covering 60% of the page */}
//       <View style={styles.newComponent}>
//         {/* Image covering 80% of the newComponent */}
//         <Image source={require('../assets/onion.jpg')} style={styles.image} />
        
//         {/* Text covering 20% of the newComponent */}
//         <View style={styles.textContainer}>
//           <Text style={styles.newComponentText}>Fresh From The Farm</Text>
//           <Text style={styles.newComponentTextBody}>
//             Your Journey Begins With Local {'\n'}
//             Farmer Who Hand Pick The Freshest {'\n'}
//             Produce Just For You
//           </Text>
//         </View>
//       </View>

//       {/* Existing Skip and Next components */}
//       <View style={styles.bottomControls}>
//         <TouchableOpacity onPress={() => router.push('/auth/signup')}>
//             <Text style={styles.skipText}>Skip</Text>
//         </TouchableOpacity>
//             <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/splash-2')}>
//                 <Icon name="arrow-forward" size={24} color="white" />
//             </TouchableOpacity>
        
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EEF6F3',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   newComponent: {
//     position: 'absolute',
//     top: '5%', // Adjusts to cover 60% of the page
//     width: '94%',
//     height: '80%',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     marginHorizontal: '3%', // Ensures 3px gap from the screen edges
//     elevation: 5, // Adds shadow for Android
//     shadowColor: '#000', // Adds shadow for iOS
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//   },
//   image: {
//     width: '100%',
//     height: '80%', // Image covers 80% of the component
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     resizeMode: 'cover',
//   },
//   textContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//   },
//   newComponentText: {
//     fontSize: 20,
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   newComponentTextBody: {
//     fontSize: 16,
//     color: '#013220',
//     textAlign: 'center',
//   },
//   bottomControls: {
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-between', // Distribute space between Skip and Next
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingBottom: 30,
//   },
//   skipText: {
//     color: 'green',
//     fontSize: 16,
//     marginRight: 'auto',
//   },
//   nextButton: {
//     backgroundColor: 'green',
//     borderRadius: 20,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   nextText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// // export default BottomNavigation;


import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // Install this library: npm install react-native-paper

const SplashScreen = () => {

  const router = useRouter();
        // Navigate to the next screen after 3 seconds
      useEffect(() => {
        const timeout = setTimeout(() => {
          router.push('/auth/login');
        }, 2000);

        // Cleanup the timeout if the component unmounts
        return () => clearTimeout(timeout);
      }, [router]);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../assets/onion.jpg')}
        // source={require('../assets/vegetables.jpg')} // Replace with your image path
        style={styles.backgroundImage}
      >
        {/* Lower Section */}
        <View style={styles.lowerSection}>
          <View style={styles.progressContainer}>
            <ProgressBar
              progress={1}
              color="#3e502d"
              style={styles.progressBarActive}
            />
            <ProgressBar
              progress={1}
              color="#3e502d"
              style={styles.progressBarInactive}
            />
            <ProgressBar
              progress={1}
              color="#fff"
              style={styles.progressBarInactive}
            />
          </View>
          <Text style={styles.farmersText}>
            Arriving Fresh At Your Table
          </Text>
         
          <TouchableOpacity onPress={() => router.push('/auth/signup')} style={styles.signupButton}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.signinText}>
            Already have an account? 
            <Text onPress={() => router.push('/auth/login')} style={styles.signinLink}>
              Sign In
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  lowerSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '40%', // Adjust height to ensure a perfect semi-circle
    backgroundColor: '#013220', // Dark green
    borderTopLeftRadius: 5000, // Large value for a perfect curve
    borderTopRightRadius: 5000,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    width: '80%',
    // justifyContent: 'space-between',
    justifyContent: 'center', // Center the bars horizontally
    marginBottom: 20,
    marginTop: 90, // Push the progress bars down a bit
  },
  progressBarActive: {
    width: 30,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1, // Add 2px space (1px on each side)
  },
  progressBarInactive: {
    width: 30,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1, // Add 2px space (1px on each side)
  },
  farmersText: {
    marginBottom: 20,
    color: '#fff',
    fontSize: 14,
  },
  signupButton: {
    backgroundColor: '#fff',
    width: 360, // Square shape
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10, // Slightly rounded corners
    // marginTop: 90, // Adjust spacing
    marginBottom: 10,
  },
  signupText: {
    color: '#3e502d',
    fontWeight: 'bold',
    fontSize: 14,
  },
  signinText: {
    marginTop: 20,
    color: '#fff',
    fontSize: 14,
  },
 
  signinLink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default SplashScreen;


