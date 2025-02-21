import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Waste Management Dashboard</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>50 kg</Text>
          <Text style={styles.statLabel}>Total Waste Collected</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statValue}>₹500</Text>
          <Text style={styles.statLabel}>Earnings</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Submissions</Text>
        <View style={styles.submissionCard}>
          <Text style={styles.submissionTitle}>Plastic Waste</Text>
          <Text style={styles.submissionDetail}>10 kg • Pending Approval</Text>
          <Text style={styles.submissionDate}>2024-01-20</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2E7D32',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 15,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  statLabel: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333333',
  },
  submissionCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  submissionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  submissionDetail: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  submissionDate: {
    fontSize: 12,
    color: '#999999',
    marginTop: 5,
  },
});