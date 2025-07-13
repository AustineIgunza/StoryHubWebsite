<?php
// database connection
$conn = new mysqli("localhost", "root", "", "storyhub");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else {
echo "Connected successfully.<br>";
}
$result = $conn->query("SELECT * FROM books");
?>

<!DOCTYPE html>
<html>
<head>
  <title>Browse | StoryHub</title>
</head>
<body>
  <h1>Books Available</h1>
  <div class="book-list">
    <?php while ($row = $result->fetch_assoc()): ?>
      <div class="story-card">
        <a href="<?= $row['pdf_path'] ?>" target="_blank">
          <img src="<?= $row['cover_image'] ?>" alt="Book Cover" width="150"><br>
          <strong><?= $row['title'] ?></strong><br>
          <em>by <?= $row['author'] ?></em><br>
          <p><?= $row['genre'] ?></p>
        </a>
      </div>
    <?php endwhile; ?>
  </div>
</body>
</html>
