import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const EventCard = ({ event, onComplete }) => {
  const [status, setStatus] = useState("Start");

  const handleStatusChange = () => {
    if (status === "Start") {
      setStatus("Completed");
      onComplete(event.id);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{event.name}</Text>
      <Text>Тип события: {event.type}</Text>
      <Text>Дата: {event.date}</Text>
      <Text>Опыт: {event.volunteerExperience}</Text>
      <Text>Возраст: {event.ageRestriction}</Text>
      <Text>Описание: {event.description}</Text>
      <Text>Status: {status}</Text>
      <Button title={status} onPress={handleStatusChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default EventCard;
