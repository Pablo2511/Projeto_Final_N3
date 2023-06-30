function showNewsContent(newsId) {
    var newsContent = document.getElementById("newsContent" + newsId);
    if (newsContent.style.display === "none") {
      newsContent.style.display = "block";
    } else {
      newsContent.style.display = "none";
    }
  }