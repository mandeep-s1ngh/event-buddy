import { createTheme } from "@rneui/themed";

export default theme = createTheme({
  components: {
    Button: {
      titleStyle: {
        fontWeight: "bold",
        fontSize: 16,
      },

      buttonStyle: {
        borderRadius: 20,
      },
    },
  },
});
