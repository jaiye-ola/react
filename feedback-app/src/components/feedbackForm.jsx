import React from 'react'
import Container from './shared/Container'
import SelectRated from './selectRated'
import Feedbackstats from './Feedbackstats'

function FeedbackForm() {
  return (
    <div>
      <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-3">
            <div className='md:col-span-2 bg-red-100'>
              <div className='cform bg-white shadow-lg rounded-md p-5'>
                <form action="">
                <div className="mb-3">
                  <SelectRated />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Enter Feedback</label>
                  <input 
                  type="text"
                  className='w-full bg-gray-200 p-3 border-none outline-none focus:border-none focus:outline-none rounded-lg'
                  name=''
                  // value=''
                  placeholder='Enter your feedback'
                  id='' />
                </div>
                <div>
                  <button type="submit" className='w-[20%] p-3 text-white rounded-md hover:bg-gray-400 duration-500 hover:translate-x-2 bg-gray-500'>Add feedback</button>
                </div>
              </form>
            </div>
          </div>
        <div className='bg-blue-300'>
          <Feedbackstats />
          {/* feedback */}
        </div>
        </div>
        

      </Container>
    </div>
  )
}

export default FeedbackForm
