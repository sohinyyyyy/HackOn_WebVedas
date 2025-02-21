import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LearningScreen() {
  const videos = [
    {
      id: 1,
      title: 'Proper Waste Segregation',
      duration: '5:30',
      thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
    },
    {
      id: 2,
      title: 'Composting Techniques',
      duration: '8:45',
      thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
    },
    {
      id: 3,
      title: 'Recycling Best Practices',
      duration: '6:15',
      thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Learning Center</Text>
      </View>

      <View style={styles.content}>
        {videos.map((video) => (
          <TouchableOpacity key={video.id} style={styles.videoCard}>
            <View style={styles.thumbnailContainer}>
              <Ionicons name="play-circle" size={40} color="#ffffff" style={styles.playIcon} />
            </View>
            <View style={styles.videoInfo}>
              <Text style={styles.videoTitle}>{video.title}</Text>
              <Text style={styles.videoDuration}>{video.duration}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  content: {
    padding: 20,
  },
  videoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  thumbnailContainer: {
    height: 200,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    position: 'absolute',
  },
  videoInfo: {
    padding: 15,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  videoDuration: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
});