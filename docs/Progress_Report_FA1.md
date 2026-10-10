# Age Calculator — Progress Report (FA-1)

**Course:** Advanced Web Technologies (AWT)
**Department:** MCA, Semester III (SYMCA)
**Academic Year:** 2026–27
**College:** Pimpri Chinchwad College of Engineering (PCCOE)

| Field | Details |
|---|---|
| **Student Name** | Magar Dilip Balu |
| **PRN** | 125M1H055 |
| **Roll No.** | 52 |
| **Project Title** | Age Calculator |
| **Course Owner** | Dr. Avinash Chormale |
| **Module Coordinator** | Dr. Rajkamal Sangole |
| **Assessment** | Formative Assessment-I (FA-1) |

---

## 1. Problem Statement

People often need to know their exact age in years, months, and days for various purposes such as official document applications, visa processing, competitive exam eligibility, insurance calculations, and retirement planning. Manually computing age across leap years, varying month lengths, and calendar boundaries is error-prone and tedious.

**Proposed Solution:** A modern, interactive **Age Calculator** web application built using React.js that allows users to input their date of birth and instantly view their exact age along with detailed breakdowns, birthday countdown, and fun birth-date facts.

---

## 2. Objectives

1. Calculate and display exact age in years, months, and days from a given date of birth.
2. Provide a detailed age breakdown in total months, weeks, days, hours, and minutes.
3. Show a countdown to the user's next birthday.
4. Display fun facts such as zodiac sign, birth day name, generation, and birth season.
5. Maintain a session-based history of all calculations performed.
6. Support dark and light themes with a responsive, mobile-friendly user interface.

---

## 3. Use Case Identification

- **UC-1: Input Date of Birth:** The user selects their date of birth using a date picker.
- **UC-2: Calculate Age:** The system calculates the exact age in years, months, and days based on the provided date of birth.
- **UC-3: View Detailed Breakdown:** The user views their age broken down into total months, weeks, days, hours, and minutes.
- **UC-4: View Next Birthday:** The user sees a countdown showing the exact number of days remaining until their next birthday.
- **UC-5: View Fun Facts:** The user discovers interesting facts about their birth date (e.g., Zodiac sign, birth season).
- **UC-6: Manage History:** The user views a history of their past age calculations and can clear the history.
- **UC-7: Toggle Theme:** The user switches between light and dark modes for a personalized viewing experience.

---

## 4. UI Design & Wireframe

The application follows a modern **glassmorphism** design aesthetic with:
- Dark mode as default theme (with light mode toggle)
- Purple-to-cyan gradient accents
- Inter font (Google Fonts) for clean typography
- Frosted glass card effects with subtle hover animations
- Fully responsive grid layout (2-column on desktop → single column on mobile)

*(See `wireframe.jpg` in the screenshots folder for the structural layout diagram).*

---

## 5. Functional Requirements

| ID | Requirement | Status |
|----|-------------|--------|
| FR-1 | Date of birth input via native date picker | ✅ Implemented |
| FR-2 | Exact age calculation (Years / Months / Days) | ✅ Implemented |
| FR-3 | Detailed breakdown (total months, weeks, days, hours, minutes) | ✅ Implemented |
| FR-4 | Next birthday countdown with days remaining | ✅ Implemented |
| FR-5 | Calculation history with clear functionality | ✅ Implemented |
| FR-6 | Dark/Light theme toggle | ✅ Implemented |
| FR-7 | Responsive layout (mobile, tablet, desktop) | ✅ Implemented |
| FR-8 | Input validation with error messages | ✅ Implemented |
| FR-9 | Fun facts (zodiac sign, birth day, season, generation, leap year) | ✅ Implemented |

---

## 6. Technology Stack

| Technology | Purpose |
|---|---|
| **React.js** | Component-based UI development |
| **JavaScript (ES6+)** | Application logic, date calculations |
| **Vite** | Build tool and development server |
| **HTML5** | Semantic page structure |
| **CSS3** | Styling with custom properties, glassmorphism, responsive design |
| **VS Code** | Development environment |

---

## 7. React Concepts Implemented

| Concept | Components Using It |
|---|---|
| **JSX** | All 10 components |
| **Functional Components** | Header, DateInput, AgeResult, AgeBreakdown, BirthdayCountdown, FunFacts, HistoryItem, HistoryList, Footer |
| **Props** | Header (theme, onToggleTheme), DateInput (onCalculate), AgeResult (years, months, days), AgeBreakdown (breakdown), BirthdayCountdown (daysLeft, nextBirthday, isBirthdayToday), FunFacts (facts), HistoryItem (entry), HistoryList (history, onClear) |
| **useState** | App (theme, result, breakdown, birthday, funFacts, history), DateInput (inputDate, error) |
| **Event Handling** | DateInput (onChange, onSubmit), Header (onClick for theme toggle), HistoryList (onClick for clear) |
| **Conditional Rendering** | Results section (shown only after calculation), Error messages, Birthday today vs countdown, Empty history state, Theme icon toggle |
| **Lists & Keys** | AgeBreakdown (stat items), FunFacts (facts list), HistoryList (history entries) |

---

## 8. Project Structure

```
age-calculator/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── DateInput.jsx
│   │   ├── AgeResult.jsx
│   │   ├── AgeBreakdown.jsx
│   │   ├── BirthdayCountdown.jsx
│   │   ├── FunFacts.jsx
│   │   ├── HistoryItem.jsx
│   │   ├── HistoryList.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── ageCalculator.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 9. Screenshots

### 9.1 Initial State (Dark Theme)
The application loads with a dark theme by default, showing the date input card and empty calculation history.

### 9.2 After Calculation
After entering a date of birth (May 15, 2003), the application displays:
- Age: 23 Years, 3 Months, 12 Days
- Detailed Breakdown: 279 months, 1,215 weeks, 8,505 days, 204,127 hours, 12,247,639 minutes
- Next Birthday: 261 days to go (Saturday, 15 May 2027)
- Fun Facts: Born on Thursday, Taurus ♉, Spring, Not a Leap Year baby, Gen Z
- History entry added

### 9.3 Light Theme
Theme toggle switches seamlessly to a clean light mode with all elements remaining readable and properly themed.

---

## 10. Conclusion

The Phase-I (FA-1) of the Age Calculator mini project has been successfully completed. All core React concepts — JSX, functional components, props, useState, event handling, conditional rendering, and lists & keys — have been implemented across 10 modular components. The application features a responsive, premium UI design with dark/light theme support, input validation, and comprehensive age calculation functionality.

---

**Submitted by:**
Magar Dilip Balu (PRN: 125M1H055)
SYMCA, Semester III
Pimpri Chinchwad College of Engineering
