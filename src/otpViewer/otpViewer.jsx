import { useRef } from "react";

const OtpViewer = () => {
  const noOfInput = Array(6).fill(1);
  const testRef = useRef([]);

  const handelDown = (e) => {
    const { name, value } = e.target;
    if (name > -1 && value.length == 1) {
      if (name == noOfInput.length - 1) {
        testRef.current[noOfInput.length - 1].focus();
        return;
      }
      testRef.current[+name + 1].focus();
    }
    if (e.key == "Backspace" && !value.length) {
      if (name == 0) {
        testRef.current[0].focus();
        return;
      }
      testRef.current[name - 1].focus();
    }
  };


  const showInputFields = () => {
    return noOfInput.map((item, index) => {
      return (
        <div key={index}>
          <input
            type="number"
            name={`${index}`}
            onKeyUp={handelDown}
            ref={(e) => {
              testRef.current[index] = e;
            }}
          />
        </div>
      );
    });
  };

  return <div>{showInputFields()}</div>;
};

export default OtpViewer;


