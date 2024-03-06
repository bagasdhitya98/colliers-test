import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

import listEmployee from "../../utils/api/list_employee";

import Input from "../../components/Input";
import Layout from "../../components/Layout";

const ListEmployee = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const keyExtractor = (item, index) => index.toString();

  const fetchData = async () => {
    setLoading(true);
    try {
      const newData = await listEmployee(5, page);
      if (searchText !== "") {
        newData.result = newData.result.filter((item) =>
          item.first_name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
      setData((prevData) => [...prevData, ...newData.result]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleSearch = (text) => {
    setSearchText(text);
    setPage(1);
    setData([]);
    fetchData();
  };

  const renderFooter = () => {
    if (loading) {
      return (
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="small"
          color="#245AE2"
        />
      );
    } else {
      return null;
    }
  };

  const handleEndReached = () => {
    if (!loading) {
      setPage(page + 1);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>
        {item.first_name} {item.last_name}
      </Text>
      <Text style={styles.text}>Company Name : {item.company_name}</Text>
      <Text style={styles.text}>
        Location : {item.city}, {item.state} {item.zip}
      </Text>
    </View>
  );

  return (
    <Layout>
      <Input
        style={styles.input}
        placeholder="Just type your keyword here..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <FlatList
        style={styles.flatlist}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={renderFooter}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
      />
      <Text style={styles.text}>Scroll down for load more</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 8,
    marginTop: "12%",
  },
  flatlist: {
    marginTop: "5%",
    marginBottom: "5%",
  },
  item: {
    padding: 10,
    backgroundColor: "#245AE2",
    borderRadius: 5,
    marginVertical: 5,
  },
  loadingIndicator: {
    marginVertical: 8,
  },
  text: {
    color: "white",
    marginVertical: 5,
  },
});

export default ListEmployee;
