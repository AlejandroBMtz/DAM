import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  white: '#FFFFFF',
  primary: '#007BFF',
  textDark: '#2C3E50',
  textLight: '#7F8C8D',
};

export default function App() {

  const [notifications, setNotifications] = useState([]);
  const [nextId, setNextId] = useState(1);
  const unreadCount = notifications.filter((notif) => !notif.read).length;

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prevNotifications) => {
        const newNotif = {
          id: nextId,
          message: `Notificación #${nextId} del sistema`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          read: false,
        };
        return [newNotif, ...prevNotifications];
      });
      setNextId(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [nextId]);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== id)
    );
  };


  const renderNotificationItem = useCallback(({ item }) => {
    const itemBgColor = item.read ? COLORS.white : '#E3F2FD';
    const titleFontWeight = item.read ? 'normal' : '700';
    const messageColor = item.read ? COLORS.textLight : COLORS.textDark;

    return (
      <TouchableOpacity style={[styles.notificationCard, { backgroundColor: itemBgColor }]} onPress={() => markAsRead(item.id)} activeOpacity={0.7}>
        <View style={styles.cardHeader}>
          <View style={styles.titleContainer}>
            {!item.read && <View style={styles.unreadDot} />}
            <Text style={[styles.notifTitle, {
              fontWeight:
                titleFontWeight
            }]}>
              {`Notificación #${item.id}`}
            </Text>
          </View>
          <Text style={styles.notifTime}>{item.time}</Text>
        </View>

        <Text style={[styles.notifMessage, { color: messageColor }]}>
          {item.message}
        </Text>

        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteNotification(item.id)}>
          <Ionicons name="trash-outline" size={18} color={'#EF5350'} />
        </TouchableOpacity>

      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>Notificaciones</Text>
        <Ionicons name="notifications-outline" size={24} color={COLORS.textDark} />
      </View>

      <View style={styles.controlPanel}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterLabel}>No leídas</Text>
          <View style={styles.counterBadge}>
            <Text style={styles.counterText}>{unreadCount}</Text>
          </View>
        </View>

        {notifications.length > 0 && unreadCount > 0 && (
          <TouchableOpacity style={styles.markAllButton} onPress={markAllAsRead}>
            <Text style={styles.markAllButtonText}>Marcar todas leídas</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNotificationItem}
        contentContainerStyle={styles.listContent}

        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="mail-open-outline" size={64} color={'#DCE4EC'} />
            <Text style={styles.emptyText}>No hay notificaciones por ahora.</Text>
            <Text style={styles.emptySubText}>Llegará una nueva cada 5 segundos...</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DCE4EC',
    backgroundColor: COLORS.white,
    paddingTop: 50,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.textDark,
    letterSpacing: 0.5,
  },
  controlPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    marginBottom: 5,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterLabel: {
    fontSize: 14,
    color: COLORS.textLight,
    fontWeight: '600',
    marginRight: 8,
  },
  counterBadge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  counterText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  markAllButton: {
    backgroundColor: 'transparent',
  },
  markAllButtonText: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 13,
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 10,
  },
  notificationCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#DCE4EC',
    position: 'relative',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingRight: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    marginRight: 8,
  },
  notifTitle: {
    fontSize: 15,
    color: COLORS.textDark,
    flex: 1,
  },
  notifTime: {
    fontSize: 11,
    color: COLORS.textLight,
    fontWeight: '600',
    marginLeft: 10,
  },
  notifMessage: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 5,
  },
  deleteButton: {
    position: 'absolute',
    top: 14,
    right: 14,
    padding: 2,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textLight,
    marginTop: 20,
    textAlign: 'center',
  },
  emptySubText: {
    fontSize: 12,
    color: '#8d8e8fff',
    marginTop: 8,
    textAlign: 'center',
  },
});
