import React from 'react'
import { Link } from 'react-router-dom'

function JobItem({job}) {
  return (
    <div className='job'>
        <div>{new Date(job.createdAt).toLocaleString('en-US')}</div>
        <div>{job.product}</div>
        <div className={`status status-${job.status}`}>
            {job.status}
        </div>
        <Link to={`/job/${job._id}`} className='btn btn-reverse btn-sm'>
            View
        </Link>

    </div>
  )
}

export default JobItem