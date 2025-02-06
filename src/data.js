export const jsonData = `{
    "templateId": "core-template",
    "description": "Basic template.",
    "author": "Adam Elmi",
    "version": "1.0.0",
    "config": {
      "hiddenSections": ["summary", "languages"],
      "defaultValues": {
      "header": ["Adam Elmi", "Software developer"],
        "summary": ["Enter your professional summary here."],
         "contact": [
          {
            "email": "Adamcade123@gmail.com",
            "phone": "+252 63 4709061",
            "address": "Hargeisa, Somaliland",
            "icons": ["fa-solid fa-phone", "fa-solid fa-envelope", "fa-solid fa-location-dot"]
          }
        ] ,
        "experience": [
          {
            "role": "Web developer",
            "company": "Google",
            "duration": "(2023) - Present",
            "description": "I have built some website for google"
          }
        ],
        "education": [
          {
            "degree": "Computer Science",
            "institution": "Univerity of Hargeisa",
            "year": "2020 - 2024",
            "details": "I learned more about programming"
          }
        ],
        "skills": ["Software Engineer", "Web Desiner", "Teamwork", "Leadership", "Project Management", "Effective Communication"],
        "languages": ["Somali", "English", "French"],
        "projects": [
          {
            "title": "Quick-Cv",
            "data": "2024",
            "description": "A cv maker",
            "link": "Qucikcv.com"
          }
        ]
      },
      "requiredFields": {
        "experience": ["role", "company", "duration"],
        "education": ["degree", "institution"]
      },
      "fieldFormats": {
        "email": "email",
        "phone": "phone"
      },
      "hideEmptySections": true,
      "maxFields": {
        "experience": 5,
        "skills": 10
      }
    },
    "groups": [
    {
      "groupId": "group-1",
      "sections": ["header"]
    },
    {
      "groupId": "group-2",
      "sections": ["contact", "skills", "languages"]
    },
    {
      "groupId": "group-3",
      "sections": ["summary", "education"]
    }
  ],
    "styleUrl": "",
    "sections": [
      {
        "id": "header",
        "title": "Header",
        "fields": ["name", "title"],
        "image" : "head-image"
      },
      {
        "id": "contact",
        "title": "Personal Info",
        "fields": ["email", "phone", "country", "city", "website"],
        "icons" : []
      },
      {
        "id": "summary",
        "title": "Summary",
        "type": "textarea",
        "placeholder": "Write a brief summary about yourself."
      },
      {
        "id": "experience",
        "title": "Work Experience",
        "fields": ["role", "company", "duration", "description"]
      },
      {
        "id": "education",
        "title": "Education",
        "fields": ["degree", "institution", "year", "details"]
      },
      {
        "id": "skills",
        "title": "Skills",
        "fields": ["skill"]
      },
      {
        "id": "languages",
        "title": "Languages",
        "fields": ["language"]
      },
      {
        "id": "projects",
        "title": "Projects",
        "fields": ["title", "date",  "description", "link"]
      }
    ]
  }  
`;

export const cssData = `/* Core Template Styles */

/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

section {
  margin-bottom: 20px;
}

.hidden {
  display: none;
}

/* Header */
#header {
  text-align: center;
  padding: 20px 0;
  background-color: #f4f4f4;
  border-bottom: 1px solid #ccc;
}

#header .name {
  font-size: 2rem;
  font-weight: bold;
}

#header .title {
  font-size: 1.2rem;
  color: #555;
}

#header .contact {
  font-size: 0.9rem;
  margin-top: 10px;
}

/* Summary */
#summary {
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}

#summary textarea {
  width: 100%;
  height: 80px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
}

/* Work Experience */
#experience {
  padding: 15px;
}

#experience .entry {
  margin-bottom: 15px;
}

#experience .role {
  font-weight: bold;
}

#experience .company {
  color: #555;
}

#experience .duration {
  font-size: 0.9rem;
  color: #888;
}

/* Education */
#education {
  padding: 15px;
}

#education .entry {
  margin-bottom: 15px;
}

#education .degree {
  font-weight: bold;
}

#education .institution {
  color: #555;
}

/* Skills */
#skills {
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
}

#skills .skill {
  background-color: #f0f0f0;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 4px;
  font-size: 0.9rem;
}

/* Languages */
#languages {
  padding: 15px;
}

#languages .entry {
  margin-bottom: 10px;
}

#languages .language {
  font-weight: bold;
}

#languages .proficiency {
  color: #555;
}

/* Projects */
#projects {
  padding: 15px;
}

#projects .entry {
  margin-bottom: 15px;
}

#projects .title {
  font-weight: bold;
  font-size: 1rem;
}

#projects .description {
  font-size: 0.9rem;
  color: #555;
}

#projects .link {
  color: #007BFF;
  text-decoration: none;
}

#projects .link:hover {
  text-decoration: underline;
}

`;
