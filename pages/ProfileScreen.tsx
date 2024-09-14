import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

const appliedEvents = [
  {
    id: '1',
    title: 'Очистка берега пляжа от мусора',
    organization: 'Eco Foundation',
    date: '15.10.2024',
    type: 'Окружающая среда',
    status: 'Заявка в обработке',
  },
  {
    id: '2',
    title: 'Продуктовый сбор',
    organization: 'Community Helpers',
    date: '22.10.2024',
    type: 'Социальное',
    status: 'Заявка в обработке',
  },
];

const volunteerApplications = [
  {
    id: '1',
    fullName: 'Иван Иванов',
    bDay: '01.01.1990',
    availability: '3-6 часов',
    experience: '2 года',
    event: 'Очистка берега пляжа от мусора',
  },
  {
    id: '2',
    fullName: 'Мария Петрова',
    bDay: '15.03.1985',
    availability: 'менее 3 часа',
    experience: '1 год',
    event: 'Продуктовый сбор',
  },
];

export default function ProfileScreen({ navigation }) {
  const { isAuthenticated, userProfile, signOut } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('Register');
    }
  }, [isAuthenticated, navigation]);

  if (!isAuthenticated) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  const renderAppliedEvent = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>Организация: {item.organization}</Text>
      <Text>Дата: {item.date}</Text>
      <Text>Тип: {item.type}</Text>
      <Text>Статус: {item.status}</Text>
    </View>
  );

  const renderVolunteerApplication = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.fullName}</Text>
      <Text>Дата рождения: {item.bDay}</Text>
      <Text>Доступное время: {item.availability}</Text>
      <Text>Опыт: {item.experience || 'Не указано'}</Text>
      <Text>Мероприятие: {item.event}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {userProfile ? (
        <>
          {userProfile.type === 'Volunteer' ? (
            <>
              <Text>ФИО: {userProfile.fullName || 'Не указано'}</Text>
              <Text>Email: {userProfile.email || 'Не указано'}</Text>
              <Text>Опыт: {userProfile.experience ? userProfile.experience : 'Не указано'}</Text>
              
              <Text style={styles.sectionTitle}>Поданные заявки</Text>
              <FlatList
                data={appliedEvents}
                renderItem={renderAppliedEvent}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.scrollContainer}
              />
            </>
          ) : userProfile.type === 'Organization' ? (
            <>
              <Text>Имя организации: {userProfile.orgName || 'N/A'}</Text>
              <Text>Контактное лицо: {userProfile.contactPerson || 'N/A'}</Text>
              <Text>Email: {userProfile.email || 'N/A'}</Text>
            
              <Text style={styles.sectionTitle}>Заявки на рассмотрение</Text>
              <FlatList
                data={volunteerApplications}
                renderItem={renderVolunteerApplication}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.scrollContainer}
              />
            </>
          ) : (
            <Text>Тип профиля пользователя не распознан</Text>
          )}
        </>
      ) : (
        <Text>Профиль пользователя недоступен</Text>
      )}

      <Button title="Выход" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});