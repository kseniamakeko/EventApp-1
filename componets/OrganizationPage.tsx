import React, { useState } from "react";
import { View, Button, Text, FlatList, StyleSheet } from "react-native";
import CustomModal from "./CustomModal";
import EventTable from "./EventTabale";

const OrganizationPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [inProgressEvents, setInProgressEvents] = useState([]); 
  const [completedEvents, setCompletedEvents] = useState([]); 

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
  const handleEventSubmit = (eventData) => {
    setInProgressEvents((prevEvents) => [...prevEvents, { ...eventData, status: "In Progress" }]);
    closeModal();
  };

  const markAsCompleted = (index) => {
    const completedEvent = inProgressEvents[index];
    setInProgressEvents((prevEvents) => prevEvents.filter((_, i) => i !== index)); 
    setCompletedEvents((prevEvents) => [...prevEvents, { ...completedEvent, status: "Completed" }]); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Добавить событие" onPress={openModal} />
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>В процессе</Text>
          {inProgressEvents.length > 0 ? (
            <FlatList
              data={inProgressEvents}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.listContentContainer}
              renderItem={({ item, index }) => (
                <View style={styles.eventCard}>
                  <Text style={styles.eventTitle}>{item.name}</Text>
                  <Text>Тип: {item.type}</Text>
                  <Text>Дата: {item.date}</Text>
                  <Text>Статус: {item.status}</Text>
                  <Button title="Окончить" onPress={() => markAsCompleted(index)} />
                </View>
              )}
            />
          ) : (
            <Text style={styles.noEventsText}>Нет событий в процессе</Text>
          )}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Завершено</Text>
          {completedEvents.length > 0 ? (
            <FlatList
              data={completedEvents}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.listContentContainer}
              renderItem={({ item }) => (
                <View style={styles.eventCard}>
                  <Text style={styles.eventTitle}>{item.name}</Text>
                  <Text>Тип: {item.type}</Text>
                  <Text>Дата: {item.date}</Text>
                  <Text>Статус: {item.status}</Text>
                </View>
              )}
            />
          ) : (
            <Text style={styles.noEventsText}>Нет завершенных событий</Text>
          )}
        </View>
      </View>

      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        <EventTable onClose={closeModal} onSubmit={handleEventSubmit} />
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 8,
    width: '100%',
    backgroundColor: "#808080",
    borderRadius: 15,
    margin: 10
  },
  eventCard: {
    backgroundColor: "#e0e0e",  
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333", 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#555",  
  },
  noEventsText: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 16,
    color: "#999",  
  },
  listContentContainer: {
    paddingBottom: 16,
  },
});

export default OrganizationPage;
