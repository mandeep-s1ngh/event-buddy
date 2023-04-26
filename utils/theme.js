import { createTheme } from "@rneui/themed";

export default theme = createTheme({
  mode: "light",

  components: {
    Button: {
      titleStyle: {
        fontWeight: "bold",
        fontSize: 16,
      },

      buttonStyle: {
        borderRadius: 3,
      },
    },
    Card: {
      Image: {
        padding: 0,
      },
    },
  },
});
