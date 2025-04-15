import React from 'react'

const CaptainsDetail = () => {
  return (
    <div>
         <div className="h-1/3 p-4 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            {/* Rider Info */}
            <div className="flex items-center gap-3">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                alt="Rider Avatar"
              />
              <h4 className="text-lg font-medium">Rider Name</h4>
            </div>
            {/* Earnings */}
            <div className="text-right">
              <h4 className="text-xl font-semibold">₹2000</h4>
              <p className="text-sm font-medium text-gray-500">Earned</p>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="flex justify-around items-center gap-4 bg-gray-200 rounded-2xl">
            <div className="text-center">
              <i className="text-2xl font-extralight ri-time-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-500">Hours Online</p>
            </div>
            <div className="text-center">
              <i className="text-2xl font-extralight ri-speed-up-fill"></i>
              <h5 className="text-lg font-medium">8.5</h5>
              <p className="text-sm text-gray-500">Avg Speed</p>
            </div>
            <div className="text-center">
              <i className="text-2xl font-extralight ri-booklet-line"></i>
              <h5 className="text-lg font-medium">23</h5>
              <p className="text-sm text-gray-500">Trips Completed</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CaptainsDetail