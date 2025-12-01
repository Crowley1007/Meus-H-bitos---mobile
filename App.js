
// FUNÇÃO: Gerenciar o estado central e a navegação principal do aplicativo.

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Switch,
  ScrollView,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from './src/styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import HomeScreen from './src/screens/HomeScreen';
import StatsScreen from './src/screens/StatsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import HabitModal from './src/components/HabitModal';

export default function App() {
  // =======================================================
  // 1. GERENCIAMENTO DE ESTADO CENTRAL (Global States)
  // =======================================================

  // Estado principal que armazena todos os hábitos do usuário
  const [habits, setHabits] = useState([]);
  // Estados da interface para controle de navegação e modais
  const [modalVisible, setModalVisible] = useState(false);
  const [editingHabit, setEditingHabit] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('home');

  // Estados do formulário (controlados pelo App.js e passados ao HabitModal)
  const [habitName, setHabitName] = useState('');
  const [habitDescription, setHabitDescription] = useState('');
  const [habitFrequency, setHabitFrequency] = useState('daily');
  const [isActive, setIsActive] = useState(true);

  // =======================================================
  // 2. LÓGICA DE PERSISTÊNCIA (AsyncStorage)
  // =======================================================

  // Hook para carregar os hábitos no primeiro ciclo de vida (componentDidMount)
  useEffect(() => { loadHabits(); }, []);

  // Hook para salvar os hábitos sempre que a lista de hábitos for alterada
  useEffect(() => {
    // Verifica se há mudanças para evitar salvar na montagem inicial (exceto no carregamento)
    if (habits.length > 0 || habits.length === 0) {
      saveHabits();
    }
  }, [habits]);

  // Função assíncrona para recuperar dados do armazenamento local
  const loadHabits = async () => {
    try {
      const storedHabits = await AsyncStorage.getItem('habits');
      if (storedHabits) {
        setHabits(JSON.parse(storedHabits));
      }
    } catch (error) {
      console.error('Erro ao carregar hábitos:', error);
      Alert.alert('Erro', 'Não foi possível carregar os hábitos');
    }
  };

  // Função assíncrona para salvar o estado atual no armazenamento local
  const saveHabits = async () => {
    try {
      await AsyncStorage.setItem('habits', JSON.stringify(habits));
    } catch (error) {
      console.error('Erro ao salvar hábitos:', error);
    }
  };

  // Função para limpar todos os dados do AsyncStorage (usada em SettingsScreen)
  const clearAllData = () => {
    Alert.alert(
      'Limpar todos os dados',
      'Isso irá excluir TODOS os hábitos e dados. Esta ação não pode ser desfeita!',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          style: 'destructive',
          onPress: async () => {
            setHabits([]);
            await AsyncStorage.removeItem('habits');
            Alert.alert('Sucesso', 'Todos os dados foram removidos');
          }
        }
      ]
    );
  };

  // =======================================================
  // 3. FUNÇÕES DE CRUD (Create, Read, Update, Delete)
  // =======================================================

  // Funções de UI para controle do Modal
  const closeModal = () => {
    setModalVisible(false);
    setEditingHabit(null);
    // Resetar estados do formulário após fechar
    setHabitName('');
    setHabitDescription('');
    setHabitFrequency('daily');
    setIsActive(true);
  };

  const openCreateModal = () => {
    closeModal(); // Garante que o estado está limpo
    setModalVisible(true);
  };

  const openEditModal = (habit) => {
    setEditingHabit(habit);
    // Popula o formulário com dados do hábito para edição
    setHabitName(habit.name);
    setHabitDescription(habit.description);
    setHabitFrequency(habit.frequency);
    setIsActive(habit.isActive);
    setModalVisible(true);
  };

  // Lógica para salvar ou atualizar um hábito
  const handleSaveHabit = () => {
    if (!habitName.trim()) {
      Alert.alert('Atenção', 'Digite um nome para o hábito');
      return;
    }

    if (editingHabit) {
      // Usa map para atualizar o hábito específico pelo ID
      setHabits(habits.map(h =>
        h.id === editingHabit.id
          ? { ...h, name: habitName, description: habitDescription, frequency: habitFrequency, isActive }
          : h
      ));
    } else {
      // Cria novo hábito, usando Date.now() como ID único
      const newHabit = {
        id: Date.now().toString(),
        name: habitName,
        description: habitDescription,
        frequency: habitFrequency,
        isActive,
        completedDates: [], // Inicia com lista vazia de datas concluídas
        createdAt: new Date().toISOString(),
      };
      setHabits([...habits, newHabit]); // Adiciona o novo hábito ao estado
    }
    closeModal();
  };

  // Lógica para marcar/desmarcar a conclusão de um hábito na data de hoje
  const toggleHabitCompletion = (habitId) => {
    const today = new Date().toDateString();
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const completedDates = habit.completedDates || [];
        const isCompleted = completedDates.includes(today);

        return {
          ...habit,
          // Adiciona ou remove a data de hoje
          completedDates: isCompleted
            ? completedDates.filter(date => date !== today) // Remove se já estiver completa
            : [...completedDates, today] // Adiciona se não estiver completa
        };
      }
      return habit;
    }));
  };

  // Lógica para deletar hábito (com confirmação)
  const deleteHabit = (habitId) => {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir este hábito?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          // Usa filter para remover o item da lista
          onPress: () => setHabits(habits.filter(h => h.id !== habitId))
        }
      ]
    );
  };

  const toggleHabitArchival = (habitId) => {
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        // Inverte o status isActive: true -> false (arquiva) | false -> true (desarquiva)
        return { ...habit, isActive: !habit.isActive };
      }
      return habit;
    }));
  };

  // Função auxiliar para checar a conclusão de um hábito hoje (usada em Home e Stats)
  const isCompletedToday = (habit) => {
    const today = new Date().toDateString();
    return habit.completedDates?.includes(today) || false;
  };

  // =======================================================
  // 4. PROPS E RENDERIZAÇÃO
  // =======================================================

  // Objeto de props que contém todos os estados e funções a serem passados para as Telas
  const sharedProps = {
    habits,
    currentScreen,
    setCurrentScreen,
    openCreateModal,
    openEditModal,
    toggleHabitCompletion,
    deleteHabit,
    isCompletedToday,
    clearAllData,
    toggleHabitArchival,
  };

  // Objeto de props para o HabitModal
  const modalProps = {
    modalVisible,
    closeModal,
    editingHabit,
    handleSaveHabit,
    habitName, setHabitName,
    habitDescription, setHabitDescription,
    habitFrequency, setHabitFrequency,
    isActive, setIsActive,
  };


  // Função responsável por renderizar a tela atual com base no estado 'currentScreen'
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen {...sharedProps} />;
      case 'stats':
        return <StatsScreen {...sharedProps} />;
      case 'settings':
        return <SettingsScreen {...sharedProps} />;
      default:
        return <HomeScreen {...sharedProps} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {renderScreen()}

      {/* Componente de navegação inferior  */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentScreen('home')}
        >
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={[styles.navLabel, currentScreen === 'home' && styles.navLabelActive]}>
            Início
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentScreen('stats')}
        >
          <Text style={styles.navIcon}>📊</Text>
          <Text style={[styles.navLabel, currentScreen === 'stats' && styles.navLabelActive]}>
            Estatísticas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentScreen('settings')}
        >
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={[styles.navLabel, currentScreen === 'settings' && styles.navLabelActive]}>
            Configurações
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal de Criar/Editar Hábito */}
      <HabitModal {...modalProps} />
    </SafeAreaView>
  );
}