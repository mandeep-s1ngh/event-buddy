import { createTheme } from "@rneui/themed";

export default theme = createTheme({

     // lightColors: {
    //     primary: '#f2f2f2',  // playground!
    // },
    // darkColors: {
    //     primary: '#121212',
    // },
    mode: 
      //'dark',
    'light',

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

  // Text: {
  //     textStyle: {
  //     marginBottom: 10,
  //     },
  //     h1Style: {          //how to make it work?
  //         fontFamily: 'Nunito-SemiBold',
  //         fontWeight: '300',
  //       },
  //     //   h2Style: {
  //     //     fontFamily: 'Nunito-Regular',
  //     //     fontWeight: '100',
  //     //   },
  //     //   h3Style: {
  //     //     fontFamily: 'Nunito-Bold',
  //     //     fontWeight: '500',
  //     //   },
  // },

  }
  
});
