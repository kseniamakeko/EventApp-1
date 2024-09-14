import React from "react";
import {
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity
} from "react-native";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Modal transperent={true} visible={isVisible} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={StyleSheet.modalOverlay}>
          <View style={StyleSheet.modalContent}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    position: "relative"
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10
  },
  closeButtonText: {
    fontSize: 24
  }
});

export default Modal;
