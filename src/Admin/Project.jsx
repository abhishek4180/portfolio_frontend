import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL } from '../services/apis';
import ProjectCard from '../components/ProjectCard';
import { getProject } from '../services/operations/Projects';
import { axiosInstance } from '../services/apiConnector';
import { MdDeleteSweep } from "react-icons/md";


export default function Project() {
    const [thumbnail, setThumbnail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [github, setGithub] = useState('');
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [add,setAdd] = useState(false);
    const [del, setDel] = useState(false)

    const fetchData = async () => {
        try {
            const result = await  getProject(setLoading);
            setData(result);
            console.log("projects data ", result);
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    };
    useEffect(() => {
        

        fetchData();
    }, []);

    const deleteProject = async (id) => {
        try {
            setLoading(true);
            const response = await axiosInstance.delete(` ${BASE_URL}/admin/delete/${id}`);
            if (response.data.success) {
                toast.success("Deleted Successfully");
                fetchData();
            }
            setLoading(false)
        } catch (error) {
            console.error("Error deleting project:", error);
            toast.error("Failed to delete project");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('thumbnail', thumbnail);
            formData.append('title', title);
            formData.append('description', description);
            formData.append('github', github);
            formData.append('url', url);

            setAdd(true);
            const response = await axiosInstance.post(`${BASE_URL}/admin/createproject`, formData);
            if (response.data.success) {
                toast.success('Project created successfully');
                fetchData();
                // Clear form fields after successful submission
                setThumbnail('');
                setTitle('');
                setDescription('');
                setGithub('');
                setUrl('');
            } else {
                throw new Error(response.data.message);
            }
            setAdd(false)
        } catch (error) {
            console.error("Error creating project:", error);
            toast.error("Failed to create project");
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8">Add Project</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-6">
                    <label htmlFor="thumbnail" className="block text-gray-700 font-medium mb-2">Thumbnail Image</label>
                    <input type="file" id="thumbnail" onChange={(e) => setThumbnail(e.target.files[0])} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
                    <textarea id="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="github" className="block text-gray-700 font-medium mb-2">GitHub Link</label>
                    <input type="text" id="github" value={github} onChange={(e) => setGithub(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label htmlFor="url" className="block text-gray-700 font-medium mb-2">URL</label>
                    <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> { add ? ("Adding") : ("Add Project") } </button>
            </form>

            {/* Display existing projects */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <div className=' flex w-[100%] mx-auto md:ml-0 ml-[7%] justify-center items-center' >
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mt-[20px] md:mt-[80px]'>
    {loading ? (
        "...Loading "
    ) : (
        data.map((project, index) => (
            <div key={index}>
                <ProjectCard data={project} />
                <div>
                    <button onClick={() => deleteProject(project._id)} className="text-red-500 hover:text-red-700"> { del ? "Deleting" : (<MdDeleteSweep style={{width:"30px", height : "30px"}} />) } </button>
                </div>
            </div>
        ))
    )}
</div>

        </div>
                {/* <ul>
                    {data.map((project) => (
                        <li key={project.id} className="flex justify-between items-center border-b py-4">
                            <div>
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div>
                                <button onClick={() => deleteProject(project._id)} className="text-red-500 hover:text-red-700">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
}
