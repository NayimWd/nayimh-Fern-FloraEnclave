import { useState } from "react";
import useImage from "../../../assets/icon/seller10.png";
import { SlLike, SlDislike } from "react-icons/sl";

const ReviewContent = () => {
	const [isLike, setIslike] = useState(false);
	const [disLike, setDislike] = useState(false);
	const [likeCount, setLikeCount] = useState(5);

	const handleLike = (e) => {
		if (e === "like") {
			setIslike(!isLike);
			setDislike(false);
			if (!isLike) {
				setLikeCount(likeCount + 1);
				setIslike(true);
			} else {
				setLikeCount(likeCount - 1);
				setIslike(false);
			}
		}

		if (e === "dislike") {
			setDislike(!disLike);
			setIslike(false);
			if (isLike) {
				setLikeCount(likeCount - 1);
				setIslike(false);
			}
		}
	};

	return (
		<div className="mt-5 py-5 border-b">
			<div className="">
				<p className="text-2xl text-dark_green">★★★★★</p>
				<div className="mt-3">
					<p className="sm:text-lg font-semibold leading-7">
						The whole shipment came in great shape. The snake plant is small but
						pristine; I am impressed at the health of the plant!
					</p>
					<p className="mt-1 sm:text-lg font-light text-gray-500">
						{" "}
						April 4, 2024 3.20 PM{" "}
					</p>
				</div>
			</div>
			<div className="mt-5 flex flex-col xsm:flex-row justify-between items-center">
				<div className="flex items-center gap-5">
					<img
						className="w-14 h-14 rounded-full object-cover"
						src={useImage}
						alt="reviewer"
						loading="lazy"
					/>
					<h1 className="sm:text-lg md:text-xl leading-7 tracking-wider font-lato">
						Nayim Hasan
					</h1>
				</div>
				<div className="flex items-center gap-5 mt-5 xsm:mt-0">
					<div className="flex items-center gap-3 px-4 py-2 border rounded">
						<SlLike
							onClick={() => handleLike("like")}
							className={`w-6 h-6 cursor-pointer ${isLike ? "text-green" : ""}`}
						/>
						<p className="text-xl border-l px-3">{likeCount}</p>
					</div>
					<div className="flex items-center gap-3 px-4 py-2 border rounded">
						<SlDislike
							onClick={() => handleLike("dislike")}
							className={`w-6 h-6 cursor-pointer ${
								disLike ? "text-green" : ""
							}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewContent;
