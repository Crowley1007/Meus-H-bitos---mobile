
// FUNÇÃO: Exibir estatísticas gerais do aplicativo e oferecer opções de gerenciamento de dados/arquivados.

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles from './../styles/styles';

// Componente auxiliar para renderizar um item arquivado
const ArchivedHabitItem = ({ habit, toggleHabitArchival }) => (

    <View style={styles.archivedItem}>
        <Text style={styles.archivedItemText}>{habit.name}</Text>
        <TouchableOpacity
            style={styles.unarchiveButton}
            onPress={() => toggleHabitArchival(habit.id)}
        >
            <Text style={styles.unarchiveButtonText}>Desarquivar 📤</Text>
        </TouchableOpacity>
    </View>
);

export default function SettingsScreen({
    habits,
    clearAllData,

    toggleHabitArchival
}) {
    // Filtra os hábitos ativos e arquivados para cálculo e exibição
    const activeHabits = habits.filter(h => h.isActive).length;
    const archivedHabitsList = habits.filter(h => !h.isActive);
    const totalHabits = habits.length;

    return (

        <ScrollView style={[styles.container, { paddingBottom: 80 }]}>
            <View style={styles.header}>
                <Text style={styles.screenTitle}>Configurações e Dados</Text>
            </View>

            <View style={styles.settingsContainer}>
                {/* Estatísticas Simples */}
                <View style={styles.settingItem}>
                    <Text style={styles.settingLabel}>Total de Hábitos: </Text>
                    <Text style={styles.settingValue}>{totalHabits}</Text>
                </View>
                <View style={styles.settingItem}>
                    <Text style={styles.settingLabel}>Hábitos Ativos:</Text>
                    <Text style={styles.settingValue}>{activeHabits}</Text>
                </View>
                <View style={[styles.settingItem, { marginBottom: 30 }]}>
                    <Text style={styles.settingLabel}>Hábitos Arquivados:</Text>
                    <Text style={styles.settingValue}>{archivedHabitsList.length}</Text>
                </View>
            </View>
            {/* LISTA DE HÁBITOS ARQUIVADOS */}
            <Text style={styles.sectionTitle}>Gerenciar Arquivados</Text>

            {archivedHabitsList.length > 0 ? (
                // Mapeia e exibe a lista de hábitos que estão com isActive: false
                <View style={styles.archivedListContainer}>
                    {archivedHabitsList.map(habit => (
                        <ArchivedHabitItem
                            key={habit.id}
                            habit={habit}
                            toggleHabitArchival={toggleHabitArchival} // Passa a função de reativação
                        />
                    ))}
                </View>
            ) : (
                <Text style={styles.emptyText}></Text>
            )}

            {/* Opção de Limpar Dados */}
            <TouchableOpacity
                style={styles.dangerButton}
                onPress={clearAllData}
            >
                <Text style={styles.dangerButtonText}>Limpar Todos os Dados</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}