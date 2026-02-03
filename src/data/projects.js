const projects = [
  {
    id: 1,
    title: 'Snowfall Dashboard',
    description: 'An app that displays the official snowfall data from my first ever season of snowboarding. Has all the resorts I dream of riding at one day.',
    image: new URL('../assets/images/Snowfall Dashboard.png', import.meta.url).href,
    tags: ['Data ETL', 'Pydeck', 'Streamlit Cloud'],
    github: 'https://github.com/Nic-Moy/Snowboarding_Project/tree/main',
    demo: 'https://nics-snowdashboard.streamlit.app/'
  },
  {
    id: 2,
    title: 'NBA Prediction App',
    description: 'My machine learning project that predicts NBA player performance metrics using regression models.',
    image: new URL('../assets/images/NBA-Logo.png', import.meta.url).href,
    tags: ['Scikit-Learn', 'Pandas', 'Regression Models', 'Sports Analytic', 'Model Training'],
    github: 'https://github.com/Nic-Moy/NBA-Prediction-App',
    demo: null
  },
  {
    id: 3,
    title: 'Custom Dataframe Implementation with SQL function ',
    description: 'This project implements a custom DataFrame class from scratch with SQL-like operations analyzing CSV data. For my DSCI 551 course at USC, it shows data structure concepts and database operations without pandas.',
    image: new URL('../assets/images/551 Semester Project.png', import.meta.url).href,
    tags: ['SQL', 'Data Structures', 'Everything built from scatch'],
    github: 'https://github.com/Nic-Moy/DSCI-551-Semester-Project/tree/main',
    demo: 'https://nic-moy-dsci551-semester-project.streamlit.app/'
  }
]

export default projects
