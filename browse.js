// File: browse.js

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input");
  const genreFilter = document.getElementById("genreFilter");
  const storyCards = document.querySelectorAll(".story-card");
  const noResultsMessage = document.getElementById("noResultsMessage");

  // Normalize like counts (e.g. "1.2K" -> 1200)
  const normalizeLikes = (str) => {
    if (str.includes("K")) return parseFloat(str) * 1000;
    if (str.includes("M")) return parseFloat(str) * 1000000;
    return parseInt(str.replace(/[^\d]/g, ""));
  };

  // Format numbers back to K/M notation
  function formatNumber(num) {
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
    return num.toString();
  }

  
//  Like button logic — toggle like/unlike and store in localStorage
document.querySelectorAll(".like-btn").forEach((btn, index) => {
  const storyId = "story-" + index;
  const countSpan = btn.querySelector(".like-count");
  const likedStories = JSON.parse(localStorage.getItem("likedStories") || "{}");

  // Set initial state
  if (likedStories[storyId]) {
    btn.classList.add("liked");
  }

  btn.addEventListener("click", () => {
    let currentCount = normalizeLikes(countSpan.textContent);

    if (btn.classList.contains("liked")) {
      // UNLIKE
      currentCount = Math.max(0, currentCount - 1);
      countSpan.textContent = formatNumber(currentCount);
      btn.classList.remove("liked");
      delete likedStories[storyId];
    } else {
      // LIKE
      currentCount += 1;
      countSpan.textContent = formatNumber(currentCount);
      btn.classList.add("liked");
      likedStories[storyId] = true;
    }

    // Save updated liked stories to localStorage
    localStorage.setItem("likedStories", JSON.stringify(likedStories));
  });
});



  // Filter logic (search + genre)
  function filterStories() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value;
    let visibleCount = 0;

    storyCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const author = card.querySelector(".author").textContent.toLowerCase();
      const genre = card.querySelector(".badge").textContent;

      const matchesSearch =
        title.includes(searchTerm) || author.includes(searchTerm);
      const matchesGenre =
        selectedGenre === "all" || genre === selectedGenre;

      const shouldShow = matchesSearch && matchesGenre;
      card.style.display = shouldShow ? "block" : "none";

      if (shouldShow) visibleCount++;
    });

    // Show or hide 'no results' message
    noResultsMessage.style.display = visibleCount === 0 ? "block" : "none";
  }

  // Event listeners
  searchInput.addEventListener("input", filterStories);
  genreFilter.addEventListener("change", filterStories);
});
