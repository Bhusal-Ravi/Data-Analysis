
# Data Analysis

An AI-powered data explorer that summarizes, visualizes, and lets you edit datasets in real time—perfect for fast insights, reporting, and hands-on cleanup without needing code or complex tools.

## Authors

- [@Bhusal-Ravi](https://github.com/Bhusal-Ravi)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Emerald-400 |  #facc15 |
| Slate-800 | #1e293b |
| Emerald-800 | #065f46 |



## Demo
<img src="public/demo.gif" width="400" height="250"/>
)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`PORT`    

`SESSION_KEY(Google oAuth)`

`CLIENT_ID      (Google oAuth) `

`CLIENT_SECRET (Google oAuth)`

`CLIENT_URL=  "http://localhost:5175" (example)`

`DB_CONNECTION_STRING (mongoDb)`

`GEMINI_API_KEY (Ai summary and Graph Suggestions)`

## Features

- Generates plain-language AI summaries with key trends and insights

- Categorizes and explains columns for easy understanding

- Real-time inline editing with auto-save in a spreadsheet-like table

- AI-recommended chart types with adaptive visuals and smart labels

- Interactive charts with hover tooltips, zoom, and clean styling

- Built for fast data exploration, reporting, and cleanup without code



## Installation

Install DataAnalysis with npm

```bash
clone the project
cd dataanalysis
npm install
cd ..
cd backend
npm install
npm run dev
cd ..
cd src
npm run dev
```
    
## Tech Stack

**Client:** React,Recharts, TailwindCSS

**Server:** Node, Express, Gemini Api

