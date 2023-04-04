import { Card, ListItem, Avatar } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import styles from "../styles.js";

const MessageBoard = ({eventNameForMessages}) => {
  return (
    <>
      <ScrollView>
        <Card>
          <ListItem containerStyle={{ alignItems: "center" }}>
            <Avatar
              size="large"
              source={{ uri: "https://source.unsplash.com/random/50x50" }}
            />
            <ListItem.Content>
              <ListItem.Title>BESTIVAL</ListItem.Title>
              <ListItem.Title>Isle Of Wight</ListItem.Title>
              <ListItem.Title>2293 going</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <Card.Divider />
            <Card containerStyle={{ alignItems: "center", backgroundColor: '#f7e0c9', borderColor: '#f7e0c9'}}>
              <Card.Title style={{fontSize: 18, color: 'black'}}>Last train buddies</Card.Title>
              <Card.Title>Date: 12/03/23</Card.Title>
              <Card.Title>Author: Me16</Card.Title>
            </Card>
            <Card containerStyle={{ alignItems: "center", backgroundColor: '#f7e0c9', borderColor: '#f7e0c9'}}>
              <Card.Title style={{fontSize: 18, color: 'black'}}>Two Spare Tickets</Card.Title>
              <Card.Title>Date: 10/03/23</Card.Title>
              <Card.Title>Author: Cath</Card.Title>
            </Card>
            <Card containerStyle={{ alignItems: "center", backgroundColor: '#f7e0c9', borderColor: '#f7e0c9'}}>
              <Card.Title style={{fontSize: 18, color: 'black'}}>Dogs meeting place</Card.Title>
              <Card.Title>Date: 09/03/23</Card.Title>
              <Card.Title>Author: AntRE</Card.Title>
            </Card>
            <Card containerStyle={{ alignItems: "center", backgroundColor: '#f7e0c9', borderColor: '#f7e0c9'}}>
              <Card.Title style={{fontSize: 18, color: 'black'}}>Anybody need a tent?</Card.Title>
              <Card.Title>Date: 08/03/23</Card.Title>
              <Card.Title>Author: festivalfan23</Card.Title>
            </Card>
        </Card>
      </ScrollView>
    </>
  );
};

export default MessageBoard;
