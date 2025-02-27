import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const products = [
  { id: "1", name: "Producto 1", price: "$20", image: require("../assets/google.png") },
  { id: "2", name: "Producto 2", price: "$35", image: require("../assets/google.png") },
  { id: "3", name: "Producto 3", price: "$50", image: require("../assets/google.png") },
];

const CatalogScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Text style={styles.title}>Catálogo</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar productos..."
        />
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.buttonText}>Filtros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.buttonText}>Categorías</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 15,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
  },
  categoryButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: "#004080",
    fontWeight: "bold",
  },
});

export default CatalogScreen;
