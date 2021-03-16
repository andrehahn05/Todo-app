import {Alert,Platform} from 'react-native';

const server = Platform.OS ==='ios' 
    ? 'http://localhost:3001' : 'http://10.0.0.107:3001'

function showError(err) {
  Alert.alert('Ocorreu um Problema!',`Mensagem: ${err}`);
}

function showSuccess(msg) {
  Alert.alert('Sucesso!',msg)
}

export { server, showError, showSuccess }