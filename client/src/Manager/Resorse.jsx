import React, { useState } from 'react';

// Sample data for policies, guidelines, and reference materials
const resourceData = [
  { id: 1, title: 'Hospital Policies', type: 'Policy', file: 'https://gshp.wildapricot.org/resources/Documents/procedures_hospital.pdf' },
  { id: 2, title: 'Infection Control Guidelines', type: 'Guideline', file: 'https://www.afro.who.int/sites/default/files/2017-05/ipcguide.pdf' },
  { id: 3, title: 'Medication Management Protocol', type: 'Protocol', file: 'https://www.p12.nysed.gov/sss/documents/medication-management.pdf' },
  // Add more resources as needed
];

const Resorse= () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };

  const handleClearSelection = () => {
    setSelectedResource(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Resource Library</h1>
  
      {selectedResource ? (
        <div className="border rounded-lg p-4 bg-white">
          <h3 className="text-xl font-semibold mb-2">{selectedResource.title}</h3>
          <p className="mb-2">Type: {selectedResource.type}</p>
          <a href={selectedResource.file} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Download</a>
          <button onClick={handleClearSelection} className="px-3 py-1 bg-red-500 text-white rounded-md ml-2 hover:bg-red-600">Clear Selection</button>
        </div>
      ) : (
        <ul className="list-disc pl-6 mt-4">
          {resourceData.map((resource) => (
            <li key={resource.id} onClick={() => handleResourceClick(resource)} className="text-blue-500 cursor-pointer hover:underline">{resource.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
  
};

export default Resorse;