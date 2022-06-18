import {
  BriefcaseIcon,
  OfficeBuildingIcon,
  DesktopComputerIcon,
  CashIcon,
  GlobeIcon,
  LinkIcon,
  UserCircleIcon,
  AtSymbolIcon,
  PencilAltIcon,
  StarIcon,
} from '@heroicons/react/outline'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useJobs } from '../../context/JobsContext'
import { useUser } from '../../context/UserContext'
import { getAllUserJobs, postJob } from '../../services/users'
import NavBar from '../navbar/Navbar'
import styles from './newJob.module.css'

export default function NewJob() {
  const navigate = useNavigate()
  const { user } = useUser()
  const { setJobs } = useJobs()
  const [inputData, setInputData] = useState({
    user_id: user.id,
    applied: 'true',
  })

  const handleInputData = (e) => {
    const { value, name } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  const handleSave = async () => {
    try {
      await postJob(inputData)
      console.log(inputData)
      const jobs = await getAllUserJobs()
      setJobs(jobs)
      navigate('/')
    } catch (error) {
      console.error('new job error')
    }
  }

  return (
    <div className={styles.newJobContainer}>
      <NavBar />
      <fieldset className={styles.newJobFieldset}>
        <legend>Add New Job</legend>

        <section className={styles.newJobTop}>
          {/* Title */}
          <label>
            <section className={styles.labelTitle}>
              <BriefcaseIcon
                height={15}
                width={15}
                className={styles.labelIcon}
              />
              Job Title
            </section>
            <input
              onChange={handleInputData}
              value={inputData.title}
              name='title'
            />
          </label>

          {/* Company */}
          <label>
            <section className={styles.labelTitle}>
              <OfficeBuildingIcon
                height={15}
                width={15}
                className={styles.labelIcon}
              />
              Company
            </section>
            <input
              onChange={handleInputData}
              value={inputData.company}
              name='company'
            />
          </label>

          {/* URL */}
          <label>
            <section className={styles.labelTitle}>
              <LinkIcon height={15} width={15} className={styles.labelIcon} />
              Post URL
            </section>
            <input
              onChange={handleInputData}
              value={inputData.url}
              name='url'
            />
          </label>

          {/* Salary */}
          <label>
            <section className={styles.labelTitle}>
              <CashIcon height={15} width={15} className={styles.labelIcon} />
              Salary
            </section>
            <input
              onChange={handleInputData}
              value={inputData.salary}
              name='salary'
            />
          </label>
        </section>

        {/* Remote Radio Group */}
        <section className={styles.remoteSection}>
          <section className={styles.labelTitleRemote}>
            <DesktopComputerIcon
              height={15}
              width={15}
              className={styles.labelIconRadio}
            />
            <label>This role is...</label>
          </section>
          <section className={styles.radioArea}>
            <label>
              <input
                type='radio'
                id='remote'
                name='remote'
                value='true'
                onChange={handleInputData}
              />
              Fully Remote
            </label>
            <label>
              <input
                type='radio'
                id='hybrid'
                name='remote'
                value='hybrid'
                onChange={handleInputData}
              />
              Hybrid
            </label>
            <label>
              <input
                type='radio'
                id='in-person'
                name='remote'
                value='false'
                onChange={handleInputData}
              />
              In-Person
            </label>
          </section>
        </section>

        <section className={styles.newJobBottom}>
          {/* Zipcode */}
          <label>
            <section className={styles.labelTitle}>
              <GlobeIcon height={15} width={15} className={styles.labelIcon} />
              Zipcode
            </section>
            {/* 
          TODO: React Zipcode => City, State, Country API
          https://dev.to/vetswhocode/react-tutorial-city-state-lookup-using-the-us-postal-service-api-202p
          * Store zipcode in DB but display city, state etc. 
           */}
            <input
              type='number'
              onChange={handleInputData}
              value={inputData.zipcode}
              name='zipcode'
            />
          </label>

          {/* Contact Name */}
          <label>
            <section className={styles.labelTitle}>
              <UserCircleIcon
                height={15}
                width={15}
                className={styles.labelIcon}
              />
              Contact Name
            </section>
            <input
              onChange={handleInputData}
              value={inputData.contactName}
              name='contact_name'
            />
          </label>

          {/* Contact Email */}
          <label>
            <section className={styles.labelTitle}>
              <AtSymbolIcon
                height={15}
                width={15}
                className={styles.labelIcon}
              />
              Contact Email
            </section>
            <input
              onChange={handleInputData}
              value={inputData.contactEmail}
              name='contact_email'
            />
          </label>
        </section>

        {/* 
        TODO: Test that clicking one radio, then clicking a different radio toggles the first radio back to 'false' onChange
         */}

        {/* Status Radio Group */}
        {/* <section className={styles.statusSection}>
          <section className={styles.labelTitleStatus}>
            <DesktopComputerIcon
              height={15}
              width={15}
              className={styles.labelIconRadio}
            />
            <label>My application status is...</label>
          </section>
          <section className={styles.radioArea}>
            <label>
              <input
                type='radio'
                id='remote'
                name='wishlist'
                value='true'
                onChange={handleInputData}
              />
              Wishlist
            </label>
            <label>
              <input
                type='radio'
                id='hybrid'
                name='applied'
                value='true'
                onChange={handleInputData}
              />
              Applied
            </label>
            <label>
              <input
                type='radio'
                id='in-person'
                name='phone_screen'
                value='true'
                onChange={handleInputData}
              />
              Phone Screen
            </label>
            <label>
              <input
                type='radio'
                id='in-person'
                name='interviewed'
                value='true'
                onChange={handleInputData}
              />
              Behavioral Interview
            </label>
            <label>
              <input
                type='radio'
                id='in-person'
                name='take_home'
                value='true'
                onChange={handleInputData}
              />
              Take Home Challenge
            </label>
            <label>
              <input
                type='radio'
                id='in-person'
                name='technical_interview'
                value='true'
                onChange={handleInputData}
              />
              Technical Interview
            </label>
          </section>
        </section> */}

        {/* Description */}
        <label>
          <section className={styles.labelTitle}>
            <PencilAltIcon
              height={15}
              width={15}
              className={styles.labelIcon}
            />
            Role Description
          </section>
          {/* 
          TODO: Swap textarea for WYSIWYG react lib:
          https://www.tiny.cloud/auth/signup/
          https://www.kindacode.com/article/popular-open-source-wysiwyg-editors-for-react/
          https://openbase.com/categories/js/best-react-wysiwyg-editor-libraries
          */}
          <textarea
            onChange={handleInputData}
            value={inputData.description}
            name='description'
          />
        </label>

        {/* Notes */}
        <label>
          <section className={styles.labelTitle}>
            <StarIcon height={15} width={15} className={styles.labelIcon} />
            More Notes
          </section>
          <textarea
            className={styles.notes}
            onChange={handleInputData}
            value={inputData.notes}
            name='notes'
          />
        </label>
      </fieldset>
      <button onClick={handleSave}>Save</button>
    </div>
  )
}
