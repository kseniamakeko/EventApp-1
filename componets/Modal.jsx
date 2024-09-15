import React from "react";
import {
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity
} from "react-native";
import {
  StyleSheet,
  Modal as RNModal,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Text,
  Keyboard
} from "react-native";

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <RNModal transparent={true} visible={isOpen} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
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

export default CustomModal;
