import { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const EventTable = ({ navigation }) => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit
  } = useForm({
    mode: "onBlur"
  });

  const onSubmitHandler = (data) => {
    console.log("Format data", data);
    navigation.navigate("OrganizationPage");
  };
  return (
    <Fragment>
      <View styles={styles.form}>
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
        ></Controller>
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

        <Text>Тип события</Text>
        <Controller
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
        <Text>Текст события</Text>
        <Controller
          name="data"
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

        <Text>Волонтерский опыт</Text>
        <Controller
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

        <Text>Возраст участия волонтера</Text>
        <Controller
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

        <Text>Обзор события</Text>
        <Controller
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
        <Button type="submit" onPress={handleSubmit(onSubmitHandler)}>
          Создать событие
        </Button>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 16
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
