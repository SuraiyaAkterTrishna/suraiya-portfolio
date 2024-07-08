import { useEffect, useState } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect( () => {
        fetch("projects.json")
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming you expect a JSON response
          })
        .then(data => setProjects(data))
        .catch(error => {
            // Handle the error here
            console.error('Error:', error);
          });
    },[])
    return ([projects]);
};

export default useProjects;