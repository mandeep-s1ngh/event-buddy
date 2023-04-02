import { Avatar, Card, Button, Image, Icon } from "@rneui/themed";
import { View, ScrollView } from "react-native";
import styles from "../styles.js";

const BuddyCard = () => {
  return (
    <>
      <ScrollView>
        <View>
          <Card>
            <Button title={"Connect"} containerStyle={styles.Connect_Buttons} />
            <Avatar
              size="large"
              source={{ uri: "https://source.unsplash.com/random" }}
              containerStyle={styles.Avatar_Image}
            />
            <Card.Title>Musicfan22</Card.Title>
            <Card.Title>25-35</Card.Title>
            <Card.Title>Male</Card.Title>
            <Card.Title>Rock, Indie, Soul</Card.Title>
          </Card>
          <Card>
            <Button title={"Connect"} containerStyle={styles.Connect_Buttons} />
            <Avatar
              size="large"
              source={{ uri: "https://source.unsplash.com/random" }}
              containerStyle={styles.Avatar_Image}
            />
            <Card.Title>Anonymous</Card.Title>
            <Card.Title>Non-smoker</Card.Title>
            <Card.Title>Jazz, Metal</Card.Title>
          </Card>
          <Card>
            <Button title={"Connect"} containerStyle={styles.Connect_Buttons} />
            <Avatar
              size="large"
              source={{ uri: "https://source.unsplash.com/random" }}
              containerStyle={styles.Avatar_Image}
            />
            <Card.Title>Sports2</Card.Title>
            <Card.Title>Non-binary</Card.Title>
            <Card.Title>Hiking, Sports</Card.Title>
          </Card>
          <Card>
            <Button title={"Connect"} containerStyle={styles.Connect_Buttons} />
            <Avatar
              size="large"
              source={{ uri: "https://source.unsplash.com/random" }}
              containerStyle={styles.Avatar_Image}
            />
            <Card.Title>Festivalmaniac23</Card.Title>
            <Card.Title>18-24</Card.Title>
            <Card.Title>Female</Card.Title>
            <Card.Title>RnB, Hip-Hop</Card.Title>
          </Card>
          <Card>
            <Button title={"Connect"} containerStyle={styles.Connect_Buttons} />
            <Avatar
              size="large"
              source={{ uri: "https://source.unsplash.com/random" }}
              containerStyle={styles.Avatar_Image}
            />
            <Card.Title>Musicfan22</Card.Title>
            <Card.Title>25-35</Card.Title>
            <Card.Title>Male</Card.Title>
            <Card.Title>Rock, Indie, Soul</Card.Title>
          </Card>
          <Card>
            <Button title={"Connect"} containerStyle={styles.Connect_Buttons} />
            <Avatar
              size="large"
              source={{ uri: "https://source.unsplash.com/random" }}
              containerStyle={styles.Avatar_Image}
            />
            <Card.Title>Anonymous</Card.Title>
            <Card.Title>Non-smoker</Card.Title>
            <Card.Title>Jazz, Metal</Card.Title>
          </Card>
          <Card>
            <Button title={"Connect"} containerStyle={styles.Connect_Buttons} />
            <Avatar
              size="large"
              source={{ uri: "https://source.unsplash.com/random" }}
              containerStyle={styles.Avatar_Image}
            />
            <Card.Title>Sports2</Card.Title>
            <Card.Title>Non-binary</Card.Title>
            <Card.Title>Hiking, Sports</Card.Title>
          </Card>
          <Card>
            <Button title={"Connect"} containerStyle={styles.Connect_Buttons} />
            <Avatar
              size="large"
              source={{ uri: "https://source.unsplash.com/random" }}
              containerStyle={styles.Avatar_Image}
            />
            <Card.Title>Festivalmaniac23</Card.Title>
            <Card.Title>18-24</Card.Title>
            <Card.Title>Female</Card.Title>
            <Card.Title>RnB, Hip-Hop</Card.Title>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

export default BuddyCard;
