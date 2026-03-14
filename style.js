import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333'
  },

  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginTop: 10
  },

  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: '#fff'
  },

  botao: {
    marginTop: 20,
    width: '100%'
  },

  resultado: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006400'
  }

});

export default styles;