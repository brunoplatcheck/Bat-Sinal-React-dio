import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Modal, // Importe o componente Modal
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BatmanLogo from './assets/batman-logo.png';
import Radar from './assets/radar.png';

// Componente do modal de sucesso
const SuccessModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={modalStyles.centeredView}>
        <View style={modalStyles.modalView}>
          <Text style={modalStyles.modalTitle}>Sucesso!</Text>
          <Text style={modalStyles.modalText}>Seu sinal foi enviado e salvo localmente!</Text>
          <TouchableOpacity style={modalStyles.buttonOk} onPress={onClose}>
            <Text style={modalStyles.buttonTextOk}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default function App() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false); // Estado para o modal
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [observation, setObservation] = useState<string>('');

  const handleActivateBatSignal = () => {
    setShowForm(true);
  };

  const handleSendForm = async () => {
    const formData = {
      name,
      phone,
      location,
      observation,
      timestamp: new Date().toISOString(),
    };
    const jsonValue = JSON.stringify(formData);

    try {
      await AsyncStorage.setItem('bat-signal-data', jsonValue);
      setIsModalVisible(true); // Exibe o modal personalizado
      setName('');
      setPhone('');
      setLocation('');
      setObservation('');
      setShowForm(false);
    } catch (e) {
      console.error('Erro ao salvar os dados:', e);
      Alert.alert('Erro!', 'Não foi possível salvar os dados.');
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardAvoidingContainer} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>
            <Image
              source={BatmanLogo}
              style={[styles.logo, showForm && styles.logoOnForm]}
              resizeMode="contain"
            />
            
            {!showForm && (
              <Image
                source={Radar}
                style={styles.radar}
                resizeMode="contain"
              />
            )}
            
            {showForm ? (
              <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Informe seus dados:</Text>
                
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Seu nome aqui..."
                  placeholderTextColor="#888"
                  value={name}
                  onChangeText={setName}
                />
                
                <Text style={styles.label}>Telefone de Contato:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="DDD + Telefone"
                  placeholderTextColor="#888"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                />
                
                <Text style={styles.label}>Localização Atual:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Endereço, cidade, etc."
                  placeholderTextColor="#888"
                  value={location}
                  onChangeText={setLocation}
                />
                
                <Text style={styles.label}>Observação:</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Deixe uma observação"
                  placeholderTextColor="#888"
                  multiline={true}
                  value={observation}
                  onChangeText={setObservation}
                />
                
                <TouchableOpacity style={styles.formButton} onPress={handleSendForm}>
                  <Text style={styles.formButtonText}>Enviar</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.batSignalContainer}>
                <View style={styles.buttonEcho}>
                  <TouchableOpacity style={styles.button} onPress={handleActivateBatSignal}>
                    <Text style={styles.buttonText}>Ativar BatSinal</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* Renderiza o modal personalizado */}
      <SuccessModal isVisible={isModalVisible} onClose={handleCloseModal} />
      
    </SafeAreaView>
  );
}

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: '#a9a9a9', // Fundo cinza
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFD700', // Borda amarela
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#0000FF', // Texto azul
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#0000FF', // Texto azul
  },
  buttonOk: {
    backgroundColor: '#0000FF', // Botão azul
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonTextOk: {
    color: '#FFD700', // Texto amarelo
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  radar: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  logoOnForm: {
    width: 100,
    height: 100,
    marginTop: -50,
  },
  batSignalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  buttonEcho: {
    backgroundColor: '#FFD700',
    borderRadius: 5,
    padding: 3,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#a9a9a9',
    borderColor: '#00008b',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#00008b',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  formButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  formButtonText: {
    color: '#00008b',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});