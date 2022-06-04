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
import NavBar from '../navbar/Navbar'
import styles from './newJob.module.css'

export default function NewJob() {
  return (
    <div>
      <NavBar />
      <fieldset>
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
              // onChange={handleInputData}
              // value={inputData.jobTitle}
              name='job title'
              label='job title'
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
              // onChange={handleInputData}
              // value={inputData.company}
              name='Company'
              label='Company'
            />
          </label>

          {/* URL */}
          <label>
            <section className={styles.labelTitle}>
              <LinkIcon height={15} width={15} className={styles.labelIcon} />
              Post URL
            </section>
            <input
              // onChange={handleInputData}
              // value={inputData.url}
              name='url'
              label='url'
            />
          </label>

          {/* Salary */}
          <label>
            <section className={styles.labelTitle}>
              <CashIcon height={15} width={15} className={styles.labelIcon} />
              Salary
            </section>
            <input
              // onChange={handleInputData}
              // value={inputData.Salary}
              name='Salary'
              label='Salary'
            />
          </label>
        </section>

        {/* Remote */}
        <section className={styles.labelTitle}>
          <DesktopComputerIcon
            height={15}
            width={15}
            className={styles.labelIcon}
          />
          <label>This role is...</label>
        </section>
        <section className={styles.radioArea}>
          <label>
            <input
              type='radio'
              id='remote'
              name='remote-status'
              // onChange={handleInputData}
              // value={inputData.remote}
              // checked
            />
            Fully Remote
          </label>
          <label>
            <input
              type='radio'
              id='hybrid'
              name='remote-status'
              // onChange={handleInputData}
              // value={inputData.remote}
            />
            Hybrid
          </label>
          <label>
            <input
              type='radio'
              id='in-person'
              name='remote-status'
              // onChange={handleInputData}
              // value={inputData.remote}
            />
            In-Person
          </label>
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
              // onChange={handleInputData}
              // value={inputData.company}
              name='zipcode'
              label='zipcode'
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
              // onChange={handleInputData}
              // value={inputData.Contact Name}
              name='Contact Name'
              label='Contact Name'
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
              // onChange={handleInputData}
              // value={inputData.Contact Email}
              name='Contact Email'
              label='Contact Email'
            />
          </label>
        </section>

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
            // onChange={handleInputData}
            // value={inputData.Description}
            name='Description'
            label='Description'
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
            // onChange={handleInputData}
            // value={inputData.Notes}
            name='Notes'
            label='Notes'
          />
        </label>
      </fieldset>
      <button>Save</button>
    </div>
  )
}
