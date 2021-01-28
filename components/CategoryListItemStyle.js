import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  categoryView: {
    alignItems: "center",
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  categoryText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: 'uppercase'
  },
  categoryImage: {
    width: 80,
    height: 80,
  },
})
