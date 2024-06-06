import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Animated, Alert, Linking, Image } from 'react-native';

const App: React.FC = () => {
  const [animatedColor] = useState(new Animated.Value(0));
  const [buttonPressed, setButtonPressed] = useState<{ [key: string]: boolean }>({
    noRecoil: false,
    aimFov: false,
    aimbot: false,
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedColor, {
        toValue: 1,
        duration: 1300,
        useNativeDriver: false,
      })
    ).start();
  }, [animatedColor]);

  const interpolateColor = animatedColor.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff'],
  });

  const handlePress = (button: string) => {
    setButtonPressed((prevState) => {
      const newState = { ...prevState, [button]: !prevState[button] };
      if (!newState[button]) {
        Alert.alert('OPCIÓN DESACTIVADA');
      } else {
        Alert.alert('OPCIÓN ACTIVADA');
      }
      return newState;
    });
  };

  const handleOpenFreeFire = () => {
    Linking.openURL('https://play.google.com/store/apps/details?id=com.dts.freefireth');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('@/assets/images/fondoluxury.jpg')} 
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.blurContainer}>
            <ImageBackground 
              source={require('@/assets/images/efectofondo.png')} 
              style={styles.background}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={require('@/assets/images/logoluxury.png')}
                  style={{ width: 200, height: 200, resizeMode: 'contain' }}
                />
              </View>
              <View style={styles.content}>
                <View style={styles.textoContainer}>
                  <Animated.Text style={[styles.logoText, { color: interpolateColor }]}>
                    <Text style={styles.letter}>L</Text>
                    <Text style={styles.letter}>U</Text>
                    <Text style={styles.letter}>X</Text>
                    <Text style={styles.letter}>U</Text>
                    <Text style={styles.letter}>R</Text>
                    <Text style={styles.letter}>Y</Text>
                    <Text style={styles.letter}> </Text>
                    <Text style={styles.letter}>P</Text>
                    <Text style={styles.letter}>A</Text>
                    <Text style={styles.letter}>N</Text>
                    <Text style={styles.letter}>E</Text>
                    <Text style={styles.letter}>L</Text>
                  </Animated.Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      { borderColor: buttonPressed.noRecoil ? 'green' : 'red' }
                    ]}
                    onPress={() => handlePress('noRecoil')}
                  >
                    <Text style={styles.buttonText}>NO RECOIL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      { borderColor: buttonPressed.aimFov ? 'green' : 'red' }
                    ]}
                    onPress={() => handlePress('aimFov')}
                  >
                    <Text style={styles.buttonText}>AIM-FOV</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      { borderColor: buttonPressed.aimbot ? 'green' : 'red' }
                    ]}
                    onPress={() => handlePress('aimbot')}
                  >
                    <Text style={styles.buttonText}>AIMBOT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={handleOpenFreeFire}
                  >
                    <Text style={styles.buttonText}>ABRIR FREE FIRE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '58%',
    height: '60%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  textoContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 1,
  },
  logoText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  letter: {
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 50,
    alignItems: 'center',
    borderWidth: 5,
  },
  button1: {
    backgroundColor: '#0f0',
    padding: 15,
    margin: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 80,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    position: 'absolute',
    top: 30,
    left: 180,
    right: 0,
    bottom: 0,
  },
});

export default App;
