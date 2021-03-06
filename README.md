# JobSeekr Front End

    - Drag and drop
    - Columns:
    	○ Wishlist
    	○ Applied
    	○ Phone Screen
    	○ Interview
    	○ Take Home
    	○ Offer
    	○ Rejected
    	○ Accepted
    - Sign in/Auth
    - Notes
    - Contacts
    - Metrics
    	○ Funnel: saved, applied, interviewed, offers etc
    	○ Stats: # jobs saved, applied etc

## Front End Views

    - Log in / Splash ✔︎
    - Sign up ✔︎
    - Main kanban/trello/jobs board
    - Add/Edit job listing
    - Profile? (Goals)
    - Metrics
    - Contacts
    - Networking agenda?

## FE Components

# Log In/Splash

    - Header ✔︎
    - Log in Form ✔︎
    - Sign up button ✔︎

# Sign up

    - Form ✔︎

# Main/Dash

    - Nav
    - Main Kanban/drag & drop
    - Kanban item
        - Kanban item detail / edit / delete
    - Footer

# Add/Edit

    - Title/Header
    - Form
    - History/Timeline
    - Notes
    - Contact info
    - Checklist?
    - ^^ All details same view

# Form

    Company
    Job Title
    Deadline
    URL
    Location
    Salary
    Description
    Contact
    Notes

## FE Utils

    > CREATE jobs ❤︎
        >> TODO 6/2
            +Job button broken on deploy (works locally) ✔︎
            Font too thin on deploy (bolded locally) ✔︎
            Add Salary column to BE ✔︎
            Create job function
            => LATER: React lib for WYSIWYG text editor
            => LATER: React lib for zipcode to city/state/country
    > GET jobs
        > All by id
        > Each column (WHERE param = true)
    > UPDATE jobs
        > By id
    > DELETE jobs
        > By id

each column will GET by that param
dragging a job into a new column will update status column param = true, prev column param = false

# Profile

    - Job search goals (notes/manifesto)
    Salary
    Values
    Remote
    - Job search journal (dated entries)
    - Cover letter builder?
    - Resume Builder?
    - Calendar view/networking journal?

# Metrics

    - Funnel chart
    - Bar chart: see back end columns >> bools
    - Stats: # applications etc, % success rate, total apps total interviews total rejects etc etc
    - Calendar?
    - Map?

# Contacts

    - Table:
    	○ Name
    	○ Company
    	○ Email
    	○ Phone
    	○ Notes

https://bestofreactjs.com/repo/react-dnd-react-dnd--react-drag-and-drop

https://blog.logrocket.com/drag-and-drop-react-dnd/

https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/

https://bestofreactjs.com/repo/atlassian-react-beautiful-dnd-react-drag-and-drop

## Attribution

### Cartograph CF Font

https://connary.com/cartograph.html

### Svg background

https://heropatterns.com/

### Icons

https://heroicons.com/
https://github.com/tailwindlabs/heroicons
