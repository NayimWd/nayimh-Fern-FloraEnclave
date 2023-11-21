import toast from "react-hot-toast";
import Swal from "sweetalert2";
const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;



class alertHelper {
	// regex
    // empty field check
	isEmpty(value) {
		return value.length === 0;
	}
    // email regex
    isEmail(value){
        return emailRegEx.test(value);
    }

    // password regex
    isPassword(value){
        return passwordRegEx.test(value);
    }
    

    // hot toast

	ErrorToast(msg) {
		toast.error(msg, {
            position:"top-center",
            duration: 3000,
			style: {
				background: "#FFCDD2",
				color: "#D32F2F",
                
			},
        });
	};

	SuccessToast(msg) {
		toast.success(msg, {
            position:"top-center",
            duration: 3000,
			style: {
				background: "#C8E6C9",
				color: "#4CAF50",
                
			},
		});
	};

    LoadingToast(msg){
        toast.loading(msg, {
            position:"top-center",
			duration: 3000,
			style: {
				background: "#C8E6C9",
				color: "#4CAF50",
			},
        })
    }

    // sweet alert
    sweetSuccess(msg){
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: msg,
            showConfirmButton: false,
            timer: 1500
          })
    };

    sweeterror(msg){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: msg,
            showConfirmButton: true,
            timer: 1500
          })
    }

}

export const { isEmpty, isEmail, isPassword, ErrorToast, SuccessToast, LoadingToast, sweetSuccess, sweeterror } = new alertHelper();
