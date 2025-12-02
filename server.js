require('dotenv').config();
const express = require('express');
const axios = require('axios'); // חבילת בקשות HTTP
const app = express();
const PORT = process.env.PORT || 5000;

// המפתח יוזן אוטומטית ע"י Render כמשתנה סביבה (חובה!)
const RENDER_API_KEY = process.env.RENDER_API_KEY; 

// 1. הגדרת ה-Endpoint שאליו המשתמש יפנה
app.get('/api/services', async (req, res) => {
    if (!RENDER_API_KEY) {
        return res.status(500).json({ error: "API Key not configured" });
    }

    try {
        // ******************************************************
        // 2. ליבת הקוד: ביצוע הבקשה באמצעות הקוד שהעתקת
        // ******************************************************
        const response = await axios.get('https://api.render.com/v1/services', {
          headers: {
            // ה-API Key שלך משמש כאן:
            'Authorization': `Bearer ${RENDER_API_KEY}` 
          }
        });
        
        // 3. החזרת הפלט (ה-JSON ששלחת)
        res.json(response.data); 
        
    } catch (error) {
        console.error("API Error:", error.message);
        res.status(500).json({ error: "Failed to fetch Render services" });
    }
});

// 4. הפעלת השרת
app.listen(PORT, () => {
    console.log(`Node app listening on port ${PORT}`);
});
[
  {
    "cursor": "jJrYS_012jo3ZG0zanAxYzczYWFtYjFn",
    "service": {
      "autoDeploy": "yes",
      "autoDeployTrigger": "commit",
      "branch": "main",
      "createdAt": "2025-12-01T23:24:38.826498Z",
      "dashboardUrl": "https://dashboard.render.com/web/srv-d4n27dm3jp1c73aamb1g",
      "environmentId": "evm-d4msu2qdbo4c73c6elr0",
      "id": "srv-d4n27dm3jp1c73aamb1g",
      "name": "TodoList-Server",
      "notifyOnFail": "default",
      "ownerId": "tea-d4ms3vali9vc73f3obfg",
      "repo": "https://github.com/yehudit-alfa/ToDoList-Fullstack",
      "rootDir": "TodoApi",
      "serviceDetails": {
        "buildPlan": "starter",
        "cache": {
          "profile": "no-cache"
        },
        "env": "docker",
        "envSpecificDetails": {
          "dockerCommand": "",
          "dockerContext": ".",
          "dockerfilePath": "Dockerfile"
        },
        "healthCheckPath": "",
        "ipAllowList": [
          {
            "cidrBlock": "0.0.0.0/0",
            "description": "everywhere"
          }
        ],
        "maintenanceMode": {
          "enabled": false,
          "uri": ""
        },
        "numInstances": 1,
        "openPorts": null,
        "plan": "free",
        "previews": {
          "generation": "off"
        },
        "pullRequestPreviewsEnabled": "no",
        "region": "singapore",
        "runtime": "docker",
        "sshAddress": "srv-d4n27dm3jp1c73aamb1g@ssh.singapore.render.com",
        "url": "https://todolist-server-z8fx.onrender.com"
      },
      "slug": "todolist-server-z8fx",
      "suspended": "not_suspended",
      "suspenders": [],
      "type": "web_service",
      "updatedAt": "2025-12-02T18:56:34.220088Z"
    }
  },
  {
    "cursor": "w8mAXuM-OqZ1MnZnaTI3YzczOGlrN2Mw",
    "service": {
      "autoDeploy": "yes",
      "autoDeployTrigger": "commit",
      "branch": "main",
      "createdAt": "2025-12-01T17:23:24.402071Z",
      "dashboardUrl": "https://dashboard.render.com/static/srv-d4msu2vgi27c738ik7c0",
      "environmentId": "evm-d4msu2qdbo4c73c6elr0",
      "id": "srv-d4msu2vgi27c738ik7c0",
      "name": "TodoList-Client",
      "notifyOnFail": "default",
      "ownerId": "tea-d4ms3vali9vc73f3obfg",
      "repo": "https://github.com/yehudit-alfa/ToDoList-Fullstack",
      "rootDir": "ToDoListReact-master/ToDoListReact-master",
      "serviceDetails": {
        "buildCommand": "npm run build",
        "buildPlan": "starter",
        "ipAllowList": [
          {
            "cidrBlock": "0.0.0.0/0",
            "description": "everywhere"
          }
        ],
        "previews": {
          "generation": "off"
        },
        "publishPath": "build",
        "pullRequestPreviewsEnabled": "no",
        "url": "https://todolist-client-0241.onrender.com"
      },
      "slug": "todolist-client-0241",
      "suspended": "not_suspended",
      "suspenders": [],
      "type": "static_site",
      "updatedAt": "2025-12-02T19:37:13.154025Z"
    }
  }
]