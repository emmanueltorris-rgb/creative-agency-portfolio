import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.image) return;

    onAddProject(formData);
    
    setFormData({ name: "", image: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h3>Add New Project</h3>
      <input
        placeholder="Project Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <button type="submit">Upload to Portfolio</button>
    </form>
  );
}

export default ProjectForm;