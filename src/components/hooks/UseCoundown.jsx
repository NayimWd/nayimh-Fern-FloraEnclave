import { useEffect, useState } from "react";

	
const UseCoundown = ({ seconds: days  }) => {

	const [timeLeft, setTimeLeft] = useState(days );

	useEffect(() => {
		if (timeLeft > 0) {
		  const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		  }, 1000);
	
		  return () => clearInterval(intervalId);
		}
	  }, [timeLeft]);
	
	  const formatNumber = (number) => {
		return number < 10 ? `0${number}` : number;
	  };
	
	  const daysRemaining = Math.floor(timeLeft / (24 * 60 * 60));
	  const hoursRemaining = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
	  const minutesRemaining = Math.floor((timeLeft % (60 * 60)) / 60);
	  const secondsRemaining = timeLeft % 60;

	

	return <div className="font-mono">
	<p>{formatNumber(daysRemaining)} days, {formatNumber(hoursRemaining)} hours, {formatNumber(minutesRemaining)} minutes, {formatNumber(secondsRemaining)} seconds</p>
	</div>;
};

export default UseCoundown;
