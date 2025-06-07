import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Book, FileText, Gauge, Hash, Tag } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { Newcourseapi } from '../../Features/newcourse/api/Newcourseapi';
import { data, useNavigate } from 'react-router';

// Main App component containing the form
const Newcourses = () => {
  const nevigate = useNavigate()
  // Initialize react-hook-form
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      description: '',
      difficulty: '',
      chapter: 1, // Default value for number of chapters
      category: '',
    }
  });
const newcourse = useMutation({
  mutationFn:async (data) => {
    const response =await Newcourseapi(data)

    console.log(response);
    return response
  },
  onSuccess:async(data) =>{
nevigate(`/course/${data}/0`)
  }
})
  // Function to handle form submission
  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
newcourse.mutate(data)
    alert('Form submitted successfully! Check console for data.');
  };

  return (
    // Outer container takes full screen height, adds top padding, and horizontally centers content
    <div className="h-screen flex justify-center items-center pt-5 px-4 bg-white font-sans">
      {/*
        All styling is now done using only Tailwind CSS classes.
        The 'Inter' font is assumed to be available globally (e.g., via a link in index.html or a global CSS file).
      */}
      {/* Form container with white background, softer shadow, and reduced padding for smaller size */}
      <div className="bg-white rounded-xl shadow-xl py-6 px-5 md:py-8 md:px-6 w-full max-w-md"> {/* Adjusted shadow, padding, and max-width */}
        <h2 className="text-3xl font-bold text-gray-800 mb-5 text-center"> {/* Reduced mb-6 to mb-5 */}
          Course Creation Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3"> {/* Reduced space-y-4 to space-y-3 */}
          {/* Subject Name Field */}
          <div>
            <label htmlFor="subjectName" className="block text-gray-800 text-sm font-medium mb-1 flex items-center"> {/* Darker label text, reduced mb-2 to mb-1 */}
              <Book size={18} className="mr-2 text-blue-700" /> Subject Name {/* Darker icon color */}
            </label>
            <input
              id="subjectName"
              type="text"
              {...register('name', { required: 'Subject Name is required' })}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm {/* Reduced py-2 to py-1.5 */}
                         placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:border-2 {/* Focus border change */}
                         disabled:cursor-not-allowed disabled:opacity-50
                         transition duration-200 ease-in-out"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p role="alert" className="text-red-500 text-xs mt-1">{errors.subjectName.message}</p>
            )}
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-gray-800 text-sm font-medium mb-1 flex items-center"> {/* Darker label text, reduced mb-2 to mb-1 */}
              <FileText size={18} className="mr-2 text-purple-700" /> Description {/* Darker icon color */}
            </label>
            <textarea
              id="description"
              {...register('description', { required: 'Description is required', minLength: { value: 20, message: 'Description must be at least 20 characters' } })}
              
              className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm {/* Reduced py-2 to py-1.5 */}
                         placeholder:text-gray-500 focus:outline-none focus:border-purple-600 focus:border-2 {/* Focus border change */}
                         disabled:cursor-not-allowed disabled:opacity-50
                         resize-y transition duration-200 ease-in-out"
              aria-invalid={errors.description ? "true" : "false"}
            ></textarea>
            {errors.description && (
              <p role="alert" className="text-red-500 text-xs mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Difficulty Field */}
          <div>
            <label htmlFor="difficulty" className="block text-gray-800 text-sm font-medium mb-1 flex items-center"> {/* Darker label text, reduced mb-2 to mb-1 */}
              <Gauge size={18} className="mr-2 text-blue-700" /> Difficulty {/* Darker icon color */}
            </label>
            <Controller
              name="difficulty"
              control={control}
              rules={{ required: 'Difficulty is required' }}
              render={({ field }) => (
                <select
                  {...field}
                  id="difficulty"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm {/* Reduced py-2 to py-1.5 */}
                             focus:outline-none focus:border-blue-600 focus:border-2 {/* Focus border change */}
                             disabled:cursor-not-allowed disabled:opacity-50
                             transition duration-200 ease-in-out"
                  aria-invalid={errors.difficulty ? "true" : "false"}
                >
                  <option value="">Select Difficulty</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              )}
            />
            {errors.difficulty && (
              <p role="alert" className="text-red-500 text-xs mt-1">{errors.difficulty.message}</p>
            )}
          </div>

          {/* No. Chapter Field */}
          <div>
            <label htmlFor="chapter" className="block text-gray-800 text-sm font-medium mb-1 flex items-center"> {/* Darker label text, reduced mb-2 to mb-1 */}
              <Hash size={18} className="mr-2 text-purple-700" /> No. Chapter (Max 5) {/* Darker icon color */}
            </label>
            <input
              id="chapter"
              type="number"
              {...register('chapter', {
                required: 'Number of Chapters is required',
                min: { value: 1, message: 'Minimum 1 chapter' },
                max: { value: 5, message: 'Maximum 5 chapters' },
                valueAsNumber: true, // Converts input value to a number
              })}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm {/* Reduced py-2 to py-1.5 */}
                         placeholder:text-gray-500 focus:outline-none focus:border-purple-600 focus:border-2 {/* Focus border change */}
                         disabled:cursor-not-allowed disabled:opacity-50
                         transition duration-200 ease-in-out"
              aria-invalid={errors.chapter ? "true" : "false"}
            />
            {errors.chapter && (
              <p role="alert" className="text-red-500 text-xs mt-1">{errors.chapter.message}</p>
            )}
          </div>

          {/* Category Field */}
          <div>
            <label htmlFor="category" className="block text-gray-800 text-sm font-medium mb-1 flex items-center"> {/* Darker label text, reduced mb-2 to mb-1 */}
              <Tag size={18} className="mr-2 text-blue-700" /> Category {/* Darker icon color */}
            </label>
            <input
              id="category"
              type="text"
              {...register('category', { required: 'Category is required' })}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm {/* Reduced py-2 to py-1.5 */}
                         placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:border-2 {/* Focus border change */}
                         disabled:cursor-not-allowed disabled:opacity-50
                         transition duration-200 ease-in-out"
              aria-invalid={errors.category ? "true" : "false"}
            />
            {errors.category && (
              <p role="alert" className="text-red-500 text-xs mt-1">{errors.category.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white font-semibold py-3 rounded-lg shadow-lg
                       bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 {/* Changed hover effect */}
                       focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
                       transition duration-300 ease-in-out transform hover:scale-105"
          >
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newcourses;
