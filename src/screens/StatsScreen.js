

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './../styles/styles';

// Recebe habits e isCompletedToday pelo props
export default function StatsScreen({ habits, isCompletedToday }) {

    // Lógica de cálculo (Mantida aqui, pois é de display)
    const totalHabits = habits.length;
    const activeHabits = habits.filter(h => h.isActive).length;
    const completedToday = habits.filter(h => isCompletedToday(h)).length;

    // Calcular streak (Sequência de dias)
    const calculateStreak = (habit) => {
        if (!habit.completedDates || habit.completedDates.length === 0) return 0;

        let streak = 0;
        let currentDate = new Date();

        while (true) {
            const dateStr = currentDate.toDateString();
            // Verifica se a data atual está na lista de concluídos
            const isCompleted = habit.completedDates.includes(dateStr);

            if (isCompleted) {
                streak++;
                // Move para o dia anterior
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                // Se o dia anterior foi concluído, o loop encerra
                break;
            }
        }

        return streak;
    };


    return (
        <ScrollView style={styles.screenContainer}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Estatísticas</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>{totalHabits}</Text>
                    <Text style={styles.statLabel}>Total de Hábitos</Text>
                </View>

                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>{activeHabits}</Text>
                    <Text style={styles.statLabel}>Hábitos Ativos</Text>
                </View>

                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>{completedToday}</Text>
                    <Text style={styles.statLabel}>Completos Hoje</Text>
                </View>
            </View>

            <View style={styles.habitsList}>
                <Text style={styles.sectionTitle}>Detalhes por Hábito</Text>
                {habits.map(habit => {
                    const streak = calculateStreak(habit);
                    const totalCompleted = habit.completedDates?.length || 0;

                    return (
                        <View key={habit.id} style={styles.habitDetailCard}>
                            <Text style={styles.habitDetailName}>{habit.name}</Text>
                            <View style={styles.habitDetailStats}>
                                <Text style={styles.habitDetailStat}>
                                    🔥 Sequência atual: {streak} dias
                                </Text>
                                <Text style={styles.habitDetailStat}>
                                    ✅ Total completo: {totalCompleted} vezes
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}