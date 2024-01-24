import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import * as React from "react";

import { Text, View } from "../../components/Themed";
import Lottie from "lottie-react-native";
import { createRandomUser } from "../../utils/generate-dommy-data";
import { ThreadsContext } from "../../context/threadContext";
import ThreadsItem from "../../components/ThreadsItem";

const user = createRandomUser();

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);
  const threads = React.useContext(ThreadsContext)

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {animationRef.current?.play()}}
            tintColor={"transparent"}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../lottie/threads.json")}
          loop={false}
          autoPlay
          style={{ width: 100, height: 100, alignSelf: "center" }}
          
        />
        {threads.map((thread) => (< ThreadsItem key={thread.id} {...thread} />))}
      </ScrollView>
    </SafeAreaView>
  );
}
