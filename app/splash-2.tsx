import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // Install this library: npm install react-native-paper

const SplashScreen = () => {

  const router = useRouter();
        // Navigate to the next screen after 3 seconds
      useEffect(() => {
        const timeout = setTimeout(() => {
          // router.push('/auth/login'); // Update to your target screen's path
          router.push('/splash-3');
        }, 2000);

        // Cleanup the timeout if the component unmounts
        return () => clearTimeout(timeout);
      }, [router]);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../assets/cabbage.jpg')}
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
              color="#fff"
              style={styles.progressBarInactive}
            />
            <ProgressBar
              progress={1}
              color="#3e502d"
              style={styles.progressBarInactive}
            />
          </View>
          <Text style={styles.farmersText}>
            Packed And Ready For Delivery
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


