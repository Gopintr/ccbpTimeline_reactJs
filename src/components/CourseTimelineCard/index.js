// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="course-container">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="ul-list">
        {tagsList.map(eachTag => (
          <li key={eachTag.id}>
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
