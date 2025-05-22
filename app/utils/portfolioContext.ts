// Portfolio context information for the chatbot
const portfolioContext = {
  // Personal information
  personal: {
    name: "Sonam Tenzin",
    title: "Data Scientist",
    summary: "A brief summary about yourself and your professional background.",
    location: "Your Location",
    email: "your.email@example.com",
    relationship: "In a loving relationship with Tshering Yangzom"
  },
  
  // Skills information
  skills: [
    {
      category: "Programming Languages",
      technologies: ["Python", "R", "JavaScript", "TypeScript", "HTML", "Java", "C"]
    },
    {
      category: "Frameworks & Libraries",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "React Native"]
    },
    {
      category: "Tools & Technologies",
      technologies: ["Tableau", "Power BI", "Jupyter Notebook", "Google Colab", "Excel", "Git"]
    }
  ],
  
  // Work experience
  experience: [
    {
      title: "Data Analysis",
      description: [
        "Applied advanced data analysis techniques using Python, R and SQL to extract insights and drive data-informed decision-making across various domains, including healthcare, energy, retail and social media.",
        "Utilized Python and data visualization tools like R, Tableau, Google Colab, Jupyter Notebook, Big Data, Power BI, and Excel to analyze data.",
        "Created comprehensive documentation of data analysis methodologies and findings to guide future development."
      ],
      technologies: ["Python", "R", "SQL", "Tableau", "Power BI", "Excel"]
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description: [
        "Designed and deployed end-to-end machine learning and deep learning models using scikit-learn, TensorFlow, and PyTorch for both structured and unstructured datasets.",
        "Built classification and regression models for real-world use cases, including diabetes prediction, stroke prediction and water quality estimation, performing feature engineering, hyperparameter tuning, and model validation.",
        "Used libraries such as Scikit-learn to build models for classification, regression, and clustering tasks.",
        "Documented analysis processes, model development, and deployment workflows to ensure transparency, reproducibility and scalability."
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Machine Learning"]
    },
    {
      title: "Deep Learning & Neural Networks",
      description: [
        "Implemented neural networks architectures such as CNNs for image recognition tasks (like facial recognition attendance system, intelligent number plate detection) and RNNs for time series forecasting (like bikeshare demand and power load prediction).",
        "Applied deep learning enhancements including transfer learning, data augmentation, and model optimization to improve predictive accuracy and model generalization.",
        "Designed and implemented neural networks, including Convolutional (CNN) and Recurrent Neural Networks (RNN), for AI tasks such as image recognition."
      ],
      technologies: ["CNN", "RNN", "Deep Learning", "Neural Networks"]
    },
    {
      title: "Mobile App Development",
      description: [
        "Developed a Hostel Management System mobile application using Flutter as a mini project, implementing features for room allocation, student management, and fee tracking.",
        "Created a Facial Recognition Attendance Management System mobile app using Expo React Native as a final year project, integrating camera functionality with AI-based facial recognition algorithms.",
        "Designed responsive and intuitive user interfaces for cross-platform mobile applications with focus on user experience and performance optimization."
      ],
      technologies: ["Flutter", "React Native", "Expo", "Mobile Development"]
    }
  ],
  
  // Projects
  projects: [
    {
      title: "Facial Recognition Attendance System App",
      description: "Developed a mobile application using Expo React Native that automates attendance tracking through facial recognition. Integrated with a backend system for data management and reporting.",
      technologies: ["React Native", "Expo", "TensorFlow.js", "FaceNet", "Postgresql"],
      github: "#"
    },
    {
      title: "AI-Powered Short Term Load Forecasting",
      description: "Built an AI-Powered model for power grids to predict power demand and supply to keep imbalance costs at a minimum. Utilized time series analysis and machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "Time Series Analysis", "Machine Learning", "GoogleColab"],
      github: "#"
    },
    {
      title: "Water Quality Prediction Model",
      description: "Developed a predictive model using Jupyter Notebook to estimate key water quality parameters based on turbidity levels for environmental monitoring applications.",
      technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis"],
      github: "#"
    },
    {
      title: "Intelligent Number Plate Detection",
      description: "Developed a system for license plate detection and parking slot management during on-job training at GovTech Agency. Implemented computer vision techniques.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      github: "#"
    },
    {
      title: "Stroke Prediction Model",
      description: "Built and deployed a stroke prediction model using R, applying statistical methods and machine learning algorithms to identify risk factors.",
      technologies: ["R", "Statistical Analysis", "Machine Learning", "Healthcare"],
      github: "#"
    },
    {
      title: "Diabetes Prediction Model",
      description: "Created a binary classification model to predict diabetes in patients as part of a mini project at College of Science and Technology.",
      technologies: ["Python", "Scikit-learn", "Classification", "Healthcare"],
      github: "#"
    }
  ],
  
  // Education
  education: [
    {
      institution: "Royal University of Bhutan, College of Science and Technology",
      degree: "Bachelor of Engineering",
      field: "Information Technology",
      duration: "2020 - 2025"
    }
  ],
  
  // Additional information
  additional: {
    languages: ["English", "Any other languages"],
    interests: ["Your interests", "Hobbies", "Activities"],
    certifications: ["Certification 1", "Certification 2"],
    personal_life: {
      relationship_status: "In a relationship",
      significant_other: "Tshering Yangzom",
      personal_note: "I love Tshering Yangzom very much. She is an important part of my life."
    }
  }
};

export default portfolioContext;