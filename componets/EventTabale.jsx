import React, { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, Button, ScrollView } from "react-native";

const EventTable = ({ onClose, onSubmit }) => {
  const { control, formState: { errors }, handleSubmit } = useForm({
    mode: "onBlur"
  });

  // Handle form submission and pass the event data to parent
  const onSubmitHandler = (data) => {
    onSubmit(data); // Pass event data to OrganizationPage
    onClose(); // Close modal after submitting
  };

  return (
    <Fragment>
      <ScrollView contentContainerStyle={styles.form}>
        {/* Event Name Input */}
        <Text>Название события</Text>
        <Controller
          control={control}
          name="name"
          rules={{ required: "Пожалуйста, введите название события!" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Введите название события"
            />
          )}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

        {/* Event Type Input */}
        <Text>Тип события</Text>
        <Controller
          control={control}
          name="type"
          rules={{ required: "Пожалуйста, введите тип события!" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Введите тип события"
            />
          )}
        />
        {errors.type && <Text style={styles.error}>{errors.type.message}</Text>}

        {/* Event Date Input */}
        <Text>Дата события</Text>
        <Controller
          control={control}
          name="date"
          rules={{ required: "Пожалуйста, введите дату события!" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Введите дату события"
              keyboardType="datetime"
            />
          )}
        />
        {errors.date && <Text style={styles.error}>{errors.date.message}</Text>}

        {/* Volunteer Experience Input */}
        <Text>Волонтерский опыт</Text>
        <Controller
          control={control}
          name="volunteerExperience"
          rules={{ required: "Пожалуйста, введите опыт волонтера!" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, styles.textarea]}
              onChangeText={onChange}
              value={value}
              placeholder="Введите опыт волонтера"
              multiline={true}
            />
          )}
        />
        {errors.volunteerExperience && (
          <Text style={styles.error}>{errors.volunteerExperience.message}</Text>
        )}

        {/* Age Restriction Input */}
        <Text>Возраст участия волонтера</Text>
        <Controller
          control={control}
          name="agerestriction"
          rules={{ required: "Пожалуйста, введите возраст волонтера!" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Введите возраст волонтера"
              keyboardType="numeric"
            />
          )}
        />
        {errors.ageRestriction && (
          <Text style={styles.error}>{errors.ageRestriction.message}</Text>
        )}

        {/* Event Description Input */}
        <Text>Обзор события</Text>
        <Controller
          control={control}
          name="description"
          rules={{ required: "Пожалуйста, опишите событие!" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, styles.textarea]}
              onChangeText={onChange}
              value={value}
              placeholder="Опишите событие"
              multiline={true}
            />
          )}
        />
        {errors.description && (
          <Text style={styles.error}>{errors.description.message}</Text>
        )}

        {/* Submit Button */}
        <Button title="Создать событие" onPress={handleSubmit(onSubmitHandler)} />
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 16,
    flexGrow: 1
  },
  input: {
    width: "100%",
    padding: 8,
    marginVertical: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5
  },
  textarea: {
    height: 80
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 8
  }
});

export default EventTable;
