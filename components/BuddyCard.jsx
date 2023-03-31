import { Avatar, Card, Button, Image, Icon } from "@rneui/themed";
import { View } from "react-native";
import styles from "../styles.js";

const BuddyCard = () => {
  return (
    <View>
      <Card>
        <Button
          title={"Connect"}
          containerStyle={{ position: "absolute", top: 10, right: 10 }}
        />
        <Avatar
          size="large"
          source={{ uri: "https://source.unsplash.com/random" }}
        />
        <Card.Title>Musicfan22</Card.Title>
        <Card.Title>25-35</Card.Title>
        <Card.Title>Male</Card.Title>
        <Card.Title>Rock, Indie, Soul</Card.Title>
      </Card>
      <Card>
        <Button
          title={"Connect"}
          containerStyle={{ position: "absolute", top: 10, right: 10 }}
        />
        <Avatar
          size="large"
          source={{ uri: "https://source.unsplash.com/random" }}
        />
        <Card.Title>Anonymous</Card.Title>
        <Card.Title>Non-smoker</Card.Title>
        <Card.Title>Jazz, Metal</Card.Title>
      </Card>
      <Card>
        <Button
          title={"Connect"}
          containerStyle={{ position: "absolute", top: 10, right: 10 }}
        />
        <Avatar
          size="large"
          source={{ uri: "https://source.unsplash.com/random" }}
        />
        <Card.Title>Sports2</Card.Title>
        <Card.Title>Non-binary</Card.Title>
        <Card.Title>Hiking, Sports</Card.Title>
      </Card>
    </View>
  );
};

export default BuddyCard;
