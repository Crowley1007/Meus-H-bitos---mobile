
// FUNÇÃO: Componente reutilizável para exibir um único item de hábito em uma lista.

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './../styles/styles';

// HabitItem recebe todas as funções de CRUD e verificação de estado via props (prop drilling do App.js)
export default function HabitItem({
    habit, // O objeto de dados do hábito em si
    isCompletedToday, // Função auxiliar para verificar se o hábito foi feito hoje
    toggleHabitCompletion, // Função para marcar/desmarcar a conclusão (lógica no App.js)
    openEditModal, // Função para abrir o modal de edição
    deleteHabit // Função para exclusão (com confirmação)
}) {
    // Determina o estado de conclusão para a renderização condicional
    const completed = isCompletedToday(habit);

    return (
        // Container principal do item de hábito
        <View style={styles.habitItem}>
            {/* Botão de Check/Conclusão */}
            <TouchableOpacity
                // Estilo condicional: aplica 'checkButtonCompleted' se 'completed' for true
                style={[styles.checkButton, completed && styles.checkButtonCompleted]}
                // Chama a função de atualização de estado no componente pai (App.js)
                onPress={() => toggleHabitCompletion(habit.id)}
            >
                <Text style={styles.checkButtonText}>{completed ? '✓' : ''}</Text>
            </TouchableOpacity>

            {/* Informações do Hábito */}
            <View style={styles.habitInfo}>
                {/* Estilo condicional para nome, se estiver concluído */}
                <Text style={[styles.habitName, completed && styles.habitNameCompleted]}>
                    {habit.name}
                </Text>
                {/* Renderização condicional da descrição */}
                {habit.description ? (
                    <Text style={styles.habitDescription}>{habit.description}</Text>
                ) : null}
                <Text style={styles.habitFrequency}>
                    Frequência: {habit.frequency === 'daily' ? 'Diária' : 'Semanal'}
                </Text>
            </View>

            {/* Ações de Edição e Exclusão */}
            <View style={styles.habitActions}>
                {/* Botão para Editar (chama a função que abre o Modal no App.js) */}
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => openEditModal(habit)}
                >
                    <Text style={styles.actionButtonText}>✏️</Text>
                </TouchableOpacity>
                {/* Botão para Deletar (chama a função de deleção no App.js) */}
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => deleteHabit(habit.id)}
                >
                    <Text style={styles.actionButtonText}>🗑️</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}