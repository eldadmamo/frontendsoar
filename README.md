# Financial Dashboard Application  

## Project Overview  
The **Financial Dashboard Application** is a responsive and interactive web application that provides an overview of financial activities, card details, recent transactions, statistics, and user settings. Built with **React.js**, the app features data visualization using charting libraries, dynamic UI components, and intuitive navigation to enhance user experience.  

## Features  
### 1. **Dashboard Page**  
- **My Cards Section**  
  - Displays card details including card balance, cardholder name, and partially masked card number.  
  - Includes a "See All" button to navigate to the full card list.  

- **Recent Transactions**  
  - Shows a list of recent transactions with icons, descriptions, dates, and amounts (both positive and negative).  

- **Weekly Activity Chart**  
  - A bar chart visualizing daily deposit and withdrawal activities for the week.  

- **Expense Statistics**  
  - A pie chart breaking down expenses into categories (e.g., Entertainment, Bills, Investments).  

- **Quick Transfer**  
  - Displays frequent transfer contacts with profile pictures, names, and roles.  
  - Includes an input field for transfer amounts and a "Send" button for initiating transfers (UI only).  

- **Balance History Chart**  
  - A line chart showing balance trends over the past months.  

### 2. **Settings Page**  
- **Tabs**:  
  - "Edit Profile," "Preference," and "Security."  
- **Edit Profile Section**:  
  - Editable fields: Name, Username, Email, Password, Date of Birth, Present Address, Permanent Address, City, Postal Code, and Country.  
  - Profile picture upload/edit feature.  
  - "Save" button to apply changes.  

## Technical Details  
### **1. Frameworks and Libraries**  
- **React.js**: Front-end framework.  
- **State Management**: Context API or Redux.  
- **Styling**: TailwindCSS or styled-components.  
- **Charting**: Chart.js or D3.js for data visualization.  

### **2. API Integration**  
- Dummy API endpoints for fetching:  
  - User information.  
  - Card details.  
  - Transaction history.  
  - Chart data.  

### **3. Routing**  
- React Router for navigating between the Dashboard and Settings pages.  

### **4. Performance Optimization**  
- Lazy loading of components to improve performance.  

### **5. Accessibility**  
- Implements basic accessibility standards, including ARIA labels and keyboard navigation.  

### **6. Browser Compatibility**  
- Tested on major browsers: Chrome, Firefox, Safari, and Edge.  

## Getting Started  

### Prerequisites  
Ensure you have the following installed:  
- Node.js  
- npm or yarn  

### Installation  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/eldadmamo/frontendsoar 
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd frontendsoar 
   ```  
3. Install dependencies:  
   ```bash  
   npm install  
   ```  

### Running the Application  
1. Start the development server:  
   ```bash  
   npm start  
   ```  
2. Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the application.  

### Testing the Application  
- To run tests:  
  ```bash  
  npm test  
  ```  

### Deployment  
1. Build the application:  
   ```bash  
   npm run build  
   ```  
2. Deploy the `build` folder to your preferred hosting platform.  

## License  
This project is licensed under the MIT License.  

## Contact  
For questions or support, reach out to **Eldad Fikre** at eldadfikre456@gmail.com  

