

const LineProgressBar = ({ ratings }) => {
      // Calculate the total number of reviews
  const totalReviews = ratings.reduce((total, rating) => total + rating, 0);
  return (
    <div className="flex flex-col items-start space-y-3">
    {[5, 4, 3, 2, 1].map((stars, index) => (
      <div key={stars} className="relative flex items-center w-full h-3">
        <span className="mr-2 xsm:mr-4 text-lg font-semibold tracking-wider text-darker_green">{stars}.0 ★</span>
        <div className="relative flex-1 h-full bg-gray-200 rounded-full">
          <div
            className="absolute inset-0 bg-dark_green rounded-full"
            style={{ width: `${(ratings[index] / totalReviews) * 100}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default LineProgressBar