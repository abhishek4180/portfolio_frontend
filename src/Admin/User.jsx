import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../services/apiConnector';
import { toast } from 'react-toastify';
import { profile } from '../services/apis';
import { getProfile } from '../services/operations/Profile';

export default function User() {
    const { CREATE_PROFILE_API } = profile;
    const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProfile(setLoading);
        setData(result);
        console.log("data ", result);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
  
    fetchData();
  }, []);
    const [profileImage, setProfileImage] = useState(data?.profileImage || '' );
    const [aboutImage, setAboutImage] = useState(data?.aboutImage || '' );
    const [about, setAbout] = useState(data?.about || '' );
    const [resume, setResume] = useState(data?.resume || '' );

     const [add, setAdd] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('profileImage', profileImage);
            formData.append('aboutImage', aboutImage);
            formData.append('about', about);
            formData.append('resume', resume);

            setAdd(true);
            const response = await axiosInstance.put(CREATE_PROFILE_API, formData);
            if (response.data.success) {
                toast.success('Profile updated successfully');
            } else {
                throw new Error(response.data.message);
            }
            setAdd(false);
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Failed to update profile');
        }
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">Update Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="profileImage" className="block font-medium">Profile Image:</label>
                    <input type="file" id="profileImage" onChange={(e) => setProfileImage(e.target.files[0])} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="aboutImage" className="block font-medium">About Image:</label>
                    <input type="file" id="aboutImage" onChange={(e) => setAboutImage(e.target.files[0])} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="about" className="block font-medium">About:</label>
                    <textarea id="about" rows="4" value={about} onChange={(e) => setAbout(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div>
                    <label htmlFor="resumeLink" className="block font-medium">Resume Link:</label>
                    <input type="text" id="resume" value={resume} onChange={(e) => setResume(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> { add ? "Adding" : "Add Profile" } </button>
            </form>
        </div>
    );
}
