import { useEffect, useState } from "react";

	
const UseCoundown = ({ seconds }) => {

	const [timeLeft, setTimeLeft] = useState(seconds);

	useEffect(() => {
		if (timeLeft > 0) {
		  const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		  }, 1000);
	
		  return () => clearInterval(intervalId);
		}
	  }, [timeLeft]);
	
	  const days = Math.floor(timeLeft / (24 * 60 * 60));
	  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
	  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
	  const remainingSeconds = timeLeft % 60;

	

	return <div className="font-mono">
	<p>{days} days : {hours} hours : {minutes} minutes : {remainingSeconds} seconds</p>
	</div>;
};

export default UseCoundown;
