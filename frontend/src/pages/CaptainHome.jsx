import React from 'react';
import { Link } from 'react-router-dom';

const CaptainHome = () => {
  return (
    <div className="h-screen w-screen">
      {/* Top Section */}
      <div className="fixed p-3 top-0 flex items-center justify-between w-full bg-white shadow">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full border shadow"
        >
          <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>

      {/* Main Content */}
      <div className="h-full flex flex-col">
        {/* Image Section */}
        <div className="h-2/3">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png"
            alt="Cityscape"
          />
        </div>

        {/* Stats Section */}
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
    </div>
  );
};

export default CaptainHome;