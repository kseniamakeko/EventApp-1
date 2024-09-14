import React, { Fragment } from "react";
import EventTable from "./EventTabale";
import Modal from "./Modal";
import { Button, View } from "react-native";

const OrganizationPage = ({ navigation }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(true);
  const openModal = () => setModalOpen(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      У вас нет заплонированных событий
      <Button onClick={openModal}>Добавить событие</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EventTable onClose={closeModal} />
      </Modal>
    </View>
  );
};

export default OrganizationPage;
