import React from 'react'

function SkillBadge({ skill }) {
    return (
      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium inline-block m-1 transition-all hover:bg-blue-200 hover:shadow-sm">
        {skill}
      </span>
    );
  }
export default SkillBadge