

const CircularProgressBar = ({ rating }) => {
    const percentage = (rating / 5) * 100;
  return (
    <div className="relative w-24 h-24">
      <svg className="absolute top-0 left-0 transform -rotate-90" viewBox="0 0 24 24" width="100%" height="100%">
        <circle className="fill-transparent stroke-gray-300" cx="12" cy="12" r="10" strokeWidth="4" />
        <circle
          className="fill-transparent stroke-dark_green "
          cx="12"
          cy="12"
          r="10"
          strokeWidth="4"
          strokeDasharray="63"
          strokeDashoffset={(100 - percentage) / 100 * 63}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold ">
        {rating}
      </div>
    </div>
  )
}

export default CircularProgressBar