import React, { useState, useRef, useEffect } from 'react';
import { LuSettings2 } from "react-icons/lu";

const filterOptions = [
  { label: "Sort By", value: "sort" },
  { label: "Ratings", value: "rating" },
  { label: "10 min delivery", value: "fast" },
  { label: "Veg/NonVeg", value: "veg/non" },
];

const filterDetails = {
  sort: ["Relevance (Default)", "Top - Rated", "Fast Delivery", "Cost: Low to High", "Cost: High to Low"],
  rating: ["Ratings 4.0+", "Ratings 4.5+"],
  fast: ["10 min delivery"],
  "veg/non": ["Veg", "Non Veg"]
};

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("sort");
  const [selectedOption, setSelectedOption] = useState({});
  const optionRefs = useRef({}); // store refs for each filter option
  const [sliderTop, setSliderTop] = useState(0);

  // Update slider position when `selected` changes
  useEffect(() => {
    const ref = optionRefs.current[selected];
    if (ref) {
      setSliderTop(ref.offsetTop);
    }
  }, [selected]);

  return (
    <>
      <div className='text-center flex items-center  m-3 mt-5 hover'>
        <div onClick={() => setOpen(true)} className=' border-1 border-gray-300 w-20 h-8 flex items-center justify-center rounded-2xl cursor-pointer'>
          Filter <span className='pl-1 mt-1'><LuSettings2 /></span>
        </div>
        <div className='ml-5 border-1 border-gray-300 w-25 h-8 items-center justify-center pt-1 rounded-2xl cursor-pointer'>
          Clear Filters
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-gray-900/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-150 h-80 shadow-2xl relative">
            <button
              className="absolute top-3 right-4 text-xl font-bold  rounded-full w-8 h-8 flex items-center justify-center bg-white shadow-lg shadow-gray-400/70"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-gray-600">Filter Options</h2>
            <hr className='mt-2 w-full text-gray-300' />
            <div className='h-55 flex'>
              {/* Left filter list with animated slider */}
              <div className='border-r-1 border-r-gray-400 h-64 w-60 relative'>
                {/* Animated orange slider */}
                <span
                  className="absolute left-0 w-1 rounded-full bg-orange-500 transition-all duration-500"
                  style={{
                    top: `${sliderTop}px`,
                    height: '34px',
                    opacity: 1,
                    transitionProperty: 'top, height, opacity'
                  }}
                />
                <div className="space-y-2 text-lg font-semibold text-neutral-700">
                  {filterOptions.map((opt) => (
                    <div
                      key={opt.value}
                      ref={el => optionRefs.current[opt.value] = el}
                      className="relative flex items-center cursor-pointer group h-[34px] pl-5"
                      onClick={() => setSelected(opt.value)}
                    >
                      <span className={`${selected === opt.value ? 'text-orange-600' : ''}`}>
                        {opt.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right filter options */}
              <div className='w-full h-55 flex flex-col pt-2 pl-8'>
                {filterDetails[selected].map((option) => (
                  <label key={option} className="flex items-center mb-4 cursor-pointer text-base">
                    <input
                      type="radio"
                      name={selected}
                      value={option}
                      checked={selectedOption[selected] === option}
                      onChange={() =>
                        setSelectedOption(prev => ({ ...prev, [selected]: option }))
                      }
                      className="accent-orange-500 w-5 h-5 mr-3"
                    />
                    <span className={selectedOption[selected] === option ? "text-orange-600 font-semibold" : ""}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
