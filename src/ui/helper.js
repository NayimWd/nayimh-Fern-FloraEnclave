import toast from "react-hot-toast";
import Swal from "sweetalert2";
class alertHelper {
	// regex
	isEmpty(value) {
		return value.length === 0;
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
				background: "#FFCDD2",
				color: "#D32F2F",
                
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

export const { isEmpty, ErrorToast, SuccessToast, LoadingToast, sweetSuccess, sweeterror } = new alertHelper();
