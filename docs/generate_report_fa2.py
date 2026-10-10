import os
from docx import Document
from docx.shared import Inches, Pt
from docx.enum.text import WD_ALIGN_PARAGRAPH

def main():
    doc = Document()

    # Title
    title = doc.add_heading('Age Calculator — Project Report (FA-2)', 0)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER

    doc.add_paragraph('Course: Advanced Web Technologies (AWT)\nDepartment: MCA, Semester III (SYMCA)\nAcademic Year: 2026–27\nCollege: Pimpri Chinchwad College of Engineering (PCCOE)')

    # Info Table
    table = doc.add_table(rows=1, cols=2)
    table.style = 'Table Grid'
    hdr_cells = table.rows[0].cells
    hdr_cells[0].text = 'Field'
    hdr_cells[1].text = 'Details'
    
    details = [
        ('Student Name', 'Magar Dilip Balu'),
        ('PRN', '125M1H055'),
        ('Roll No.', '52'),
        ('Project Title', 'Age Calculator'),
        ('Course Owner', 'Dr. Avinash Chormale'),
        ('Module Coordinator', 'Dr. Rajkamal Sangole'),
        ('Assessment', 'Formative Assessment-II (FA-2)'),
        ('Live Deployment URL', 'https://age-calculator-ivory-gamma.vercel.app/'),
        ('GitHub Repository', 'https://github.com/MAGARDILIP/age-calculator.git')
    ]
    for k, v in details:
        row_cells = table.add_row().cells
        row_cells[0].text = k
        row_cells[1].text = v


    # Section 1
    doc.add_heading('1. Problem Statement & Phase II Objective', level=1)
    doc.add_paragraph('While the Phase-I application successfully calculated age and displayed fun facts, it lacked the ability to persist user data, navigate across multiple pages, and robustly fetch data from external sources.')
    doc.add_paragraph('Phase II Objective: To evolve the Age Calculator into a robust, multi-page application by implementing advanced React features such as Routing, Hooks (useEffect, useCallback), API Integration, CRUD operations, advanced Form Validation, Component Testing, and deploying it live on Vercel.', style='List Bullet')

    # Section 2
    doc.add_heading('2. Advanced Features Implemented (Phase II Scope)', level=1)
    objs = [
        'Routing: Integrated react-router-dom to implement multiple pages (Home, ProfilesDashboard, ManageProfile).',
        'React Hooks: Utilized useState for local state, useEffect for data fetching and side effects, and useCallback for performance optimization.',
        'Forms and Validation: Built a robust form to add/edit profiles with strict validation (e.g., preventing future birth dates).',
        'API Integration & CRUD: Set up a JSON server mock backend. Users can now Create, Read, Update, and Delete profiles.',
        'External API Fetching: Integrated the Numbers API to fetch historical fun facts based on the user\'s birth year.',
        'Search and Filter: Added functionality to search saved profiles by name and filter them dynamically by Zodiac sign.',
        'Error Handling: Implemented try-catch blocks for all API calls with graceful UI fallbacks.',
        'Performance Optimization: Leveraged useCallback in the main calculation handler to prevent unnecessary re-renders.',
        'Project Testing: Configured Vitest with jsdom. Wrote component tests and utility tests.',
        'Deployment: Deployed the Vite SPA successfully on Vercel with a properly configured vercel.json for client-side routing.'
    ]
    for obj in objs:
        doc.add_paragraph(obj, style='List Number')

    # Section 3
    doc.add_heading('3. Advanced Use Cases', level=1)
    ucs = [
        'UC-8: Navigate App: The user navigates seamlessly between the Calculator, Dashboard, and Add Profile pages using client-side routing.',
        'UC-9: Manage Profiles (CRUD): The user saves a family member\'s profile. The user can view, edit, or delete this profile later.',
        'UC-10: Search Profiles: The user types a name in the search bar on the Dashboard to instantly filter the list of saved profiles.',
        'UC-11: Filter by Zodiac: The user filters the saved profiles by selecting a Zodiac sign from the dropdown.'
    ]
    for uc in ucs:
        doc.add_paragraph(uc, style='List Bullet')

    # Section 4
    doc.add_heading('4. UI Design Updates', level=1)
    doc.add_paragraph('The application maintained its glassmorphism design aesthetic but added:')
    designs = [
        'A navigation bar in the Header.',
        'A fully styled ProfilesDashboard grid.',
        'Form inputs with inline validation error states (red borders/text).',
        'Loading states and empty states for the profile dashboard.'
    ]
    for d in designs:
        doc.add_paragraph(d, style='List Bullet')

    # Section 5
    doc.add_heading('5. Technology Stack (Phase II Additions)', level=1)
    table = doc.add_table(rows=1, cols=2)
    table.style = 'Table Grid'
    hdr = table.rows[0].cells
    hdr[0].text, hdr[1].text = 'Technology', 'Purpose'
    techs = [
        ('React Router v7', 'Client-side routing and navigation'),
        ('JSON Server', 'Mock backend for REST API (CRUD operations)'),
        ('Vitest & JSDOM', 'Unit and component testing framework'),
        ('Vercel', 'Cloud platform for live deployment')
    ]
    for t, p in techs:
        row = table.add_row().cells
        row[0].text, row[1].text = t, p

    # Section 6
    doc.add_heading('6. React Concepts Implemented', level=1)
    table = doc.add_table(rows=1, cols=2)
    table.style = 'Table Grid'
    hdr = table.rows[0].cells
    hdr[0].text, hdr[1].text = 'Concept', 'Implementation Details'
    react_concepts = [
        ('React Router', '<Routes>, <Route>, <Link>, useNavigate, useParams'),
        ('useEffect Hook', 'Fetching profiles on mount in ProfilesDashboard; fetching external API data in FunFacts.'),
        ('useCallback Hook', 'Memoizing the handleCalculate function in Home.jsx.'),
        ('Context API', 'ThemeContext used to globally toggle Dark/Light mode across all routes.'),
        ('Controlled Components', 'Managing the profile form inputs in ManageProfile.jsx.')
    ]
    for c, comp in react_concepts:
        row = table.add_row().cells
        row[0].text, row[1].text = c, comp

    # Section 7
    doc.add_heading('7. Project Structure (Updated)', level=1)
    structure = """age-calculator/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProfilesDashboard.jsx
│   │   └── ManageProfile.jsx
│   ├── services/
│   │   ├── api.js (External API calls)
│   │   └── profileService.js (CRUD API calls)
│   ├── context/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── tests/
│   ├── ageCalculator.test.js
│   └── AgeResult.test.jsx
├── vercel.json
├── package.json
└── vite.config.js"""
    doc.add_paragraph(structure)

    # Section 8
    doc.add_heading('8. Conclusion', level=1)
    doc.add_paragraph('Phase-II (FA-2) of the Age Calculator mini-project has been successfully completed and deployed live on Vercel. The application now fully demonstrates advanced React capabilities, including complex state management, client-side routing, API integration, CRUD operations, and component testing. The project strictly adheres to modern software development practices and fulfills all rubrics and objectives outlined for the Advanced Web Technologies FA-2 assessment.')

    doc.add_paragraph('\n\nSubmitted by:\nMagar Dilip Balu (PRN: 125M1H055)\nSYMCA, Semester III\nPimpri Chinchwad College of Engineering')

    doc.save('Progress_Report_FA2.docx')
    print("Successfully generated Progress_Report_FA2.docx")

if __name__ == '__main__':
    main()
