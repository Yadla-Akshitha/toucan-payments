import React, { useState,useEffect } from 'react';
import { stories } from '../objects/Stories';

const StoriesComponent = () => {
  let [ storyCount, setStoryCount ] = useState(1);
  let story = stories[storyCount - 1];

  const handleClickUp = () => {
    if(storyCount != 3 && storyCount < 3) {
      setStoryCount(storyCount + 1);
    }
  }

  const handleClickDown = () => {
    if(storyCount > 1) {
      setStoryCount(storyCount - 1);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center border-8 w-full h-full">
			<div className="border border-red-400">
        <div>
          <p>{story.des}</p>
          <p>{story.name}</p>
        </div>
			</div>
			<div className="border border-red-800">
        <button
          type="button"
          onClick={() => { handleClickUp() }}
          className={storyCount >= 3 ? "focus:outline-none disabled opacity-10 bg-red-900": "border bg-green-900"}
        >Up</button>
				<p>{storyCount}</p>
				<button
          type="button"
          onClick={() => { handleClickDown() }}
          className={storyCount <= 1 ? "focus:outline-none disabled bg-red-900 opacity-10": "border bg-green-900"}
        >Down</button>
			</div>
		</div>
  )
}

export default StoriesComponent