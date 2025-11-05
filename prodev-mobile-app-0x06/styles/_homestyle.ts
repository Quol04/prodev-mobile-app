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
    paddingTop: 70,
    paddingBottom: 15,
    // borderBottomLeftRadius: 24,
    // borderBottomRightRadius: 24,
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
    backgroundColor: "#FFA800",
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
    paddingHorizontal: 2,
    paddingVertical: 10,
    gap: 8,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 85,
  },

  /** 🏠 Property Listing Section */
  listingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 1,
    paddingHorizontal: 18,
  },

  /** 📄 Pagination / Show More Button */
  paginationContainer: {
    alignItems: "center",
    marginVertical: 40,
  
  },
  showMoreButton: {
    backgroundColor: "#161117",
    paddingHorizontal: 34,
    paddingVertical: 18,
    borderRadius: 30,
    // elevation: 2,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});

export {styles} ;


