import { Card, Button } from "@rneui/themed";
import { View } from "react-native";

const MessageBoard = () => {
  return (
    <View>
      <Card>
        <Card.Title>Bestival</Card.Title>
        <Card.Title>Isle of Wight</Card.Title>
        <Card.Title>2293 going</Card.Title>
      </Card>
      <Card>
        <Card.Title>Last train buddies</Card.Title>
        <Card.Title>Date: 12/03/23 Author: Me16</Card.Title>
      </Card>
      <Card>
        <Card.Title>Two spare tickets</Card.Title>
        <Card.Title>Date: 10/03/23 Author: Cath</Card.Title>
      </Card>
      <Card>
        <Card.Title>Dogs meeting place</Card.Title>
        <Card.Title>Date: 09/03/23 Author: AntRE</Card.Title>
      </Card>
    </View>
  );
};

export default MessageBoard;
