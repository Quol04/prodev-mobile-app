import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /** 🔍 Search Section */
  searchGroup: {
    backgroundColor: "#00A882", // primary theme color
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  searchControl: {
    paddingVertical: 4,
    color: "#777",
  },
  searchButton: {
    backgroundColor: "#00A882",
    borderRadius: 30,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },

  /** 🏷️ Filter Section */
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 20,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
  },

  /** 🏠 Property Listing Section */
  listingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },

  /** 📄 Pagination / Show More Button */
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#00A882",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 30,
    elevation: 2,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});

export {styles} ;




// import { StyleSheet, Dimensions } from "react-native";

// const styles = StyleSheet.create({
//     container:{
//         flex:1
//     },
//     searchGroup:{

//     },
//     searchFormGroup:{

//     },
//     searchControlGroup:{

//     },
//     searchFormText:{

//     },
//     searchControl:{

//     },
//     searchButton:{

//     },
//     filterGroup:{

//     },
//     filterContainer:{

//     },
//     listingContainer:{

//     },
//     paginationContainer:{

//     },

//     showMoreButton:{

//     },
//     showMoreButtonText:{

//     }

// });

// export{styles}