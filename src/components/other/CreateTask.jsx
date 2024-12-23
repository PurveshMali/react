import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div class=''>
            <form class='admin-form'>
                <div class='inputs'>
                    <h3>Task Title</h3>
                    <input placeholder="Make Ui design" />
                    <h3>Date</h3>
                    <input type="date" />
                    <h3>Assign to</h3>
                    <input type="text" placeholder='Employee Name' />
                    <h3>Category</h3>
                    <input type="text" placeholder='Design, Dev, etc'/>
                </div>
                <div class='description'>
                    <h3>Description</h3>
                    <textarea name="" id="" cols='30' rows='10'></textarea>
                    <button>Create Task</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default CreateTask
