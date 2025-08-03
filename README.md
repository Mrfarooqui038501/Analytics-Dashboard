# Analytics Dashboard

<div align="center">
  <h3>A modern, visually stunning and fully responsive analytics dashboard built for digital marketing agencies.</h3>
  
  ![Dashboard Preview](https://img.shields.io/badge/Status-Active-brightgreen)
  ![React](https://img.shields.io/badge/React-18+-blue)
  ![Vite](https://img.shields.io/badge/Vite-Latest-purple)
  ![License](https://img.shields.io/badge/License-Educational-yellow)
</div>

---

## 🚀 Features

### Core Dashboard Features

- **📊 Overview Metrics Cards** - Display key KPIs with real-time updates:
  - Revenue tracking
  - User analytics
  - Conversion metrics
  - Growth percentage indicators

- **📈 Interactive Charts** - Powered by [Recharts](https://recharts.org/):
  - **Line Chart** - Revenue history visualization
  - **Bar Chart** - Campaign performance statistics
  - **Donut Chart** - Lead source distribution

- **📋 Advanced Data Table** - Comprehensive user data management:
  - Multi-column sorting capabilities
  - Smart pagination with page jump functionality
  - Fully responsive and accessible design
  - Elegant empty state handling

### 🎨 UI/UX Excellence

- **📱 Responsive Design** - Seamless experience across desktop, tablet, and mobile
- **🎭 Dual Theme Support** - Dark/Light mode toggle with system preference detection
- **✨ Micro-interactions** - Smooth hover effects and button animations
- **💀 Loading Skeletons** - Beautiful content loading states
- **🎯 Visual Hierarchy** - Clean typography and consistent spacing

### 🔥 Advanced Features

- **⚡ Real-time Simulation** - Live data updates with smooth transitions
- **📤 Export Functionality**:
  - CSV export for filtered data
  - PDF export with professional formatting (jsPDF + jsPDF-AutoTable)
- **🔍 Advanced Filtering**:
  - Date range picker for user join dates
  - Intuitive filter positioning and styling

---

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, Vite, CSS Variables |
| **Charts** | Recharts |
| **Export** | jsPDF, jsPDF-AutoTable |
| **Icons** | React Icons |
| **Theming** | Custom CSS Variables |

---

## 📁 Project Structure

```
admybrand-insights/
├── 📁 public/
│   └── favicon.ico
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 Cards/
│   │   │   └── MetricCard.jsx
│   │   ├── 📁 Charts/
│   │   │   ├── BarChart.jsx
│   │   │   ├── DonutChart.jsx
│   │   │   └── LineChart.jsx
│   │   ├── 📁 Table/
│   │   │   └── DataTable.jsx
│   │   ├── 📁 Layout/
│   │   │   └── DashboardLayout.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── ExportButtons.jsx
│   │   ├── DateRangePicker.jsx
│   │   └── Skeleton.jsx
│   ├── 📁 data/
│   │   └── mockData.js
│   ├── 📁 hooks/
│   │   └── useDarkMode.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v16 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mrfarooqui038501/Analytics-Dashboard.git
   cd admybrand-insights
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the dashboard.

### Optional Backend Setup

For enhanced API simulation:

```bash
cd server
npm install
node index.js
```

The frontend will connect to the backend API at `http://localhost:3001`.

---

## 📖 User Guide

### Dashboard Navigation

1. **📊 Metrics Overview** - View key performance indicators at the top of the dashboard
2. **📈 Real-time Charts** - Monitor revenue trends, campaign performance, and lead sources
3. **👥 User Management** - Access the comprehensive user data table

### Data Table Features

- **🔍 Date Filtering** - Use the date range picker (top-right) to filter users by join date
- **↕️ Column Sorting** - Click any column header to sort data
- **📄 Pagination** - Navigate pages or jump directly to a specific page number
- **📤 Export Options** - Download filtered data as CSV or PDF

### Theme Customization

- **🌙 Dark Mode** - Toggle between light and dark themes using the header button
- **💾 Preference Memory** - Your theme choice is automatically saved

---

## 📦 Dependencies

### Core Dependencies

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "vite": "^4.0.0",
  "recharts": "^2.5.0"
}
```

### Export & Utility Libraries

```json
{
  "jspdf": "^2.5.1",
  "jspdf-autotable": "^3.5.28",
  "react-icons": "^4.8.0"
}
```

---

## 🎯 Development Notes

### Architecture Principles

- **🧩 Modular Components** - Clear separation of concerns with reusable components
- **🎨 CSS Variables** - Consistent theming and easy customization
- **♿ Accessibility** - ARIA labels and keyboard-friendly navigation
- **📱 Mobile-First** - Responsive design patterns throughout

### Performance Optimizations

- **⚡ Real-time Updates** - Efficient state management for live data simulation
- **🚀 Lazy Loading** - Optimized component loading strategies
- **💾 Memoization** - React.memo and useMemo for performance critical components

### Customization Options

- **🎨 Theming** - Modify CSS variables in `index.css` for custom branding
- **📊 Data Sources** - Replace mock data in `mockData.js` with real API calls
- **🔧 Components** - Extend or modify existing components for additional features

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **💾 Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **🚀 Push** to the branch (`git push origin feature/amazing-feature`)
5. **📝 Open** a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure responsive design compatibility

---

## 📄 License

This project is created for **educational and demonstration purposes only**.

---

## 📞 Support & Contact

- **📧 Email**: armanfarooqui078601@gmail.com
- **🐛 Issues**: [GitHub Issues](https://github.com/Mrfarooqui038501/Analytics-Dashboard.git)
- **💬 Discussions**: [GitHub Discussions](https://github.com/Mrfarooqui038501/Analytics-Dashboard.git)

---

## 🙏 Acknowledgments

- Thanks to the [Recharts](https://recharts.org/) team for the excellent charting library
- Inspired by modern dashboard design patterns
- Built with ❤️ for the digital marketing community

---

<div align="center">
  <h3>⭐ Star this repo if you found it helpful!</h3>
  <p><strong>Thank you for checking out ADmyBRAND Insights! 🚀</strong></p>
</div>