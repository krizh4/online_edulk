const express = require('express');
const app = express();
const path = require('path');

// Serve static files (videos in this case)
app.use('/videos', express.static(path.join(__dirname, 'videos')));
app.use('/views', express.static(path.join(__dirname, 'views')));

// API endpoint to get video URLs
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'))
})

app.get('/course/:courseId', (req, res) => {
  const coursePath = req.params.courseId;
  res.sendFile(path.join(__dirname, coursePath))
})

app.get('/api/videos/:videoId', (req, res) => {
  const videoId = req.params.videoId;
  // You might want to implement logic to determine the video file based on the videoId
  const videoPath = `videos/${videoId}.mkv`; // Assuming your videos are in mp4 format
  res.sendFile(path.join(__dirname, videoPath));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
