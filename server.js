import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

// Allow all origins (simple CORS setup)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });

    const data = {
      status: "success",
      user: {
        email: "deniranifeoluwa@gmail.com",
        name: "Ifeoluwa Adeniran",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: response.data.fact,
    };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/me`);
});
