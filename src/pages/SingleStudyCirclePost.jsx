import React from "react";
import { useParams } from "react-router-dom";

const SingleStudyCirclePost = () => {
  const { studyCircleId } = useParams();

  console.log(studyCircleId);

  // const { data: storyDataObj, isLoading } = useGetSingleStoryQuery(storyId, {
  //     skip: !storyId,
  //   });

  //   if (!isLoading && !storyDataObj) {
  //     navigate("/not-found", { replace: true });
  //   }

  return <div className="pt-[200px]">Single Study Circle Post</div>;
};

export default SingleStudyCirclePost;

// `<div className="pt-[200px]">
//       <div className="max-width">
//         <div className="flex items-center gap-2">
//           <span
//             className={`block px-5 py-1 rounded-[30px] text-white text-sm ${categoryBgColor}`}
//           >
//             {storyData?.category?.name}
//           </span>
//           <span
//             className={`block px-5 py-1 rounded-[30px] text-white text-sm ${genreBgColor}`}
//           >
//             {storyData?.genre?.name}
//           </span>
//         </div>
//         <div className="flex items-center gap-2 text-accent-golden mt-5 mb-3">
//           <span>{storyData?.authorId?.fullName}</span>
//           <span className="size-2 rounded-full bg-accent-golden shrink-0 block"></span>
//           <span>
//             {storyData?.createdAt
//               ? convertToBanglaDate(new Date(storyData?.createdAt))
//               : convertToBanglaDate(new Date())}
//           </span>
//         </div>
//         <h1 className="text-xl md:text-3xl lg:text-[60px] lg:leading-[80px] font-niladri text-primary-blue">
//           {storyData?.title}
//         </h1>
//         <img
//           src={storyData?.thumbnail?.url}
//           alt="Blog Thumbnail"
//           className="block w-full rounded-[30px] object-cover my-10"
//         />
//       </div>
//       {/* author details section */}
//       <div className="bg-[#F1F8FF] py-[50px] w-[calc(100%_+_20px)] sm:w-[calc(100%_+_60px)] -ml-[10px] sm:-ml-[30px] px-[10px] sm:px-[30px]">
//         <div className="max-width">
//           <div className="flex flex-wrap sm:flex-nowrap items-center gap-10">
//             <img
//               src={storyData?.authorId?.avatar?.url}
//               alt="Author Image"
//               className="mx-auto sm:ml-0 w-[220px] object-cover rounded-[20px] shrink-0"
//             />
//             <div className="grow">
//               <h1 className="text-center sm:text-left text-lg sm:text-2xl font-niladri text-primary-blue mb-3">
//                 {storyData?.authorId?.fullName}
//               </h1>
//               <p>{storyData?.authorId?.bio}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-width">

//         {/* recent posts section */}
//         {relatedStories && relatedStories?.length > 0 && (
//           <div className="mt-[60px] sm:mt-20">
//             <h1 className=" text-lg sm:text-xl md:text-3xl font-niladri mb-5">
//               আরো লেখা
//             </h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {relatedStories?.map((story, i) => (
//                 <CategoryCard
//                   key={i}
//                   categoryName={story?.category?.name}
//                   categorySlug={story?.category?.slug}
//                   date={
//                     story?.createdAt ? new Date(story?.createdAt) : new Date()
//                   }
//                   desc={story?.shortDescription}
//                   genreType={story?.genre?.name}
//                   genreSlug={story?.genre?.slug}
//                   thumbnail={story?.thumbnail?.url}
//                   title={story?.title}
//                   writer={story?.author?.fullName}
//                   link={story?._id}
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>`
