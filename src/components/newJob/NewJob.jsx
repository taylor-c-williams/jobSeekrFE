import NavBar from '../navbar/Navbar'
import styles from './newJob.module.css'

export default function NewJob() {
  return (
    <div>
      <NavBar />
      <fieldset>
        <legend>Add New Job</legend>

        {/* Title */}
        <label>
          <section className={styles.labelTitle}>
            Job Title
            {/* Job title hero icon */}
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
            Company
            {/* Company hero icon */}
          </section>
          <input
            // onChange={handleInputData}
            // value={inputData.company}
            name='Company'
            label='Company'
          />
        </label>

        {/* Remote */}
        <section className={styles.labelTitle}>
          <label>This role is...</label>
          {/* Remote hero icon */}
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

        {/* TODO: Add Salary column to DB */}
        {/* Salary */}
        <label>
          <section className={styles.labelTitle}>
            Salary
            {/* Salary hero icon */}
          </section>
          <input
            // onChange={handleInputData}
            // value={inputData.Salary}
            name='Salary'
            label='Salary'
          />
        </label>

        {/* Zipcode */}
        <label>
          <section className={styles.labelTitle}>
            Zipcode
            {/* location icon */}
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

        {/* URL */}
        <label>
          <section className={styles.labelTitle}>
            Post URL
            {/* www hero icon */}
          </section>
          <input
            // onChange={handleInputData}
            // value={inputData.url}
            name='url'
            label='url'
          />
        </label>

        {/* Contact Name */}
        <label>
          <section className={styles.labelTitle}>
            Contact Name
            {/* Contact Name hero icon */}
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
            Contact Email
            {/* Contact Email hero icon */}
          </section>
          <input
            // onChange={handleInputData}
            // value={inputData.Contact Email}
            name='Contact Email'
            label='Contact Email'
          />
        </label>

        {/* Description */}
        <label>
          <section className={styles.labelTitle}>
            Role Description
            {/* Description hero icon */}
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
            More Notes
            {/* Notes hero icon */}
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
