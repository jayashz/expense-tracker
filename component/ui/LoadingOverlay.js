import { View, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../../constants/Colors";

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large'  />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:colors.secondary
    }
})