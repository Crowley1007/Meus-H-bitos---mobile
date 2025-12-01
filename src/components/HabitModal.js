
// FUNÇÃO: Componente de UI responsável por renderizar o Modal de Criação e Edição de Hábito.
// O estado do formulário e a lógica de salvar são gerenciados pelo componente pai (App.js).

import React from 'react';
import {
    View, Text, Modal, ScrollView, TextInput, TouchableOpacity, Switch, Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './../styles/styles';

const pickerStyle = Platform.select({
    ios: {
        height: 100,
        color: '#FFFFFF',
    },
    android: {
        color: '#333',
    }
});

// Recebe todos os valores do formulário e funções manipuladoras diretamente via props.
export default function HabitModal({
    modalVisible, closeModal, editingHabit, handleSaveHabit, // Funções de controle e lógica
    habitName, setHabitName, habitDescription, setHabitDescription, // Estado do Nome/Descrição
    habitFrequency, setHabitFrequency, isActive, setIsActive, // Estado de Frequência/Atividade
}) {

    return (
        // Componente Modal 
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible} // Controlado pelo estado 'modalVisible' do App.js
            onRequestClose={closeModal} // Permite fechar via botão 'voltar' do Android
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {/* Título dinâmico: 'Editar Hábito' ou 'Novo Hábito' */}
                    <Text style={styles.modalTitle}>
                        {editingHabit ? 'Editar Hábito' : 'Novo Hábito'}
                    </Text>

                    {/* ScrollView para garantir que o formulário é rolavel em telas pequenas */}
                    <ScrollView style={styles.formContainer}>

                        {/* Campo Nome do Hábito */}
                        <Text style={styles.label}>Nome do Hábito *</Text>
                        <TextInput
                            style={styles.input}
                            value={habitName} // Valor controlado pelo estado do App.js
                            onChangeText={setHabitName} // Atualiza o estado do App.js
                            placeholder="Ex: Beber 2L de água"
                            placeholderTextColor="#999"
                        />

                        {/* Campo Descrição */}
                        <Text style={styles.label}>Descrição (opcional)</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            value={habitDescription}
                            onChangeText={setHabitDescription}
                            placeholder="Adicione detalhes sobre o hábito..."
                            placeholderTextColor="#999"
                            multiline
                            numberOfLines={3}
                        />

                        {/* Seletor de Frequência */}
                        <Text style={styles.label}>Frequência</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={habitFrequency}
                                onValueChange={(itemValue) => setHabitFrequency(itemValue)}
                                // Aplica o novo estilo com a altura correta para o iOS:
                                style={[styles.picker, pickerStyle]}
                                mode="dropdown"
                            >
                                <Picker.Item label="Diária" value="daily" />
                                <Picker.Item label="Semanal" value="weekly" />
                            </Picker>
                        </View>

                        {/* Switch de Ativação */}
                        <View style={styles.switchContainer}>
                            <Text style={styles.label}>Hábito ativo</Text>
                            <Switch
                                value={isActive}
                                onValueChange={setIsActive}
                                trackColor={{ false: '#ddd', true: '#4CAF50' }}
                                thumbColor={isActive ? '#fff' : '#f4f3f4'}
                            />
                        </View>
                    </ScrollView>

                    {/* Botões de Ação */}
                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={[styles.modalButton, styles.cancelButton]}
                            onPress={closeModal}
                        >
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>

                        {/* Botão Salvar: Chama a lógica de CRUD central do App.js */}
                        <TouchableOpacity
                            style={[styles.modalButton, styles.saveButton]}
                            onPress={handleSaveHabit}
                        >
                            <Text style={styles.saveButtonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}