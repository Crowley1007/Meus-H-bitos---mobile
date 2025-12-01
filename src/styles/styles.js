// ============== ESTILOS ==============

import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    screenContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: '#111111',
        padding: 20,
        paddingTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#1a1a1a',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        letterSpacing: 0.5,
    },
    headerSubtitle: {
        fontSize: 13,
        color: '#888888',
        marginTop: 5,
        textTransform: 'capitalize',
    },
    listContainer: {
        padding: 15,
    },
    habitItem: {
        flexDirection: 'row',
        backgroundColor: '#1a1a1a',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#252525',
        alignItems: 'center',
    },
    checkButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        borderWidth: 2,
        borderColor: '#00d9ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
        backgroundColor: '#0a0a0a',
    },
    checkButtonCompleted: {
        backgroundColor: '#00d9ff',
        borderColor: '#00d9ff',
    },
    checkButtonText: {
        fontSize: 20,
        color: '#0a0a0a',
        fontWeight: 'bold',
    },
    habitInfo: {
        flex: 1,
    },
    habitName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 4,
        letterSpacing: 0.3,
    },
    habitNameCompleted: {
        textDecorationLine: 'line-through',
        color: '#666666',
    },
    habitDescription: {
        fontSize: 13,
        color: '#888888',
        marginBottom: 4,
        lineHeight: 18,
    },
    habitFrequency: {
        fontSize: 11,
        color: '#666666',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    habitActions: {
        flexDirection: 'row',
        gap: 8,
    },
    actionButton: {
        padding: 8,
        backgroundColor: '#252525',
        borderRadius: 8,
    },
    actionButtonText: {
        fontSize: 18,
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    emptyStateText: {
        fontSize: 60,
        marginBottom: 16,
        opacity: 0.3,
    },
    emptyStateTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 8,
        letterSpacing: 0.3,
    },
    emptyStateSubtitle: {
        fontSize: 14,
        color: '#888888',
        textAlign: 'center',
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 80,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#00d9ff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#00d9ff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 8,
    },
    fabText: {
        fontSize: 32,
        color: '#0a0a0a',
        fontWeight: '300',
    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: '#111111',
        borderTopWidth: 1,
        borderTopColor: '#1a1a1a',
        paddingBottom: 5,
    },
    navButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
    },
    navIcon: {
        fontSize: 24,
        marginBottom: 4,
        opacity: 0.6,
    },
    navLabel: {
        fontSize: 11,
        color: '#666666',
        letterSpacing: 0.5,
    },
    navLabelActive: {
        color: '#00d9ff',
        fontWeight: '600',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.85)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#1a1a1a',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        maxHeight: '85%',
        borderTopWidth: 1,
        borderTopColor: '#252525',
    },
    modalTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
        letterSpacing: 0.5,
    },
    formContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
        color: '#aaaaaa',
        marginBottom: 8,
        marginTop: 16,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    input: {
        borderWidth: 1,
        borderColor: '#252525',
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
    },
    textArea: {
        height: 90,
        textAlignVertical: 'top',
    },


    // Estilos para o componente Picker
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#252525',
        borderRadius: 12,
        backgroundColor: '#0a0a0a',
        overflow: 'hidden', // Importante para iOS
    },
    picker: {
        height: 50, // Altura padrão
        color: '#ffffff', // Cor do texto selecionado
        backgroundColor: '#0a0a0a',
    },
    pickerItem: {
        color: '#ffffff', // Para garantir visibilidade em iOS
        backgroundColor: '#0a0a0a',
    },


    slider: {
        width: '100%',
        height: 40,
        marginTop: 10,
        marginBottom: 5,
    },

    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        backgroundColor: '#0a0a0a',
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#252525',
    },
    modalButtons: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 10,
    },
    modalButton: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#252525',
        borderWidth: 1,
        borderColor: '#333333',
    },
    cancelButtonText: {
        fontSize: 16,
        color: '#aaaaaa',
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    saveButton: {
        backgroundColor: '#00d9ff',
    },
    saveButtonText: {
        fontSize: 16,
        color: '#0a0a0a',
        fontWeight: '700',
        letterSpacing: 0.3,
    },
    statsContainer: {
        flexDirection: 'row',
        padding: 15,
        gap: 10,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#252525',
    },
    statNumber: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#00d9ff',
        letterSpacing: -1,
    },
    statLabel: {
        fontSize: 11,
        color: '#888888',
        marginTop: 8,
        textAlign: 'center',
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    habitsList: {
        padding: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 15,
        letterSpacing: 0.3,
    },
    habitDetailCard: {
        backgroundColor: '#1a1a1a',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#252525',
    },
    habitDetailName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 12,
        letterSpacing: 0.3,
    },
    habitDetailStats: {
        gap: 8,
    },
    habitDetailStat: {
        fontSize: 14,
        color: '#888888',
        lineHeight: 20,
    },
    settingsContainer: {
        padding: 15,
    },
    settingItem: {
        backgroundColor: '#1a1a1a',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#252525',
    },
    settingLabel: {
        fontSize: 14,
        color: '#aaaaaa',
        letterSpacing: 0.3,
    },
    settingValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00d9ff',
    },
    dangerButton: {
        backgroundColor: '#1a1a1a',
        borderRadius: 16,
        padding: 16,
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#ff3b30',
        alignItems: 'center',
    },
    dangerButtonText: {
        fontSize: 16,
        color: '#ff3b30',
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    appInfo: {
        marginTop: 40,
        alignItems: 'center',
        paddingVertical: 20,
        opacity: 0.5,
    },
    appInfoText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 5,
        letterSpacing: 0.5,
    },
    appInfoSubtext: {
        fontSize: 11,
        color: '#666666',
        marginBottom: 3,
        letterSpacing: 0.5,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000', // ou sua cor primária
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 15,
    },

    archivedListContainer: {
        marginHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden', // Para que os itens fiquem dentro do container
    },

    archivedItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },

    archivedItemText: {
        fontSize: 16,
        color: '#666',
        textDecorationLine: 'line-through', // Para indicar que está inativo
        flexShrink: 1,
        marginRight: 10,
    },

    unarchiveButton: {
        backgroundColor: '#007AFF', // Azul padrão de iOS (ou sua cor secundária)
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 5,
    },

    unarchiveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },

    emptyText: {
        textAlign: 'center',
        color: '#999',
        padding: 20,
        fontStyle: 'italic',
    },

    statsCard: {
        backgroundColor: '#1a1a1a', // Fundo escuro
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 15,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#252525',
    },
    statsText: {
        fontSize: 16,
        color: '#ffffff', // Texto branco para o tema escuro
        marginBottom: 6,
        fontWeight: '500',
    },

});