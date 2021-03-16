import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as Network from "expo-network";
import { api } from "../../services/api";
import styles from "./styles";
import Header from "../../components/Header";
import TaskCard from "../../components/TaskCard";
import Footer from "../../components/Footer";

export default function ({ navigation }) {
  const [filter, setFilter] = useState("all");
  const [lateCount, setLateCount] = useState();
  const [task, setTask] = useState([]);
  const [load, setLoad] = useState(false);
  const [macaddress, setMacaddress] = useState();


  async function getMacAddress() {
    await Network.getMacAddressAsync().then((mac) => {
      setMacaddress(mac);
    });
  }

  async function loadTask() {
    setLoad(true);
    await api
      .get(`/task/filter/${filter}/${macaddress}`)
      .then((response) => setTask(response.data));
    setLoad(false);
  }

  async function verify() {
    await api
      .get(`/task/filter/late/${macaddress}`)
      .then((response) => setLateCount(response.data.length));
  }

  function notification() {
    setFilter("late");
  }

  function New() {
    navigation.navigate("Task");
  }

  function Show(id) {
    navigation.navigate("Task", { idtask: id });
  }

  useEffect(() => {
    getMacAddress().then(() => {
      loadTask();
    });
    verify();
  }, [filter, macaddress]);

  return (
    <View style={styles.container}>
      <Header
        showNotification={true}
        showBack={false}
        pressNotification={notification}
        late={lateCount}
        navigation={navigation}
      />

      <View style={styles.filter}>
        <TouchableOpacity onPress={() => setFilter("all")}>
          <Text
            style={
              filter == "all"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Todos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("today")}>
          <Text
            style={
              filter === "today"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Hoje
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("week")}>
          <Text
            style={
              filter == "week"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Semana
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("month")}>
          <Text
            style={
              filter == "month"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Mês
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("year")}>
          <Text
            style={
              filter == "year"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Ano
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {filter == "late"
            ? `TAREFAS ATRASADAS`
            : `TAREFAS `}
        </Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {load ? (
          <ActivityIndicator color="#562596" size={35} />
        ) : (
          task.map((el) => (
            <TaskCard
              key={el._id}
              done={el.done}
              title={el.title}
              when={el.when}
              type={el.type}
              onPress={() => Show(el._id)}
            />
          ))
        )}
      </ScrollView>
      <Footer icon={"plus-circle"} onPress={New} />
    </View>
  );
}
