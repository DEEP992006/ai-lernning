import React, { useEffect, useState } from 'react';
import Course from '../../Features/courses/signlecourse/api/components/Course';
import { useParams } from 'react-router';
import { Sidebar } from '../../Features/courses/signlecourse/api/components/Sidebar';
import { useMutation } from '@tanstack/react-query';
import { Singlecourseapi } from '../../Features/courses/signlecourse/api/Singlecourseapi';

const Signle_course = () => {
  const { id, chapterid } = useParams(); // `chapterid` should be part of the route
  const [Coursedata, setCoursedata] = useState(null); // initially null

  const coursedatanew = useMutation({
    mutationKey: ['fetch-course', id],
    mutationFn: async () => {
      const data = await Singlecourseapi(id); // assuming you need to pass ID
      setCoursedata(data);
      return data;
    },
  });

  useEffect(() => {
    coursedatanew.mutate();
  }, []);

  const chapterIndex = parseInt(chapterid, 10);
  const chapter = Coursedata && Array.isArray(Coursedata) ? Coursedata[chapterIndex] : null;

  if (coursedatanew.isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg">
        Loading course...
      </div>
    );
  }

  if (!Coursedata || !chapter) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        Chapter not found or data not loaded.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 min-h-screen bg-background">
      {/* Sidebar */}
      <div className="col-span-3 sticky top-0 h-screen overflow-hidden">
        <Sidebar chapters={Coursedata} />
      </div>

      {/* Main Content */}
      <div className="col-span-9 p-8">
        <Course Coursedetails={chapter} />
      </div>
    </div>
  );
};

export default Signle_course;
