import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import styles from "./styles";
import typeIcons from "../../utils/typeIcons";
import DateTimeInput from "../../components/DateTimeInput/index.android";
import * as Network from "expo-network";

import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
  Alert,
  ActivityIndicator,
} from "react-native";

export default function Task({ navigation }) {
  const [load, setLoad] = useState(true);
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [hour, setHour] = useState();
  const [date, setDate] = useState();
  const [macaddress, setMacaddress] = useState();
 
  const current = new Date();

  async function save() {
    if (!title) return Alert.alert("Defina um título para tarefa!");

    if (!description) return Alert.alert("Defina uma descrição para tarefa!");

    if (!type) return Alert.alert("Escolha um tipo para a terafa!");

    if (!date) return Alert.alert("Escolha uma data para a terafa!");

    if (!hour) return Alert.alert("Escolha uma hora para a terafa!");

    if (id) {
      await api
        .put(`/task/${id}`, {
          macaddress,
          done,
          type,
          title,
          description,
          when: `${date}T${hour}.000`,
        })
        .then(() => Alert.alert("Alterado com sucesso!"))
        .then(() => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          console.log(error)
        });
    } else {
      await api
        .post("/task", {
          macaddress,
          done,
          type,
          title,
          description,
          when: `${date}T${hour}.000`,
        })
        .then(() => Alert.alert("Cadastrado com sucesso!"))
        .then(() => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          error = Alert.alert("A data ou hora precisa estar no futuro!");
          if (date < current) error;
        });
    }
  }

  async function deleteTask() {
    await api
      .delete(`/task/${id}`)
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => console.log(error));
  }

  async function remove() {
    Alert.alert(
      "Remover tarefa",
      "Deseja realmente remover esta tarefa",
      [
        { text: "Cancelar" },
        { text: "Confirmar", onPress: () => deleteTask() },
      ],
      {
        cancelable: true,
      }
    );
  }

  async function loadTask() {
    await api
      .get(`/task/${id}`)
      .then((response) => {
        setLoad(true);
        setDone(response.data.done);
        setType(response.data.type);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDate(response.data.when);
        setHour(response.data.when);
      })
      .catch((err) => {
        console.log();
      });
  }

  async function getMacAddress() {
    await Network.getMacAddressAsync().then((mac) => {
      setMacaddress(mac);
      setLoad(false);
      //Alert.alert(mac)
    });
  }

  useEffect(() => {
    getMacAddress();
    if (navigation.state.params) {
      setId(navigation.state.params.idtask);
      loadTask().then(() => setLoad(false));
      //Alert.alert(id);
    }
  }, [macaddress]);

  return (
    <View style={styles.container}>
      <Header showBack={true} navigation={navigation} />
      <KeyboardAvoidingView behavior="padding " style={styles.content}>
        {load ? (
          <ActivityIndicator
            color="#562596"
            size={40}
            style={styles.activityIndicator}
          />
        ) : (
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {typeIcons.map(
                (icon, idx) =>
                  icon != null && (
                    <TouchableOpacity key={idx} onPress={() => setType(idx)}>
                      <Image
                        source={icon}
                        style={[
                          styles.imageIcon,
                          type && type != idx && styles.inativeIcon,
                        ]}
                      />
                    </TouchableOpacity>
                  )
              )}
            </ScrollView>

            <Text style={styles.label}>Título</Text>
            <TextInput
              style={styles.input}
              maxLength={30}
              placeholder="Título da tarefa"
              onChangeText={(text) => setTitle(text)}
              value={title}
            />

            <Text style={styles.label}>Detalhes</Text>
            <TextInput
              style={styles.inputArea}
              maxLength={200}
              placeholder="Detalhes da tarefa"
              multiline={true}
              onChangeText={(text) => setDescription(text)}
              value={description}
            />

            <DateTimeInput type={"date"} save={setDate} date={date} />
            <DateTimeInput type={"hour"} save={setHour} hour={hour} />

            {id && (
              <View style={styles.inLine}>
                <View style={styles.inputInline}>
                  <Switch
                    onValueChange={() => setDone(!done)}
                    value={done}
                    thumbColor={done ? "#00761b" : "#562596"}
                  />
                  <Text style={styles.switchLabel}>Concluído</Text>
                </View>

                <TouchableOpacity onPress={remove}>
                  <Text style={styles.removeLabel}>Excluír</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        )}
      </KeyboardAvoidingView>

      <Footer onPress={save} />
    </View>
  );
}
