import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Layout from "../../components/Layout";

import Avatar from "../../assets/icons/avatar.png";

const DetailEmployee = ({ route }) => {
  const { item } = route.params;

  return (
    <Layout>
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          <Image source={Avatar} style={styles.avatar} />
        </View>
        <Text style={styles.title}>Employee {"\n"} Information</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>
            {item.first_name} {item.last_name}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Company Name:</Text>
          <Text style={styles.text}>{item.company_name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.text}>
            {item.city}, {item.state} {item.zip}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Phone Number 1:</Text>
          <Text style={styles.text}>{item.phone1}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Phone Number 2:</Text>
          <Text style={styles.text}>{item.phone2}</Text>
        </View>
        <View style={[styles.infoContainer, { marginTop: 16 }]}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{item.email}</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    justifyContent: "center",
    borderRadius: 5,
    width: "80%",
    height: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#021850",
    marginBottom: 20,
    textAlign: "center",
  },
  infoContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#021850",
  },
  text: {
    color: "#021850",
  },
});

export default DetailEmployee;
