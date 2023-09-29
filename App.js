import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
 

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.menuButton}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Mi Aplicación</Text>
      </View>
      
      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Opción 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Opción 2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Opción 3</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.content}>
        {/* Contenido principal de la aplicación */}
        <Text>Contenido principal de la aplicación</Text>
      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  menuButton: {
    fontSize: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    top: 60, // Ajusta la posición del menú según tus necesidades
    right: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    zIndex: 1, // Asegura que el menú esté en la parte superior
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
