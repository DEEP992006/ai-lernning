import React, { useEffect, useState } from 'react';
import { Book, FileText, Hash, Tag, ArrowRight, Clock, Award, Plus } from 'lucide-react';
import { allcourseapi } from '../../Features/courses/allcourses/api/allcourseapi';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

const DifficultyIndicator = ({ level }) => {
  const colorMap = {
    Beginner: 'bg-emerald-500',
    Intermediate: 'bg-blue-500',
    Advanced: 'bg-purple-600'
  };

  return (
    <div className="flex items-center">
      <span className={`w-2 h-2 rounded-full mr-2 ${colorMap[level] || 'bg-gray-400'}`}></span>
      <span className="text-xs font-medium text-gray-600">{level}</span>
    </div>
  );
};

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate(`/course/${course.id}/0`);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group hover:border-transparent">
      <div className="relative h-48">
        <img
          src={course.imageUrl || "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"}
          alt={course.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight">
            {course.name}
          </h3>
          <DifficultyIndicator level={course.difficulty} />
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-5">
          <div className="flex items-center text-xs font-medium text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full">
            <Hash className="w-3.5 h-3.5 text-purple-600 mr-1.5" />
            <span>{course.chapter} Modules</span>
          </div>
          <div className="flex items-center text-xs font-medium text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full">
            <Tag className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
            <span>{course.category}</span>
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 group-hover:shadow-md"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const Allcourses = () => {
  const [coursearray, setCoursearray] = useState([]);
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: allcourseapi,
    onSuccess: (data) => {
      setCoursearray(data);
      console.log(data);
    },
    onError: (error) => {
      console.error("Failed to fetch courses:", error);
    }
  });

  useEffect(() => {
    mutate();
  }, []);

  const handleCreateCourse = () => {
    navigate('/course/new');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <button
            onClick={handleCreateCourse}
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New
          </button>
        </div>

        {isPending ? (
          <div className="text-center text-gray-600 text-lg">Loading courses...</div>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {coursearray.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Allcourses;
