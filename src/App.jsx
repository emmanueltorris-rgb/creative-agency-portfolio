import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import './App.css';

function App() {
  // 1. The main list of projects
  const [projects, setProjects] = useState([
    { id: 1, name: "Modern Branding", image: "https://picsum.photos/300/200?random=1", description: "Creative logo design" },
    { id: 2, name: "Web Platform", image: "https://picsum.photos/300/200?random=2", description: "Responsive React app" }
  ]);

  // 2. State for the search input
  const [searchTerm, setSearchTerm] = useState("");

  // 3. Logic to filter projects based on search
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 4. Function to add a new project (passed to ProjectForm)
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  return (
    <div className="App">
      <Header />
      <ProjectForm onAddProject={addProject} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;