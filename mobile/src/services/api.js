import axios from 'axios';
import {Alert} from 'react-native';
const api = axios.create({
  baseURL:"http://10.0.0.107:3001"
})
function showError(err) {
  Alert.alert('Ocorreu um Problema!',`Mensagem: ${err}`);
}

function showSuccess(msg) {
  Alert.alert('Sucesso!',msg)
}
export {api,showError,showSuccess};