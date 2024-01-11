import { useEffect, useState } from "react";

const MinutesCoundown = ({ seconds, setExpire }) => {
	const [timeLeft, setTimeLeft] = useState(seconds);

	useEffect(() => {
		if (timeLeft > 0) {
			const intervalId = setInterval(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);

			return () => clearInterval(intervalId);
		}
	}, [timeLeft]);

	const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
	const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
	const remainingSeconds = timeLeft % 60;

	if (minutes > 10) minutes = "0" + minutes;
	if (remainingSeconds > 10) remainingSeconds = "0" + remainingSeconds;

	return (
		<div>
			{" "}
			{minutes} minutes : {remainingSeconds} seconds
		</div>
	);
};

export default MinutesCoundown;
