export const jsonData = `{
    "templateId": "core-template",
    "description": "Basic template.",
    "author": "Adam Elmi",
    "version": "1.0.0",
    "config": {
      "hiddenSections": ["summary", "languages"],
      "defaultValues": {
        "summary": "Enter your professional summary here.",
        "skills": ["JavaScript", "Go", "Lua"]
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
    "styleUrl": "",
    "sections": [
      {
        "id": "header",
        "title": "Personal Info",
        "fields": ["name", "title", "email", "phone", "website"]
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
        "repeat": 3,
        "fields": ["role", "company", "duration", "description"]
      },
      {
        "id": "education",
        "title": "Education",
        "repeat": 2,
        "fields": ["degree", "institution", "year", "details"]
      },
      {
        "id": "skills",
        "title": "Skills",
        "repeat": 5,
        "fields": ["skill"]
      },
      {
        "id": "languages",
        "title": "Languages",
        "repeat": 3,
        "fields": ["language", "proficiency"]
      },
      {
        "id": "projects",
        "title": "Projects",
        "repeat": 4,
        "fields": ["title", "description", "link"]
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
