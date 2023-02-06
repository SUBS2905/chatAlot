import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const options = {
  customUI: ({ onClose }) => {
    return (
      <div className="dialogOverlay">
        <div className="dialogBox">
          <h3>Are you sure?</h3>
          <p>You will be logged out of this account!</p>
          <div className="optButtons">
            <button
              onClick={() => {
                signOut(auth);
                onClose();
              }}
            >
              Log out
            </button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    );
  },
};

export default options;
