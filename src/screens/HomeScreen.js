

import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './../styles/styles';
import HabitItem from '../components/HabitItem'; // Importa o HabitItem

// HomeScreen recebe as props do App.js
export default function HomeScreen({
    habits,
    openCreateModal,
    toggleHabitCompletion,
    openEditModal,
    deleteHabit,
    isCompletedToday
}) {
    const activeHabits = habits.filter(h => h.isActive);

    return (
        <View style={styles.screenContainer}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Meus Hábitos</Text>
                <Text style={styles.headerSubtitle}>
                    {new Date().toLocaleDateString('pt-BR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </Text>
            </View>

            {activeHabits.length === 0 ? (
                <View style={styles.emptyState}>
                    <Text style={styles.emptyStateText}>📝</Text>
                    <Text style={styles.emptyStateTitle}>Nenhum hábito ainda</Text>
                    <Text style={styles.emptyStateSubtitle}>
                        Comece criando seu primeiro hábito!
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={activeHabits}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        // Aqui passamos as funções para o HabitItem (prop drilling)
                        <HabitItem
                            habit={item}
                            isCompletedToday={isCompletedToday}
                            toggleHabitCompletion={toggleHabitCompletion}
                            openEditModal={openEditModal}
                            deleteHabit={deleteHabit}
                        />
                    )}
                    contentContainerStyle={styles.listContainer}
                />
            )}

            <TouchableOpacity
                style={styles.fab}
                onPress={openCreateModal}
            >
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}