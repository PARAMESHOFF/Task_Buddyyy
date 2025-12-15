import React from "react";

export default function ProgressTracker({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;
  const total = tasks.length;
  const progress = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="progress-tracker">
      <p>{completed} of {total} tasks completed</p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
