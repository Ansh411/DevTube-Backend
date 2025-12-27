import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.q;

  // Validation
  if (!query || !query.trim()) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  try {
    const url = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(
      query
    )}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch from YouTube");
    }

    const data = await response.json();

    // YouTube returns: [query, suggestions[]]
    res.json({
      query,
      suggestions: data[1] || [],
    });
  } catch (error) {
    console.error("YouTube Suggest Error:", error.message);
    res.status(500).json({ error: "Failed to fetch suggestions" });
  }
});

export default router;
